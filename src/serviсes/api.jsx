const BASE_URL='https://api.themoviedb.org/3/'
const KEY = '81b825b8414e187e449b2c712f701899';

export const findPopularMovies=() => { 
    return fetch(`${BASE_URL}trending/movie/day?api_key=${KEY}`)
}