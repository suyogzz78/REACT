import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth'
import {logout} from '../../store/authslice.js'
import { use } from 'react'
function Logout() {

    const dispatch =useDispatch();

    const handlelogout= ()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
    return (
      <button className='rounded-xl bg-blue-800 font-bold hover:bg-white inline-block px-6 py-4'
      onClick={handlelogout}>Logout</button>
    )
}

export default Logout
