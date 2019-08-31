import React, { Component } from 'react';
import logo from './github.png'


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-dark bg-dark ">
                <a className="navbar-brand m-auto" href="1">
                <img src={logo} width="50" height="50" className="d-inline-block mr-2" alt=""/>
                 GitHub Api
                 </a>
                </nav>
            
            
            
            </div>
            
         );
    }
}
 
export default Header;