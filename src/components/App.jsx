import React,{ Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { connect } from 'react-redux'

import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Add from './Add'
import NoFound from './NoFound'
import { Route ,Switch} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import LoadingBar from 'react-redux-loading-bar'


import {getUsers} from '../actions/users'
import {getQuestions} from '../actions/questions'

import {_getUsers} from '../api/_DATA'
class App extends Component {

  componentDidMount(){
    this.props.dispatch(getUsers());
    this.props.dispatch(getQuestions());
    console.log("Prope",this.props);
  }

  render(){
    return (
      <>
        <CssBaseline />
        <LoadingBar />
        <Nav username={this.props.auth.username} dispatch={this.props.dispatch}/>
        <div style={{height:"64px", width:"100%"}}></div>
        <Switch>
          <Route exact path="/login">
            <Login {...this.props}/>
          </Route>

          <ProtectedRoute exact path="/" component={Home} authenticated={this.props.auth.authenticated} questions={this.props.questions}/>
          <ProtectedRoute exact path="/add" component={Add} authenticated={this.props.auth.authenticated}/>
          <Route component={NoFound}/>
        </Switch>
        <Footer/>
      </>
    );
  }
}
const mapStateToProps=(state)=>{
  return state
}
export default connect(mapStateToProps)(App);
