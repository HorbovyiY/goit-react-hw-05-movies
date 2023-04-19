import { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";

import * as API from "../serviсes/api";

const Movies = () => { 
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q');
    const location = useLocation();
    
    useEffect(() => { 
        if (q === null) { return}
        API.findMovieBySearch(q)
            .then((response) => response.json())
            .then((resp) => resp.results)
            .then((res) => {
                setMovies(res)
            })
            .catch((error)=>
                console.log(error)
        )
    },[q])

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
                .catch((error) =>
                    console.log(error)
                )
            setSearchParams({ q: query })
            setQuery('');
        
        if (query === '') { setSearchParams({})}
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
                        movie => <li key={movie.id}><Link to={`${movie.id}`} state={{from: location}}>{movie.title}</Link></li>
                    )}
                </ul>)}
        </>
    )
}

export default Movies