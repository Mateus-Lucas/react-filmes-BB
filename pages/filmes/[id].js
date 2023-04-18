import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Detalhes = ({ filme }) => {

    return (
        <>
            <Pagina titulo={filme.title}>
                <Card>
                    <Card.Header as="h5">Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Pagina>
        </>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id
    const resultado = await apiFilmes.get('/movie/' + id)
    const filme = resultado.data

    return {
        props: { filme }
    }
}