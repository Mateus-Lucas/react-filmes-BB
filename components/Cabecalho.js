import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Filmes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Gêneros</Nav.Link>
            <Nav.Link href="#features">Lançamentos</Nav.Link>
            <Nav.Link href="#pricing">Feedback</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho