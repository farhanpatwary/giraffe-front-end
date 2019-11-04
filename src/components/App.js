import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

import Posts from './Posts'
import NavbarComponent from './NavbarComponent'
import About from './About'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import CreatePost from './CreatePost'

class App extends Component {
  constructor(){
    super()
    const cookies = new Cookies();
    var user = cookies.get('user') === undefined ? undefined : cookies.get('user')
    const loggedin = (user === undefined) ? false : true
    this.state = {
      signed_in: loggedin,
      current_tab: 'Popular',
      current_user: user,
    }
  }
  signIn(){
    const cookies = new Cookies();
    var user = cookies.get('user') === undefined ? undefined : cookies.get('user')
    this.setState({
      signed_in: true,
      current_user: user
    })
  }
  signOut(){
    this.setState({
      signed_in: false,
      current_user: undefined
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavbarComponent
          current_tab={this.state.current_tab}
          current_user={this.state.current_user}
          signed_in={this.state.signed_in}
          signIn={this.signIn.bind(this)} 
          signOut={this.signOut.bind(this)}
          />
          <Route exact path='/'  render={(props)=>(
            <Posts {...props}/>
          )}/>
          <Route path='/about' component={About}/>
          <Route path='/signupform' component={SignUpForm} />
          <Route path='/login' render={(props) => (
            <LoginForm {...props} 
            signIn={this.signIn.bind(this)}
            signed_in={this.state.signed_in}
            />
          )}/>
          <Route path='/createpost' component={CreatePost} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
