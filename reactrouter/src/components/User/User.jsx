import React from 'react'
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
function User() {
  const {id} = useParams(); // useParams hook to access the dynamic segment of the URL
  // id will contain the value of the dynamic segment in the URL, e.g., if
  return (
    <div className='bg-cyan-600 p-4 text-black text-3xl'>User:{id}</div>
  )
}

export default User