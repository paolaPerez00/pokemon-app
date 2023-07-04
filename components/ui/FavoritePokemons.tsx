import { Card, Grid } from "@nextui-org/react"
import FavoriteCardPokemon from "./FavoriteCardPokemon"

interface pokemonsFav{
    pokemons: number[]
}

const FavoritePokemons = ({pokemons}: pokemonsFav) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {
                pokemons.map(id => (
                    <FavoriteCardPokemon key={id} pokemonId={id}/>
                ))
            }
        </Grid.Container>
    )
}

export default FavoritePokemons
