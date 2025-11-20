import React from 'react'
import { useState,useEffect } from 'react'
import { Container,Postform } from '../components'
import { AppwriteService } from '../appwrite/service'
import { useNavigate, useParams } from 'react-router-dom'
function Editpost() {
    const [post,setPosts]=useState(null)
    const {slug}=useParams();
    const navigate = useNavigate()
    useEffect(()=>{
        if (slug){
            AppwriteService.getPosts(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }else{
                    navigate('/')
                }
            })
        }

    },[slug,navigate])

  return post ? (
    <div className='py-8 w-full'>
        <div>
            <Container>
                <Postform post={post}/>
            </Container>
        </div>
    </div>
    ):null
  
}

export default Editpost