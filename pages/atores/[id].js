import Galeria from '@/components/Galeria'
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

      <Galeria titulo="Imagens do ator" lista={imagens} foto="file_path" size={1}/>
      <Galeria titulo="Filmes que atuou" lista={filmes} foto="poster_path"/>
      <Galeria titulo="Séries que atuou" lista={series} foto="poster_path" link="series"/>

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