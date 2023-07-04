
const toggleFavorite = (id: number) =>{

    //Arreglo de numeros
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if(favorites.includes(id)){
        favorites = favorites.filter(pokeId => pokeId !== id)
    }else{
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existInFavorites = (id: number): boolean =>{

    //Importante cuando se maneja localstorage
    if(typeof window  === 'undefined') return false //Si esto se genera del lado del servidor retorna false

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    return favorites.includes(id)
}


const pokemons = (): number[] =>{
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default{
    toggleFavorite,
    existInFavorites, 
    pokemons
}