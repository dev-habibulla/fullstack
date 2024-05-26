import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const CategoryName = () => {
  return (
    
    <Container className='my-5 text-center'>
        <Button className='m-2' variant="secondary">Desktop</Button>
        <Button className='m-2' variant="secondary">Laptop</Button>
        <Button className='m-2' variant="secondary">Apple</Button>

    </Container>
   
  )
}

export default CategoryName