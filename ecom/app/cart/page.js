// "use client"
// import Image from 'next/image';
// import Table from 'react-bootstrap/Table';

// import Container from 'react-bootstrap/Container';

// async function getData() {
//     const res = await fetch('http://localhost:8000/api/v1/product/allcart')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.

//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data')
//     }

//     return res.json()
// }

// const Cart = async () => {
//     const data = await getData()

//     let totalPrice = 0
//     data.map(item => {
//         totalPrice += item.productId.saleprice ? item.productId.saleprice * item.quantity : item.productId.regularprice * item.quantity
//     })

//     let handleIncrese = async (id, type) => {

//         const rawResponse = await fetch(`http://localhost:8000/api/v1/product/createcart?type=${type}`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 productId: id,
//             })
//         });
//         const content = await rawResponse.json();

//     }

//     return (
//         <Container>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Image</th>
//                         <th>Name</th>
//                         <th>Quantity</th>
//                         <th>Unit Price</th>
//                         <th>Total</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item) => (
//                         <tr>
//                             <td>
//                                 <Image
//                                     src={`http://localhost:8000${item.productId.image[0]}`}
//                                     alt="Product Image"
//                                     width={50}
//                                     height={50}
//                                 />
//                             </td>
//                             <td>{item.productId.name}</td>
//                             <td>
//                                 <button onClick={() => handleIncrese(item.productId._id, "decre")} className='rounded m-2'>-</button>
//                                 {item.quantity}

//                                 <button onClick={() => handleIncrese(item.productId._id, "incre")} className='rounded m-2'>+</button>

//                             </td>
//                             <td>{item.productId.saleprice ? item.productId.saleprice : item.productId.regularprice}</td>

//                             <td>{item.productId.saleprice ? item.productId.saleprice * item.quantity : item.productId.regularprice * item.quantity}</td>
//                         </tr>
//                     ))}

//                 </tbody>
//             </Table>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Price</th>
//                         <th>Tax (15%)</th>
//                         <th>Delivery </th>
//                         <th>Total </th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     <tr>
//                         <td> {totalPrice}</td>
//                         <td> {Math.round(totalPrice * 15 / 100)}</td>
//                         <td> 50</td>
//                         <td> {totalPrice + (Math.round(totalPrice * 15 / 100)) + 50}</td>
//                     </tr>

//                 </tbody>
//             </Table>
//         </Container>
//     )
// }

// export default Cart

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const Cart = () => {
  let [data, setData] = useState([]);
  let [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8000/api/v1/product/allcart");

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      setData(await res.json());
    }
    getData();
  }, []);

  function total() {
    data.map((item) => {
      setTotalPrice(
        item.productId.saleprice
          ? item.productId.saleprice * item.quantity
          : item.productId.regularprice * item.quantity
      );
    });
  }

  let handleIncrese = async (id, type) => {
    let updateData = data.map((item) =>
      item.productId._id == id
        ? { ...item, quantity: item.quantity + (type == "incre" ? 1 : -1) }
        : item
    );
    setData(updateData);
    total();
    const rawResponse = await fetch(
      `http://localhost:8000/api/v1/product/createcart?type=${type}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: id,
        }),
      }
    );
    const content = await rawResponse.json();
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>
                <Image
                  src={`http://localhost:8000${item.productId.image[0]}`}
                  alt="Product Image"
                  width={50}
                  height={50}
                />
              </td>
              <td>{item.productId.name}</td>
              <td>
                <button
                  onClick={() => handleIncrese(item.productId._id, "decre")}
                  className="rounded m-2"
                >
                  -
                </button>
                {item.quantity}

                <button
                  onClick={() => handleIncrese(item.productId._id, "incre")}
                  className="rounded m-2"
                >
                  +
                </button>
              </td>
              <td>
                {item.productId.saleprice
                  ? item.productId.saleprice
                  : item.productId.regularprice}
              </td>

              <td>
                {item.productId.saleprice
                  ? item.productId.saleprice * item.quantity
                  : item.productId.regularprice * item.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Price</th>
            <th>Tax (15%)</th>
            <th>Delivery </th>
            <th>Total </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td> {totalPrice}</td>
            <td> {Math.round((totalPrice * 15) / 100)}</td>
            <td> 50</td>
            <td> {totalPrice + Math.round((totalPrice * 15) / 100) + 50}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
