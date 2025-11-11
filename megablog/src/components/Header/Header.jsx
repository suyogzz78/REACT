import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Container,Logo,Logout} from '../index.js'
import { useNavigate } from 'react-router-dom';
function Header() {

    const authstatus = useSelector((state)=>state.auth.status)//getting auth status from redux store and useselector is used to access the redux store state
    const navigate= useNavigate();//hook to programmatically navigate between routes

    const navitem=[//array of navigation items to be displayed in header
        {
            name:"Home",
            slug:"/",//home route 
            active: true//always active
        },
                {
            name: "Login",
            slug: "/login",
            active: !authstatus, //show login only when user is not authenticated
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authstatus,//show signup only when user is not authenticated
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authstatus,//show all posts only when user is authenticated
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authstatus,//show add post only when user is authenticated
        },
    ]

    return (
        <header className='w-full bg-gray-800 py-4 mb-8' >
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to="/">
                            <Logo width="120px"/>
                        </Link>
                    </div>

                    <ul className='flex ml-auto'>
                        {navitem.map((item)=>
                            item.active ? (
                                <>
                                <li key={item.name}>
                                    <button onClick={()=>
                                        navigate(item.slug)
                                    }
                                    className='inline-block text-white font-bold px-6 py-4 hover:bg-white hover:text-blue-800 rounded-xl'
                            
                                    >{item.name}</button>

                                    
                                </li>
                                
                                </>

                            ): null
                        )}
                    </ul>
                </nav>

                </Container>
        </header>
    )
}

export default Header
