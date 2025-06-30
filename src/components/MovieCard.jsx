import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const {id, title, director, genre, release_year, image, vote_avg, abstract} = movie;

    return (
        <div className="card h-100" >
            <img 
            src={image || "https://placehold.co/294.4x429.55?text='Immagine non Disponibile'"} 
            className="card-img-top" 
            alt={`Immagine del film ${title}`} 
            />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">{director}</h5>
                    <h6 className="card-title">{genre}</h6>
                    <h6 className="card-title">{release_year}</h6>
                    <p className="card-text">{abstract}</p>
                    <Link to={`/movies/${id}`} className="btn btn-primary">Visualizza dettagli</Link>
                </div>
        </div>
    );
}

export default MovieCard;