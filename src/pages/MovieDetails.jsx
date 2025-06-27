import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
    const{ id } = useParams;

    const [movie, setMovie] = useState (null);

    useEffect(()=>{
        axios.get(`http://localhost:3001/movies/${id}`).then((resp)=> {
            console.log(resp)
        })
    }, [])

    return (
        <main>
            {movie && movie.image && (
                <section>
                    <img src={movie.image} alt="" />
                </section>
            )}
            {movie && (
                <section className="container">
                    <h1>{movie.title}</h1>
                </section>
            )}
        </main>
    )
}

export default MovieDetails;