import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Redux stuff
import {connect} from "react-redux";
import * as user from "./actions/userActions";
//Components
import PageCard from './components/PageCard/Index';
import FacebookLogin from 'react-facebook-login';
import Welcome from './components/Welcome/Index';

//Utils



 class App extends Component {


  render() {


    const managedPages = this.props.pages.pages.map((val, index) => {
        if (this.props.pages.initialized === true) {
        
       return <PageCard key={index} likes={val.likes} name={val.name} />}
       return null;
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <br />
          <FacebookLogin textButton="Connect with Facebook"
          appId="451877625189079"
          callback={(response) => {this.props.dispatch(user.setUserName(response))}} 
          />
          <Welcome name={this.props.pages.user.name} />
          <br />
        </div>
        
         {managedPages}
         {console.log(this.props)}
        
        
      </div>
    );
  }
}

//console.log(this.props.pages.user.name)

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
   
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(App);