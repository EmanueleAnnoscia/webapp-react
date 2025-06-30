import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/review_components/ReviewCard";
import BackButton from "../components/BackButton";
import ReviewList from "../components/review_components/ReviewList";
import Stars from "../components/Stars";

const MovieDetails = () => {
    const{ slug } = useParams();
    const navigate = useNavigate()

    const [movie, setMovie] = useState (null);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/movies/${slug}`).then((resp)=> {
            setMovie(resp.data.data)
        })
        .catch((err) => {
            if (err.status === 404){
                navigate ("/not-found")
            }
        });
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
                <section className="container py-4">
                    <BackButton />
                    <h1 className="text-center my-4 ">{movie.title}</h1>
                    <h3 className="text-center my-3 ">{movie.director}</h3>
                    <div className="text-center mb-4">Voto: {movie.vote_avg}
                        <Stars vote={movie.vote_avg} />
                    </div>
                    <p className="text-center">{movie.abstract}</p>
                </section>
                <section className="container mb-5">
                    <h2>RECENSIONI</h2>
                   <ReviewList reviews={movie.reviews}/>
                </section>
                </>
            )}
        </main>
    )
}

export default MovieDetails;