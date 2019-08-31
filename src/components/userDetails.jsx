import React from 'react';


const UserDetails = ({ user1 } ) => {
    if (!user1){
        return <div className="text-center" >Please insert a username!</div>
    }


    return (
        <div>
           

           
<div className="card testimonial-card  m-auto text-center w-50 shadow  mb-5 bg-white rounded">

 
  <div className="card-up">

  
  <div className="avatar mx-auto white mt-2">
    <img src={user1.avatar_url} class="rounded-circle" alt="profile-pic" />
  </div>
    </div>
 
  <div className="card-body">
   
    <h2 className="card-title">{user1.name}</h2>
    <h3 className="card-title">{user1.login}</h3>
    <p>{user1.url}</p>
        
  </div>
  <div className="card-footer  bg-dark">
  <table className="table table-borderless text-white">
  <tbody>
  <tr>
      
      <td><h4>{user1.followers}</h4></td>
      <td><h4>{user1.following}</h4></td>
      <td><h4>{user1.public_repos}</h4></td>
    </tr>

    <tr>
      
      <td>Followers</td>
      <td>Following</td>
      <td>Repository</td>
    </tr>

      </tbody>   

  </table>
  
  </div>

</div>
</div>
    )
}

export default UserDetails;



