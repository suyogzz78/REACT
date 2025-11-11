import React from 'react'

function Button({children,
    type = "button",
    bgColor = "blue",
    textColor ="white",
    className = "",
    ...props
}) {
    return (
        <button
        className={`px-4 py-3 rounded-xl  ${bgColor} ${textColor} ${className}`} {...props} >    {children}      </button>
        
    )
}

export default Button
