import React, { useEffect ,useState} from 'react'

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/suyogzz78')
    .then(response => response.json() )
    .then(data => setData(data))
  }, [])
  return (
    <>
    <div className='p-4 text-3xl bg-cyan-900 text-white text-center'>Github Followers :{data.followers}
    <img src= {data.avatar_url} alt='git picture' width={300}/>
    </div>
     </>
  )
}
 
export default Github