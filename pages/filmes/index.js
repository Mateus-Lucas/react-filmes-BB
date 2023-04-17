import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const index = (props) => {
    return (
        <Pagina titulo="Filmes">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            {props.filmes.map(item => (
                <p>{item.title}</p>
            ))}
        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/movie/popular')
    const filmes = resultado.data.results

    return {
        props: { filmes },
    }
}