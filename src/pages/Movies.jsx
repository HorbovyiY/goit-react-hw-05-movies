import { useState } from "react"
import { Link } from "react-router-dom";

import * as API from "../serviсes/api";

const Movies = () => { 
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState('')

    const handleChange = (e) => { 
        setQuery(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        API.findMovieBySearch(query)
            .then((response) => response.json())
            .then((resp) => resp.results)
            .then((res) => {
                setMovies(res)
            })
            .catch((error)=>
                console.log(error)
        )
        
        setQuery('')
    }



    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
            {(movies !== '') && (
                <ul>
                    {movies.map(
                        movie => <li key={movie.id}><Link to={`${movie.id}`}>{movie.title}</Link></li>
                    )}
                </ul>)}
        </>
    )
}

export default Movies