import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'

const Post = (props) => {
    var imgurl = `http://localhost:8000/posts/${props.id}/image`
    const time = props.dateCreated.slice(11,16)
    const date = props.dateCreated.slice(0,10)
    const user_page_path = `/users/${props.owner_id}`
    const link_style = {
        'color':'black'
    }
    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><a href={user_page_path} style={link_style}>By: {props.owner_name}</a></Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Created at: {time} on {date}</Card.Subtitle>    
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p>{props.description}</p>
                        <Image src={imgurl} alt="" fluid />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Post
