const ReviewCard = ({ review }) => {
    const { name, vote, text, created_at} = review    //name è il nome della persona che effettua la recnsione 
    return (
        <div className="card">
            <div className="card-header">{vote}</div>
            <div className="card-body">
                <figure>
                    <blockquote className="blockquote">
                        <p>{text}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        <cite title="Source Title">{name}</cite> il {created_at}
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default ReviewCard;