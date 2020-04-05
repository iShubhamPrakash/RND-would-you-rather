import React,{ Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { connect } from 'react-redux'

import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Add from './Add'
import { Route ,Switch} from 'react-router-dom'

import {getUsers} from '../actions/users'
import {fetchInitialData} from '../actions/initialData'

import {_getUsers} from '../api/_DATA'
class App extends Component {

  componentDidMount(){
    this.props.dispatch(getUsers());
  }

  render(){
    return (
      <>
        <CssBaseline />
        <Nav/>
        <div style={{height:"64px", width:"100%"}}></div>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/add">
            <Add/>
          </Route>
        </Switch>
        <Footer/>
      </>
    );
  }
}

export default connect()(App);
