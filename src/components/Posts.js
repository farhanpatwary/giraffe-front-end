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
    async componentDidMount() {
        const url = 'http://localhost:8000/posts';
        const resp = await fetch(url)
        const data = await resp.json()
        this.setState({
            posts: data
        })
    }
    
    render() {
        const posts = this.state.posts.map((post) => 
            <Post title={post.title} description={post.description} key={post.id}/>
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
