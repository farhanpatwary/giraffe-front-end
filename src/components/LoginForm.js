import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        console.log(this.state)
    }
    async handleSubmit(event) {
        event.preventDefault();
        if(this.state.email === '' || this.state.password === ''){
            alert('Please enter email and password')
            return
        }
        const formdata = {
            email: this.state.email,
            password: this.state.password
        }
        let data = await fetch('http://localhost:8000/users/login', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type':'application/json',
            }    
        })
        const jsondata = await data.json()
        sessionStorage.setItem('token',jsondata.token)
    }

 
    render() {
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
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                </Form>
            </Container>
        )
    }
}
