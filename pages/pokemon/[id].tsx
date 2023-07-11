import { useState } from "react"

import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"
import { GetStaticProps, NextPage, GetStaticPaths } from "next"

import confetti from 'canvas-confetti'

import { pokeApi } from "@/api"
import { Layout } from "@/components/layouts"
import { Pokemon } from "@/interfaces"
import { getPokemonInfo, localFavorites } from "@/utils"


interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {


  const [isInFavorites, setisInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

  const onToggleFavorite = () =>{
    localFavorites.toggleFavorite(pokemon.id)
    setisInFavorites(!isInFavorites)
  
    if(!isInFavorites){
      confetti({
        zIndex: 999,
        particleCount: 180,
        spread: 260,
        angle: -100,
        origin:{
          x:1,
          y:0
        }

      })
    }
  }


  return (
    <Layout title={pokemon.name || 'Pokemons'}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || './no-image.png'}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button
                color="gradient"
                ghost = {!isInFavorites}
                onClick={ onToggleFavorite }
              >
                { isInFavorites ? "En favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>sprites</Text>
              <Container display="flex" direction="row">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                 <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                 <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  //recorre un array de 1 a 151 (con ...Array(151)) donde de vuelve el valor de index + 1
  const pokemons151 = [...Array(151)].map((pokemon, index) => `${index + 1}`)
  return {
    paths: pokemons151.map(id => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string }

  const pokemon = await getPokemonInfo(id)

  if(!pokemon){
    return{
      redirect:{
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400, //esta en segundos
  }
}

export default PokemonPage

