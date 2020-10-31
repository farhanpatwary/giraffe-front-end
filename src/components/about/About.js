import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const About = () => {
    return (
        <Container>
            <br/>
            <h3>Features that have to be implemented</h3>
            <br/>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                            Search Functionality
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                            Upvote, Downvote and Comments
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                            Popular/All sorting
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link4">
                            Groups
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link5">
                            Testing
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <Container>
                                    <Card>
                                        <Card.Body>
                                            <p>
                                                The plan is to add search functionality to the
                                                Back End of the application.
                                            </p>
                                            <p>
                                                This will allow users users to use the search bar 
                                                to search for other users or posts.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <Container>
                                    <Card>
                                        <Card.Body>
                                            <p>
                                                The plan is to implement the required logic serverside and then create 
                                                Upvote, Downvote and Comment Buttons
                                                to the Post's page. 
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <Container>
                                    <Card>
                                        <Card.Body>
                                            <p>
                                                Once posts can be Upvoted and Downvoted, the Home page can be sorted differently.
                                            </p>
                                            <p>
                                                The user will be able to see posts sorted by popularity or most recent first.
                                            </p> 
                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                <Container>
                                    <Card>
                                        <Card.Body>
                                            <p>
                                            The plan is to add Groups, such that users can post to a specific group.
                                            </p>
                                            <p>
                                                As well as that, users will be able to follow or unfollow a group and see 
                                                new posts when they are posted.
                                            </p>  
                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link5">
                                <Container>
                                    <Card>
                                        <Card.Body>
                                            The plan is to add more tests, both Back End and Front End.
                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}

export default About
