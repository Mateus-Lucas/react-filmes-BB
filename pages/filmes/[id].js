import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ filme, atores }) => {

    return (

        <Pagina titulo={filme.title}>

            <Row className='mb-5'>
                <Col md={3}>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + filme.poster_path} />
                </Col>

                <Col md={9} className='text-white'>
                    <p><strong>Orçamento: </strong>{filme.budget} $</p>
                    <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
                    <p><strong>Duração: </strong>{filme.runtime} minutos</p>
                    <p><strong>Nota: </strong>{filme.vote_avarege}</p>
                    <div>
                        <strong>Gêneros: </strong>
                        <ul>
                            {filme.genres.map(item => (
                                <p>{item.name}</p>
                            ))}
                        </ul>
                    </div>
                    <p>{filme.overview}</p>
                </Col>
            </Row>

            <h2>Atores</h2>
            <Row>
                {atores.map(item => (
                    <Col className='mb-3' md={2}>
                        <Link href={'/atores/' + item.id}>
                            <Card.Img title={item.name} variant="top" src={"https://image.tmdb.org/t/p/w500" + item.profile_path} />
                        </Link>
                    </Col>
                ))}
            </Row>

        </Pagina>

    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiFilmes.get('/movie/' + id)
    const filme = resultado.data

    const res_Atores = await apiFilmes.get('/movie/' + id + '/credits')
    const atores = res_Atores.data.cast

    return {
        props: { filme, atores },
    }
}