import { useState } from "react";
import axios from "axios";

const NewReview = ({movie_id, reloadReviews}) =>{

    const emptyReview= {
            name:"",
            vote:"1",
            text:""
    
        };

        const [formData, setFormData] = useState(emptyReview);

        const setFieldValue = (event) => {
        const {value, name} = event.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        //fare la chiamata API
        axios.post(`http://localhost:3001/movies/${movie_id}/reviews`, formData)
        .then((resp)=>{
            //quando arriva la risposta
            // resetto il form
            setFormData(emptyReview);
            //ricarico i dati, E SOLO I DATI, della paginaper mostrare i dati aggiornati
            reloadReviews();
        });

    };

    return(
        <section className="container py-3">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="card">
                        <form className="card-body" onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Nome
                                </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={setFieldValue}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vote" className="form-label">
                                    Vote
                                </label>
                                <select className="form-select"   id="vote" name="vote" value={formData.vote} onChange={setFieldValue}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">
                                    Recensione
                                </label>
                                <textarea 
                                className="form-control" 
                                id="text" 
                                name="text" 
                                value={formData.text}
                                onChange={setFieldValue}></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">
                                INVIA
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default NewReview;