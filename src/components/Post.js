import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'

const Post = (props) => {
    var imgurl = `http://localhost:8000/posts/${props.id}/image`
    console.log(props)
    
    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><a>{props.name}</a></Card.Subtitle>
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
