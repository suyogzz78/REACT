
import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { login as authlog} from '../store/authslice.js'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {Button,Input,Logo} from './index.js'
import {useForm} from 'react-hook-form'

//index is used to import multiple components from a single file for code organization
function Login() {
const navigate= useNavigate();
const dispatch= useDispatch();
const {register,handleSumbit} = useForm();
const [error,setError]= React.useState("");


const login =async (data)=>{
    setError("");
    try{
        const session = await authService.login(data);//here data contains email and password
        if (session){//if session exists then user is successfully logged in
            const userdata = await authService.getCurrentuser();
            if (userdata){
                dispatch(authlog({userdata}));//here authlog is action creator imported from authslice.js to update redux store with user data it changes the state to authenticated
                navigate("/");//navigating to home page after successful login here / is the root route
            }
        }
        

    }
    catch(err){
            setError(err.message);
    }
}
  return (
    <div>Login</div>
  )
}

export default Login