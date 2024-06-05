import React from 'react'

async function getData(id) {
    const res = await fetch(`http://localhost:8000/api/v1/product/singlecategory?slug=${id}`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }


const CatDetails = async ({params}) => {

    const data = await getData(params.slug)

  return (
    data.map(item=>(
        <div>{item.name}</div>
    ))
   
  )
}

export default CatDetails