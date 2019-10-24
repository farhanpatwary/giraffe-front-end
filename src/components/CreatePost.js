import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Cookies from 'universal-cookie';
class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
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
        if(this.state.title === '' || this.state.description === ''){
            alert('Please enter a title and description')
            return
        }
        const formdata = {
            title: this.state.title,
            description: this.state.description
        }
        const cookies = new Cookies();
        const authtoken = cookies.get('token');
        let data = await fetch('http://localhost:8000/posts', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${authtoken}`
            }    
        })
        console.log(data)
    }
    
    render() {
      return (
        <Container>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Insert title" onChange={this.handleChange}/>
                
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Insert Description" onChange={this.handleChange}/>
            </Form.Group>
            
            <Button variant="outline-primary" type="submit">
                Post
            </Button>
            </Form>
        </Container>
      )
    }
  }

export default CreatePost
