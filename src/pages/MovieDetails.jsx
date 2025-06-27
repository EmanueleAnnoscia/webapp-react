import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
    const{ id } = useParams();

    const [movie, setMovie] = useState (null);

    useEffect(()=>{
        axios.get(`http://localhost:3001/movies/${id}`).then((resp)=> {
            setMovie(resp.data.data)
        })
    }, [])

    return (
        <main>
            {movie && movie.image && (
                <section>
                    <img className="banner" src={movie.image} alt="" />
                </section>
            )}
            {movie && (
                <>
                <section className="container">
                    <h1 className="text-center my-4 ">{movie.title}</h1>
                    <h3 className="text-center my-3 ">{movie.director}</h3>
                    <div className="text-center mb-4">Voto: {movie.vote_avg}</div>
                    <p className="text-center">{movie.abstract}</p>
                </section>
                <section className="container">
                    <h2>RECENSIONI</h2>
                    {
                        movie.reviews.length === 0 ? (
                            <div className="alert alert-info">
                                Per il momento non vi sono recensioni
                            </div>
                        ) : (
                            <div className="row row-cols-1 g-3">
                                
                                <div className="col"></div>
                            </div>
                        )
                    }

                </section>
                </>
            )}
        </main>
    )
}

export default MovieDetails;