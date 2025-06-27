const ReviewCard = ({ review }) => {
    const { name, vote, text, created_at} = review    //name è il nome della persona che effettua la recnsione 
    return (
        <div class="card">
            <div class="card-header">{vote}</div>
            <div class="card-body">
                <figure>
                    <blockquote class="blockquote">
                        <p>{text}</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        <cite title="Source Title">{name}</cite>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default ReviewCard;