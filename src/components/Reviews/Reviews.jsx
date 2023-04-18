import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../../serviсes/api";

const Reviews = () => { 
    const {id} = useParams();
    const [movie, setMovie] = useState('');

    useEffect(() => {
        API.findReviewsMovieById(id)
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
            
            {(movie !== '')&& (
                <ul>
                    {movie.results.map((review) => { 
                        return (
                            <li key={ review.author}>
                                <p>Author: {review.author}</p>
                                <p>{review.content}</p>
                                <hr></hr>
                            </li>
                        )
                    }
                    )}
                </ul>)}
            {((movie!=='')&&(movie.total_results===0))&&(<p>Sorry, we don't have any reviews for this movie</p>)}
        </div>
)}

export default Reviews