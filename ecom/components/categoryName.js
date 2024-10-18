import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



async function getData() {
  const res = await fetch('http://localhost:8000/api/v1/product/allcat')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}




const CategoryName =async () => {
  const data = await getData()

  let arr=[]
  data.map(item=>{
    item.stastus!="waiting" &&
    arr.push(item)
  })


  return (
    
    <Container className='my-5 text-center'>

{arr.length >0? arr.map((item,i)=>(
  item.stastus!="waiting" &&
  <Button key={i} className='m-2 text-capitalize' variant="secondary">{item.name}</Button>
)):<h1>No Category Found</h1>}


      
       

    </Container>
   
  )
}

export default CategoryName