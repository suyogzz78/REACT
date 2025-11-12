import React from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}) {
    const id = React.useId(); //generating unique id for select field
    return (
       <div className='w-full'>
        {label && <label htmlFor={id} className='block
             text-gray-700 font-bold mb-2'>{label}</label>}
        <select
        {...props}
        id={id}
        className={`px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>       
            )
            )
        }
            
        </select>
       </div>
    )
}

export default React.forwardRef(Select)
