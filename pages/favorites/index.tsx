
import { Layout } from "@/components/layouts"
import FavoritePokemons from "@/components/ui/FavoritePokemons"
import NoFavorites from "@/components/ui/NoFavorites"
import { localFavorites } from "@/utils"
import { NextPage } from "next"
import { useEffect, useState } from "react"

const FavoritePage: NextPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons)
  }, [])


  return (
    <Layout title="Pokemons - favoritos">
      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : (<FavoritePokemons pokemons={favoritePokemons}/>)
      }
    </Layout>
  )
}


export default FavoritePage
