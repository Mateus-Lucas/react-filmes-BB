import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Descricao = (props) => {
  return (
    <Row>
        <Col md={3}>
          <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + [props.foto]} />
        </Col>
        <Col className='text-white' md={9}>
        </Col>
      </Row>
  )
}

export default Descricao