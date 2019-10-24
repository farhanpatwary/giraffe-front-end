import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Posts from './Posts'
import NavbarComponent from './NavbarComponent'
import About from './About'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import CreatePost from './CreatePost'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavbarComponent/>
          <Route exact path='/' component={Posts} />
          <Route path='/about' component={About} />
          <Route path='/signupform' component={SignUpForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/createpost' component={CreatePost} />
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
