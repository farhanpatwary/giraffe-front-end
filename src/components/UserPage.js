import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import Post from './Post'

export default class UserPage extends Component {
    current_page = 0
    constructor(props){
        super(props)
        this.state = {
            id: props.match.params.id,
            user: undefined,
            posts: [],
            noMorePosts: false,
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount(){
        const user_url = `https://serene-escarpment-90033.herokuapp.com/users/${this.state.id}`
        console.log(user_url)
        fetch(user_url, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
            } 
        })
        .then((data)=>data.json())
        .then((jsondata)=> {
            this.setState({
                user: jsondata.user.name
            })
        })
        const posts_url = `https://serene-escarpment-90033.herokuapp.com/users/${this.state.id}/posts?limit=5&skip=0&sortBy=createdAt:desc`
        fetch(posts_url,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
            } 
        })
        .then(data => data.json())
        .then((jsondata)=>this.setState({
            posts: jsondata.posts
        }))
    }
    
    clickHandler(e){
        e.preventDefault()
        this.current_page = this.current_page + 5
        const url = `https://serene-escarpment-90033.herokuapp.com/users/${this.state.id}/posts?limit=5&skip=${this.current_page}&sortBy=createdAt:desc`
        fetch(url)
        .then((data)=>(data.json()))
        .then((data) => {
            if(data.posts.length === 0){
                this.setState({
                    noMorePosts: true
                })
            }
            let newposts = this.state.posts.concat(data.posts)
            this.setState({
                posts: newposts
            })
        })
    }

    posts(){
        const posts = this.state.posts.map((post) => 
                <Post 
                title={post.title} 
                description={post.description} 
                key={post._id} 
                id={post._id}
                owner_id={post.owner}
                owner_name={post.ownername}
                dateCreated={post.createdAt}
                />
        )
        return (
            <div>
                <br/>
                {posts}
                <br/>
            </div>
        )
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
        return (
            <div>
               <Container>
                   <br/>
                   <h3>{this.state.user}</h3>
                   <h5>{this.state.user}'s posts</h5>
                   {this.posts()}
                   {this.button()}
               </Container>
            </div>
        )
    }
}
