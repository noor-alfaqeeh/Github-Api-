import React from 'react';


const UserForm = (props) => {
    return(
        <form className="mx-2 my-auto d-inline w-100 " onSubmit={props.getUser} >
        <div className="input-group">
        <input  
              className="form-control border  mr-sm-2 " 
              type="text" 
              placeholder="Search"
              name='username' />
       <button className="btn btn-secondary my-2 my-sm-0 " 
               type="submit">Search</button>
       </div>
    
       </form>
    )
}
export default UserForm;