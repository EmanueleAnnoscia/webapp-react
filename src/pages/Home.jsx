import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <section>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active position-relative">
                        <img src="/images/film-banner.jpg" className="d-block w-100" alt="film-banner" />
                    </div>
                    <h1 className="text-center position-absolute top-50 start-50 translate-middle bg-body-tertiary">Consulta il catalogo e lascia una recensione ⭐</h1>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </section>

            <section className= "container py-5">
                <h2 className="text-center">Consulta il catalogo dei Film!!</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, voluptas reprehenderit architecto qui voluptatem obcaecati et ad ullam laboriosam temporibus officiis officia nihil perspiciatis suscipit aperiam sapiente quas voluptatibus porro.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, voluptas reprehenderit architecto qui voluptatem obcaecati et ad ullam laboriosam temporibus officiis officia nihil perspiciatis suscipit aperiam sapiente quas voluptatibus porro.</p>
                <Link className= "btn btn-warning" to="/movies">Dai uno sguardo alla lista dei nostri film 🤓</Link>
            </section>


        </main>
    );
};

export default Home;