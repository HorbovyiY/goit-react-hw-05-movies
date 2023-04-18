const BASE_URL='https://api.themoviedb.org/3/'
const KEY = '81b825b8414e187e449b2c712f701899';

export const findPopularMovies=() => { 
    return fetch(`${BASE_URL}trending/movie/day?api_key=${KEY}`)
}

export const findMovieById = (id) => { 
    return fetch(`${BASE_URL}movie/${id}?api_key=${KEY}`)
}

export const findCastMovieById = (id) => { 
    return fetch(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`)
}

export const findReviewsMovieById = (id) => { 
    return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}`)
}