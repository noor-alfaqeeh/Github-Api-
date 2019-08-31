import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import UserForm from './components/userform';
import axios from 'axios';
import UserDetails from './components/userDetails'

//https://api.github.com/users/noor
class App extends Component {
  state = { 
    
  users:null

   }


getUser = (e) => {
  e.preventDefault();
  const user = e.target.elements.username.value;
  axios.get(`https://api.github.com/users/${user}`)
  .then((result) => {
    this.setState({
  
      users:result.data
    })
  })
}







  render() { 
    return ( 
      <div className='container-fluid'>
        <Header/>
        <UserForm getUser={this.getUser} />
        <UserDetails user1={this.state.users} />

      </div>
     );
  }
}
 
export default App;
