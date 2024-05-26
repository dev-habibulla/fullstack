"use client"
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleProduct = ({item}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={`http://localhost:8000${item.avatar}`} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{ __html: item.description }}>

        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default SingleProduct