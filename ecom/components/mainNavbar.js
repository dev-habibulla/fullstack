"use client";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useRouter } from 'next/navigation'


const MainNavbar = () => {
  let [value, setValue] = useState("");
  const router = useRouter();

  let handleClick = () => {
    if (value) {
      router.push(`/search/${value}`);
    } else {
      console.log("Write Something for Search");
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Ecom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Desktop</Nav.Link>
            <Nav.Link href="#link">Laptop</Nav.Link>
            <Link href="/cart">Cart</Link>

            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  onChange={(e) => setValue(e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button onClick={handleClick} variant="primary">
                  Search
                </Button>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
