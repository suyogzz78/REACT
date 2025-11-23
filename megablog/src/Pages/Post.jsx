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
    AppwriteService.deletePost(post.$id).then((status)=>{
        if (status){
          AppwriteService.deleteFile(post.featuredImage);
          navigate("/");
        }
    });
  };
  return posts ?(
    <div className='w-full py-8'>
      <Container>
          <div className='w-full flex justify-center relative rounded-xl p-2'>
            <img
            src={AppwriteService.getFilePreview(posts.featuredImage)}
            alt={posts.title}
            className='rounded-xl'
            />
       
          {isauthor && (
            <div className='absoulte '>
              <Link to="/edit-post/${post.$id}">
                <Button bgColor="bg-green-600">
                  Edit
                </Button>
              
              </Link>

              <Button bgColor="bg-red-600" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
          </div>
          <div className='w-full mb-6'> 
              <h1 className='text-3xl font-semibold'>{posts.title}</h1>

          </div>
          <div className='browser-css'>
            {parse(posts.content)}
          </div>
      </Container>
    </div>
  ):null
}

export default Post