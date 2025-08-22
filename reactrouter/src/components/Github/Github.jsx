import React, { useEffect ,useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  /*
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/suyogzz78')
    .then(response => response.json() )
    .then(data => setData(data))
  }, [])
  */
 const data =useLoaderData();
  return (
    <>
    <div className='p-4 text-3xl bg-cyan-900 text-white text-center'>Github Followers :{data.followers}
    <img src= {data.avatar_url} alt='git picture' width={300}/>
    </div>
     </>
  )
}
 
export default Github

export const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/suyogzz78');
  return response.json();
}