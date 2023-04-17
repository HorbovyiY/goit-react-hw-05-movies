import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../../serviсes/api";

const Cast = () => { 
    const {id} = useParams();
    const [movie, setMovie] = useState('');

    useEffect(() => {
        API.findCastMovieById(id)
            .then((response) => response.json())
            .then((res) => {
                setMovie(res)
            })
            .catch((error)=>
                console.log(error)
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <div>
            {(movie !== '') && (
                <ul>
                    {movie.cast.map((actor) => { 
                        return (
                            <li key={ actor.id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
                                <p>{actor.name}</p>
                                <span>{actor.character}</span>
                                <hr></hr>
                            </li>
                        )
                    }
                    )}
                </ul>)}
        </div>
)}

export default Cast