import SingleProduct from "@/components/singleProduct";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

async function getData(id) {
  const res = await fetch(`http://localhost:8000/api/v1/product/search/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Search = async ({ params }) => {
  let data = await getData(params.slug);
  console.log(data);

  let arr = [];
  data?.data?.map((item) => {
    item.stastus != "waiting" && arr.push(item);
  });

  return (
    <Container>
      <Row className="justify-content-md-center">
        {arr.length > 0 ? (
          arr.map(
            (item, i) =>
              item.stastus != "waiting" && (
                <Col xs lg="3">
                  <SingleProduct key={i} item={item} />
                </Col>
              )
          )
        ) : (
          <h1>No Product Found</h1>
        )}
      </Row>
    </Container>
  );
};

export default Search;
