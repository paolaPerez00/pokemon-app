
import { Layout } from "@/components/layouts"
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
      <NoFavorites/>
    </Layout>
  )
}


export default FavoritePage
