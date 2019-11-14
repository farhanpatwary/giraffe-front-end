import React, { Component } from 'react'
import Cookies from 'universal-cookie';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this)
    }
    logOut(){
        const cookies = new Cookies();
        cookies.remove('user');
        cookies.remove('token');
        this.props.signOut()
    }
    searchBarStyle = {
        'marginLeft':'100px',
        'marginRight':'100px',
        'width':'600px',
        'float':'center'
    }
    dropdownStyle = {
        'marginLeft':'100px',
        'marginRight':'100px',
        'width':'100px',
        'float':'center'
    }

    dropdown = ()=> {
        if(this.props.signed_in === true){
            return (
                <Nav className="mr-auto">
                    <Nav.Link href="/createpost">Create Post</Nav.Link> 
                    <NavDropdown title={this.props.current_user} style={this.dropdownStyle} id="basic-nav-dropdown">   
                        <NavDropdown.Item onClick={this.logOut}>Log Out</NavDropdown.Item>
                        <NavDropdown.Item href="/settings">User Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Header>More Stuff</NavDropdown.Header>
                        <NavDropdown.Item href="/about">About</NavDropdown.Item>
                    </NavDropdown>           
                </Nav>
            )
        }
        else{
            return (
                <Nav className="mr-auto">
                    <NavDropdown title="Options" style={this.dropdownStyle} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/login">Log in</NavDropdown.Item>
                        <NavDropdown.Item href="/signupform">Sign Up</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Header>More Stuff</NavDropdown.Header>
                        <NavDropdown.Item href="/about">About</NavDropdown.Item>
                    </NavDropdown>     
                </Nav>
            )
        }  
    }
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Giraffe</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title={this.props.current_tab} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Popular</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav fill className="mr-auto">
                    <Form inline>
                        <FormControl  type="text"  placeholder="Search Giraffe.." className="input-large search-query" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Nav>
                <Nav className="mr-auto">
                    {this.dropdown()}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            )
        }    
}

export default NavbarComponent
