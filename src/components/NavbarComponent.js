import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current_user:'egirl',
          signed_in: false,
          current_tab: 'Popular'
        };
    }
    componentDidMount(){
    
    }
    render() {

        const srcstyle = {
            'marginLeft':'100px',
            'marginRight':'100px',
            'width':'600px',
            'float':'center'
        }
        const xstyle = {
            'marginLeft':'100px',
            'marginRight':'100px',
            'width':'100px',
            'float':'center'
        }
        
        //navbar when not signed in shows log in and sign up options
        if(this.state.signed_in === false){
            return (
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Giraffe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title={this.state.current_tab} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">Popular</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl style={srcstyle} type="text" placeholder="Search Giraffe.." className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                    <Nav className="mr-auto"></Nav>
                    <NavDropdown style={xstyle} title="Options" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/login">Log in</NavDropdown.Item>
                        <NavDropdown.Item href="/signupform">Sign Up</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Header>More Stuff</NavDropdown.Header>
                        <NavDropdown.Item href="#action/3.1">Help</NavDropdown.Item>
                    </NavDropdown>
                    </Navbar.Collapse>
                    
                </Navbar>
            )
        }
        //navbar when signed in shows user options dropdown
        else {
            return (
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Giraffe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title={this.state.current_tab} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">Popular</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl style={srcstyle} type="text" placeholder="Search Giraffe.." className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                    <Nav className="mr-auto"></Nav>
                    <NavDropdown style={xstyle} title={this.state.current_user} id="basic-nav-dropdown">   
                        <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">My Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">User Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Header>More Stuff</NavDropdown.Header>
                        <NavDropdown.Item href="#action/3.1">Help</NavDropdown.Item>
                    </NavDropdown>
                    </Navbar.Collapse>
                </Navbar>
            )
        } 
    }
}

export default NavbarComponent
