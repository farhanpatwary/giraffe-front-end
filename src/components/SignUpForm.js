import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Cookies from 'universal-cookie';
export default class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
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
    async handleSubmit(event) {
        event.preventDefault();
        if(this.state.email === '' || this.state.password === ''){
            alert('Please enter email and password')
            return
        }
        let formdata = {
            name:this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        let data = await fetch('http://localhost:8000/users', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type':'application/json',
            }    
        })
        const jsondata = await data.json()
        const token = jsondata.token
        const cookies = new Cookies();
        cookies.set('token', token);
    }

    render() {
        return (
            <Container>
                <br/>
                <h3>Sign Up to Giraffe</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Name" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
                    </Form.Group>
                    <p>Already Registered? <a href="/login">Sign In here.</a></p>
                    <Button variant="outline-primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </Container>
        )
    }
}
