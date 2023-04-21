import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ ator, filmes, series, imagens }) => {

  return (
    <Pagina  titulo={ator.name}>

      <Row>
        <Col md={3}>
          <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + ator.profile_path} />
        </Col>

        <Col className='text-white' md={9}>
          <p><strong>Data de Nascimento: </strong>{ator.birthday}</p>
          <p><strong>Local de Nascimento: </strong>{ator.place_of_birth}</p>
          <p><strong>Biografia do ator: </strong>{ator.biography}</p>
        </Col>
      </Row>

      <h2 className='mt-4 text-white bg-danger text-center'>Imagens</h2>
      <Row>
        {imagens.map(item => (
          <Col className='mb-3' md={1}>
            <Link href={'/filmes/' + item.id}>
              <Card.Img variant='top' src={"https://image.tmdb.org/t/p/w500" + item.file_path} />
            </Link>
          </Col>
        ))}
      </Row>

      <h2 className='mt-4 text-white bg-danger text-center'>Filmes que ele atuou</h2>
      <Row>
        {filmes.map(item => (
          <Col className='mb-1' title={item.title} md={2}>
            <Link href={'/filmes/' + item.id}>
              <Card.Img variant='top' src={"https://image.tmdb.org/t/p/w500" + item.poster_path} />
            </Link>
          </Col>
        ))}
      </Row>

      <h2 className='mt-4 text-white bg-danger text-center'>Séries que ele atuou</h2>
      <Row>
        {series.map(item => (
          <Col className='mb-1' title={item.title} md={2}>
            <Link href={'/filmes/' + item.id}>
              <Card.Img variant='top' src={"https://image.tmdb.org/t/p/w500" + item.poster_path} />
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

  const res_ator = await apiFilmes.get('/person/' + id)
  const ator = res_ator.data

  const res_images = await apiFilmes.get('/person/' + id + '/images')
  const imagens = res_images.data.profiles

  const res_filmes = await apiFilmes.get('/person/' + id + '/movie_credits')
  const filmes = res_filmes.data.cast

  const res_series = await apiFilmes.get('/person/' + id + '/tv_credits')
  const series = res_series.data.cast

  return {
    props: { ator, filmes, series, imagens },
  }
}