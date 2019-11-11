import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Form from 'react-bootstrap/Form'
import Cookies from 'universal-cookie';

export default class UserSettings extends Component {
    constructor(props){
        super(props)
        this.state = {
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.delete = this.delete.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const id = target.id;
        this.setState({
            [id]: value
        });
    }

    logOut(){
        const cookies = new Cookies();
        cookies.remove('user');
        cookies.remove('token');
        this.props.signOut()
    }

    updatePassword(e){
        e.preventDefault()
        const cookies = new Cookies();
        const token = cookies.get('token');
        if(token === undefined){
            this.props.history.push('/')
        } else {
            const formdata = {
                password: this.state.password
            }
            fetch('https://serene-escarpment-90033.herokuapp.com/users/users/me',{
                method: 'PATCH',
                body: JSON.stringify(formdata),
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(data => {
                if(data.ok !== true){
                    alert('Your Password needs to be 7 characters or longer')
                }
            })
        }
    }
    delete(e){
        e.preventDefault()
        const cookies = new Cookies();
        const token = cookies.get('token');
        if(token === undefined){
            this.props.history.push('/')
        } else {
            
            fetch('https://serene-escarpment-90033.herokuapp.com/users/me',{
                method: 'DELETE',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(data => {
                if(data.ok !== true){
                    alert('An error has occured. Please try again later.')
                } else{
                    this.logOut()
                    this.props.history.push('/')
                }
            })
        }
    }
    render() {
        return (
            <div>
                <Container>
                    <br/>
                    <h3>My Profile</h3>
                    <Form onSubmit={this.updatePassword}>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
                            <Form.Text className="text-muted">
                                Enter your new password.
                            </Form.Text>
                            <Form.Text className="text-muted">
                                Password must be at least 7 characters.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="outline-primary" type="submit">
                            Update Password
                        </Button>
                    </Form>
                    <br/>
                    <h3>Delete My Account</h3>
                    <p>
                        Deleting your Account is permanent. When deleting your account all your posts will also be deleted.
                    </p>
                    <Button variant="outline-danger" onClick={this.delete}>Delete My Account <Badge pill variant="light">SCARY</Badge></Button>
                </Container>
            </div>
        )
    }
}
