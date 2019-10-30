import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Cookies from 'universal-cookie';

const axios = require('axios');
class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            image: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const id = target.id;
        if(target.files){
            this.setState({
                image: target.files[0]
            });
            return
        }
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

        const cookies = new Cookies();
        const authtoken = cookies.get('token');

        const form = new FormData();
        form.append('upload',this.state.image)
        form.append('title',this.state.title)
        form.append('description',this.state.description)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${authtoken}`
            }
        }
        axios.post('http://localhost:8000/posts', form, config).catch((e)=> {
            if(e.response){
                console.log(JSON.stringify(e));

            }
        })
        
    }
    
    render() {
      return (
        <Container>
            <br/>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Insert title" onChange={this.handleChange}/>
                
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Insert Description" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="image">
                <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="image">
                    Upload
                    </span>
                </div>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="image" aria-describedby="image" onChange={this.handleChange}/>
                    <label className="custom-file-label" htmlFor="image">
                    Choose file
                    </label>
                </div>
                </div>
            </Form.Group>
            
            <Button variant="outline-primary" type="submit" block>
                Post
            </Button>
            </Form>
        </Container>
      )
    }
  }

export default CreatePost
