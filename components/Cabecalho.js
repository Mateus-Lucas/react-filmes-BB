import Link from 'next/link'
import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href='/'>Inicio</Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title='Filmes'>
            <Link className='dropdown-item' href='/filmes/populares'>Populares</Link>
            <Link className='dropdown-item' href='/filmes/lancamentos'>Lançamentos</Link>
            <Link className='dropdown-item' href='/filmes/emcartaz'>Em cartaz</Link>
            <Link className='dropdown-item' href='/filmes/mais_votados'>Melhores Avaliados</Link>
          </NavDropdown>
          <NavDropdown title='Séries'>
            <Link className='dropdown-item' href='/series/populares'>Populares</Link>
            <Link className='dropdown-item' href='/series/lancamentos'>Lançamentos</Link>
            <Link className='dropdown-item' href='/series/emcartaz'>Em cartaz</Link>
            <Link className='dropdown-item' href='/series/mais_votados'>Melhores Avaliadas</Link>
          </NavDropdown>
          <NavDropdown title='Atores'>
            <Link className='dropdown-item' href='/atores/'>Populares</Link>
            <Link className='dropdown-item' href='/atores/lancamentos'>Lançamentos</Link>
            <Link className='dropdown-item' href='/atores/emcartaz'>Em cartaz</Link>
            <Link className='dropdown-item' href='/atores/mais_votados'>Melhores Avaliadas</Link>
          </NavDropdown>
          <Nav.Link href="#home">Gênero</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Cabecalho