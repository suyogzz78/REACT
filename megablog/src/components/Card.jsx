import React from 'react'
import { AppwriteService } from '../appwrite/service'
import { Link } from 'react-router-dom'
function Card({$id,title,featuredImage}) {
    return (
        <Link to={`/post/${$id}`} className='block border border-gray-300 rounded-lg overflow-hidden'>
            <div className='w-full rounded-full bg-slate-600 p-3'>
                <div className='w-full h-48 bg-cover bg-center'>
                    <img src={AppwriteService.getFilePreviewURL(featuredImage,'400x300')} alt={title} className='w-full h-full object-cover rounded-lg'/>
                </div>
                <h2 className='font-bold'>{title}</h2>
            </div>
            </Link>

    )
}

export default Card
