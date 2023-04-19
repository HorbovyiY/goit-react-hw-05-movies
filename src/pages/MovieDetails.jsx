import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import * as API from "../serviсes/api";

const MovieDetails = () => { 
    const {id} = useParams();
    const [movie, setMovie] = useState('');
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/movies')

    useEffect(() => {
        API.findMovieById(id)
            .then((response) => response.json())
            .then((res) => {
                setMovie(res)
            })
            .catch((error)=>
                console.log(error)
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            {(movie !== '') && (
                <>
                    <p><Link to={backLink.current}>Go back</Link></p>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
                    <h2>{movie.original_title}</h2>
                    <p>Score: {movie.vote_average}</p>
                    <p>Overview</p>
                    <p>{movie.overview}</p>
                    <p>Genres</p>
                    <p>{movie.genres.map((genre) => {return genre.name+' '})}</p>
                    <p>Additional information</p>
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