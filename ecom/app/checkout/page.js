"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
const Checkout = () => {
  let [data, setData] = useState({
    amount: localStorage.getItem("totalprice"),
    cus_name: "",
    cus_email: "",
    cus_add1: "",
    cus_add2: "",
    cus_country: "Bangladesh",
    cus_city: "",
    cus_state: "",
    cus_postcode: "",
    cus_phone: "",
  });

  let handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    console.log(e.target.value);
    console.log(e.target.name);
  };

  let handleCheckOut = async () => {
    const res = await fetch("http://localhost:8000/api/v1/product/payment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let url = await res.json();

    window.location.href = url.payment_url;
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  };
  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              name="cus_name"
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Email"
              name="cus_email"
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Address Line 1"
              name="cus_add1"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address Line 2"
              name="cus_add2"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country"
              name="cus_country"
              onChange={handleChange}
              defaultValue={"Bangladesh"}
              disabled
            />
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="cus_city"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              name="cus_state"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Post Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Post Code"
              name="cus_postcode"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              name="cus_phone"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button onClick={handleCheckOut}>
          Proceed CheckOut {localStorage.getItem("totalprice")}
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;
