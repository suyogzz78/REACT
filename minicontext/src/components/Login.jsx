import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'
function Login() {
const [username,setUsername]=useState('')
const [password,setPassword]=useState('')

const {setUser} = useContext(UserContext);
const handlesubmit=()=>{
    e.prevent.default();
    setUser({username,password});
    setUsername('');
    setPassword('');

}

    return (
        <div className='text-center mt-5 flex flex-col gap-3'>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
            <button onClick={handlesubmit}>Login</button>
        </div>
    )
}

export default Login
