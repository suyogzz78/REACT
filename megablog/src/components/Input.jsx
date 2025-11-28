import React from 'react'

const Input = React.forwardRef ( function  Input ( {

    label,
    type = "text",
    placeholder = "",
    className = "",
    ...props
},ref){
    const id = React.useId(); //generating unique id for input field 
    return (
         <>
         <div className='w-full'>
            {label && <label htmlFor={id} className='block
             text-gray-700 font-bold mb-2'>{label}</label>}
            <input
            type={type}
            id={id}
            className={`px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none 
                focus:border-blue-500 ${className}`}
                ref={ref}//forwarding ref to the input element
                {...props} //spreading any additional props to the input element
                
                />

         </div>
         </>
    )
})

export default Input
