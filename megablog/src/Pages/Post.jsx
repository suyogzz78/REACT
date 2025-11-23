import React from 'react'
import { AppwriteService } from '../appwrite/service'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Button,Container} from "../components/index"
import { useSelector } from 'react-redux'
import parse from "html-react-parser"

function Post() {

  const [posts,setposts] = useState(null);
  const {slug} =useParams();
  const navigate = useNavigate();
   
  const userData = useSelector((state)=>state.auth.userData);

  const isauthor = post && userData ? post.userId === userData.$id :false ;

  useEffect(()=>{
    if (slug){
      AppwriteService.getPosts(slug).then((posts)=>{
        if (posts)
        {
          setposts(posts);
        }
        else navigate("/");
      })
    }else navigate("/")

  },[navigate,slug])

  const deletePost = ()=>{
    AppwriteService.getPosts(post.$id).then((status)=>{

    })
  }
  return (
    <div>Post</div>
  )
}

export default Post