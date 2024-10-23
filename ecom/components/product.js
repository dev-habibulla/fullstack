import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleProduct from './singleProduct';


async function getData() {
  const res = await fetch('http://localhost:8000/api/v1/product/allproduct')
  if (!res.ok) {
  
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const Product = async () => {
  const data = await getData()

  let arr=[]
  data.map(item=>{
    item.stastus!="waiting" &&
    arr.push(item)
  })


  return (

    <Container>
      <Row className="justify-content-md-center">

      

{arr.length >0? arr.map((item,i)=>(
  item.stastus!="waiting" &&
  <Col xs lg="3">
            <SingleProduct key={i} item={item} />
          </Col>
)):<h1>No Product Found</h1>}


      </Row>

    </Container>
  )
}

export default Product