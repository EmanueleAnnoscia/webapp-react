import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewFilm = () => {
    const emptyFilm = {
        title: "",
        director: "",
        abstract: ""
    }

    const [formData, setFormData] = useState(emptyFilm)
    const navigate = useNavigate();

    const setFieldValue = (event) => {
        const { value, name } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const handleFormChange = () => {
        event.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/movies`, formData)
            .then((resp) => {
                const slug = resp.data.slug;
                navigate(`/movies/${slug}`)
            });
    }


    return (
        <main className="container py-5">
            <h1 className="text-center">Aggiungi un Film</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <form action="" onSubmit={handleFormChange}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-control">
                                Titolo
                            </label>
                            <input type="text" id="title" name="title" value={formData.title} onChange={setFieldValue} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="director" className="form-control" >
                                Regista
                            </label>
                            <input type="text" id="director" name="director" value={formData.director} onChange={setFieldValue} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="abstract" className="form-control">
                                Dettagli
                            </label>
                            <textarea type="text" id="abstract" name="abstract" value={formData.abstract} onChange={setFieldValue}></textarea>
                        </div>
                        <button className="btn btn-primary" type="submit">
                            INVIA
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )

}

export default NewFilm