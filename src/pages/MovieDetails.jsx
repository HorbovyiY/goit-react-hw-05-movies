import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom"
import * as API from "../serviсes/api";

const MovieDetails = () => { 
    const {id} = useParams();
    const [movie, setMovie] = useState('');
    console.log(id)

    useEffect(() => {
        API.findMovieById(id)
            .then((response) => response.json())
            .then((res) => {
                setMovie(res)
                console.log(res)
            })
            .catch((error)=>
                console.log(error)
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            {(movie!=='')&&(<>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
                    <h2>{movie.original_title}</h2>
                    <span>Score: {movie.vote_average}</span>
                    <span>Overview</span>
                    <span>{movie.overview}</span>
                    <span>Genres</span>
                    <span>{movie.genres.map((genre) => { return genre.name})}</span>
                    <span>Additional information</span>
            </>)}
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet/>
        </div>)
}

export default MovieDetails