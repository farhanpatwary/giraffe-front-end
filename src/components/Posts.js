import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import Post from './Post'

export class Posts extends Component {
    current_page = 0
    constructor(props) {
        super(props);
        this.state = {
          posts: [],
          loaded: false,
          noMorePosts: false
        };
        this.clickHandler = this.clickHandler.bind(this)
    }
    componentDidMount(){
        const url = `http://localhost:8000/posts?limit=5&skip=0&sortBy=createdAt:desc`
        fetch(url)
        .then((data)=>(data.json()))
        .then((data) => this.setState({
            posts: data,
            loaded: true
        }))
    }

    clickHandler(e){
        e.preventDefault()
        this.current_page = this.current_page + 5
        const url = `http://localhost:8000/posts?limit=5&skip=${this.current_page}&sortBy=createdAt:desc`
        fetch(url)
        .then((data)=>(data.json()))
        .then((data) => {
            if(data.length === 0){
                this.setState({
                    noMorePosts: true
                })
            }
            let newposts = this.state.posts.concat(data)
            this.setState({
                posts: newposts,
                loaded: true
            })
        })
    }
    button(){
        if(this.state.noMorePosts === false){
            return (
                <Button variant="outline-dark" onClick={this.clickHandler} block>Load More Posts</Button>
            )
        }
        else{
            return (
                <Alert variant='light'>
                    No More Posts Available.
                </Alert>
            )
        }
    }
    render() {
        if(this.state.loaded === false){
            return (
                <Container>
                    <br/>
                    Loading Content
                    <br/>
                </Container>
            )
        }      
        else{
            const posts = this.state.posts.map((post) => 
                <Post 
                title={post.title} 
                description={post.description} 
                key={post._id} 
                id={post._id}
                name={post.ownername}
                dateCreated={post.createdAt}
                />
            )
            return (
                <Container>
                    <br/>
                    {posts}
                    <br/>
                    {this.button()}
                </Container>
            )
        }
    }
}

export default Posts
