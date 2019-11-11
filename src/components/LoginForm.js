import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            correctCredentials: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const id = target.id;
        this.setState({
            [id]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.email === '' || this.state.password === '') {
            alert('Please enter email and password')
            return
        }
        const formdata = {
            email: this.state.email,
            password: this.state.password
        }
        fetch('https://serene-escarpment-90033.herokuapp.com/users/login', {
                method: 'POST',
                body: JSON.stringify(formdata),
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((data) => {
                if (data.ok === true) {
                    this.setState({
                        correctCredentials: true
                    })
                }
                data.json()
                    .then((jsondata) => {
                        const cookies = new Cookies();
                        cookies.set('token', jsondata.token);
                        cookies.set('user', jsondata.user.name);
                        if (this.state.correctCredentials === true) {
                            return this.props.signIn()
                            //return this.props.history.push('/')
                        }
                    })
                    .catch((e) => (alert(e)))
            })
            .catch((e) => alert(e))
    }
    
    render() {
        if(this.props.signed_in === true){
            return <Redirect to='/' />
        }
        else{
            return (   
                <Container>
                    <br/>
                    <h3>Log In to Giraffe</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
                            <Form.Text className="text-muted">
                                Enter your password.
                            </Form.Text>
                        </Form.Group>
                        <p>Don't have an account? <a href="/signupform">Register here.</a></p>
                        <Button variant="outline-primary" type="submit">
                            Log in
                        </Button>
                    </Form>
                </Container>
            )
        }
        }
}
