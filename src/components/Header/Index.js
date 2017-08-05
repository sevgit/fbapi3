import React from 'react';
import './Index.css';


const Header = (props) => {

    function isLoggedIn() {
        // if(props.pages.pages.user.token) {
        //     return "Cuenta"
        // }
        // else {
        //     return "Log in"
        // }
        
    }
    console.log(props)
    return (
      <div className="nav">
        <ul>
            <li><a href="/user">USER</a></li>
            <li><a href="/user">USER</a></li>
            <li><a href="/user">USER</a></li>
            <li><a href="/user">{isLoggedIn()}</a></li>
        </ul>
      </div>

    );
  }


export default Header;
