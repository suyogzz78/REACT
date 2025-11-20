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
        //here bgColor and textColor are expected to be tailwind css classes like bg-blue-500 or text-white and the spread operator
        //  ...props allows passing any other button attributes like onClick, disabled etc.
        //children represents the content inside the button tags
        //the className prop allows for additional custom styling to be added
    )
}

export default Button
