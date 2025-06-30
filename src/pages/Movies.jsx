import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getBooks();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault()
        getBooks();

    };

    const getBooks = () => {
        const params = {};
        if (search) {
            params.search = search;
        }
        axios.get(`${import.meta.env.VITE_API_URL}/movies`, {
            params: {
                search,
            },
        })
            .then((resp) => {
                setMovies(resp.data.data);
            })
    }



    return (
        <>
            <main>
                <section className="container py-5">
                    <h1 className="text-center">Movies Page</h1>
                    <form className="mb-4 d-flex justify-content-center" onSubmit={handleSubmit}>
                        <input
                            className="form-control w-50"
                            type="search"
                            placeholder="Inizia qui la ricerca dei film"
                            aria-label="Cerca film per titolo"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                        <button className="btn btn-primary" type="submit">CERCA</button>
                    </form>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                        {movies.map((curMovie) => {
                            return (
                                <div className="col" key={curMovie.id}>
                                    <MovieCard movie={curMovie} />
                                </div>
                            )
                        })}

                    </div>
                </section>
            </main>
        </>
    );
};

export default Movies;