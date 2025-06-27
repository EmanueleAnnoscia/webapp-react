import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = (event) => {
        event.preventDefault();
        navigate(-1);
    };

    return (
        <a className="btn btn-outline-warning" onClick={goBack} >
            Torna alla pagina precedente
        </a>
    )
}

export default BackButton;