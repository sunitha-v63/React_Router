import React, { useState } from 'react'


function ProtectedPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
        <p>Task 13:Display a Message like "Access 
        Denied" if the user is not logged in (without authentication). </p><br/>
    {isLoggedIn ? (
      <h2>Welcome to the protected page!</h2>
    ) : (
      <h2>Access Denied</h2>
    )}
       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
  </>
  )
}

export default ProtectedPage