import React from 'react'
import { Controller } from 'react-hook-form'

export default function RTE({name,control,label,defaultValue=""}) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 p-2'>{label}</label>}
      <Controller
      name='name'
      
      />
      
    </div>
  )        
}

