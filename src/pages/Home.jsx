import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as API from "../serviсes/api";

const Home = () => { 
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        API.findPopularMovies()
            .then((response) => response.json())
            .then((resp) => resp.results)
            .then((res) => {
                setMovies(res)
            })
            .catch((error)=>
                console.log(error)
            )
    },[])
    
    return (
        <ul>
        {movies.map(
            movie => <li key={movie.id}><Link to={`movies/${movie.id}`}>{movie.title}</Link></li>
            )}
        </ul>
    )
}

export default Home