import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Post from './Post'

export class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        };
    }
    render() {
        const url = 'http://localhost:8000/posts';
        fetch(url)
        .then((data)=>(data.json()))
        .then((data) => this.setState({
            posts: data
        }))
        const posts = this.state.posts.map((post) => 
            <Post 
            title={post.title} 
            description={post.description} 
            key={post._id} 
            id={post._id}
            name={post.ownername}/>
        )
        return (
            <Container>
                <br/>
                {posts}
                <br/>
            </Container>
        )
    }
}

export default Posts
