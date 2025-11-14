import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

 export default  function Protected({children,authentication=true}) { //authentication prop to check if user is authenticated or not
        const navigate= useNavigate();
        const authstatus=useSelector((state)=>state.auth.status);//getting auth status from redux store
        const [loading,setloading]= useState(true);//here the loading is set to true initially to avoid flickering of components while checking auth status


    useEffect(()=>{
        if(authentication && authstatus !== authentication){//if authentication is true and authstatus is not equal to authentication then navigate to login page
            navigate("login");

        }
        else if (!authentication && authstatus !== authentication){//if authentication is false and authstatus is not equal to authentication then navigate to home page

            navigate("/");
        }

        setloading(false);//set loading to false after checking auth status

    },[authstatus,authentication,navigate])
  return loading ? <h1>Loading...</h1> : <>{children}</>;
}

