
import { Button, Grid } from '@nextui-org/react'
import { Inter } from 'next/font/google'

import { Layout } from '../components/layouts'
import { GetStaticProps } from 'next'
import { pokeApi } from '@/api'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import PokemonCard from '@/components/pokemon/PokemonCard'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  pokemons: SmallPokemon[];
}


export default function HomePage({ pokemons }: Props) {

  return (
    <Layout title='Pokemon Gina'>
      <Button color="gradient">
        Hello world
      </Button>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemon) =>
            <PokemonCard key={pokemon.id} pokemon={pokemon} >
            </PokemonCard>
          )
        }
      </Grid.Container>

    </Layout>

  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((x, index) =>
  ({
    ...x,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  })
  )

  return {
    props: {
      pokemons
    }
  }
}
