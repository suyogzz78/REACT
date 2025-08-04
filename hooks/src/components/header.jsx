import React from 'react'

const Header = () => {
    console.log("Header component rendered");
  return (
    <div>
        <h1>Header</h1>
    </div>
  )
}

export default React.memo(Header) // This will prevent unnecessary re-renders of the Header component when the parent component re-renders.