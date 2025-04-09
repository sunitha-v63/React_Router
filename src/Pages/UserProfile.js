
import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

function UserProfile() {
  const { id, name } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(error => console.error("Error:", error));

      return(()=>{
        console.log("memory clean");
        
      })
  }, [id]);

  return (
    <>
      <h3>User Profile - ID: {id}</h3>
      <h4>User Name: {name}</h4>
      {user ? <h2>Name: {user.name}</h2> : <p>Loading</p>}
      <NavLink to={`/user/${id}/posts`}>See Posts</NavLink>
    </>
  );
}

export default UserProfile;
