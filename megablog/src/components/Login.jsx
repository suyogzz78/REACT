
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
const {register,handleSubmit} = useForm();
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
    catch(error){
            setError(error.message);
    }
}
  return (

    <div className='flex items-center justify-center w-full'>
      <div className='w-full max-w-md p-8 border border-gray-300 rounded-lg shadow-lg mx-auto'>
        <div className='flex justify-center mb-6'>
          <span className='inline-block w-full max-w-[100px]'>
            <Logo width="150px"/>
            </span>
            </div>
        <h2 className='text-2xl font-bold mb-6 text-center'>SignIn to Your Account</h2>
         <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'> 
            <div className='space-y-4 '>
                <Input 
                label="Email"
                type="email"
                placeholder="Enter your email"
                {...register("email",{required:true ,
                  validate: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(value) || "Invalid email address"

                })}//here ...register is used to register the input field with react-hook-form and it takes the field name and validation rules as arguments
                />
                <Input
                label="Password"
                type="password"
                placeholder="Enter your password" 
                {...register("password",{required:true,
                  minLength: {value:6, message:"Password must be at least 6 characters long"} 
                })}
                />

                <Button  
                type="submit"
                 >Sign In</Button>
            </div>
        </form>
        </div>

    </div>
  )
}

export default Login