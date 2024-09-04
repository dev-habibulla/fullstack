
import React from 'react'


async function getData(slug) {
    const res = await fetch(`http://localhost:8000/api/v1/product/singleproduct/${slug}`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }

const singleProduct =async ({params}) => {
    
    const data=await getData(params.slug)
  return (
   
    data.map(item=>(
        <h1>{item.name}</h1>
    ))
    
    
  )
}

export default singleProduct