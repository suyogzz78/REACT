import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
  const { user } = useContext(UserContext);
  console.log("User in Profile:", user);

  if (!user) return <div>Please Login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile
