import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()


    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('http://api.github.com/users/sanyamjain1408')
    //     .then(response => response.json())
    //     .then(data => {
            
    //         setData(data)
    //     })
    // })
  return (
    <div className='flex flex-row  place-content-evenly m-4 bg-green-600'>
     <div className=' place-content-center m-4  text-white p-4 text-3xl'>
     GitHub Followers : {data.followers} <br />
     GitHub Following : {data.following}
     </div>
     <div className=''> 
     <img src={data.avatar_url} alt="Git Picture" width={300} />
    
     </div>
     </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch('http://api.github.com/users/sanyamjain1408')
   return response.json()
}