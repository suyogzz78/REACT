import { useState,useEffect } from 'react'

import { useDispatch } from 'react-redux';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  return (
  <>
  <h1 >blog app using appwrite</h1>

  </>
  )
}

export default App
