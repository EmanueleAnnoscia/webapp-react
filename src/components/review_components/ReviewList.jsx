import ReviewCard from "./ReviewCard";

const ReviewList = () => {
    return (
        <>
            {
                reviews.length === 0 ? (
                   <Alert type="info" text="Non vi sono recensioni al momento" />
                ) : (
                    <div className="row row-cols-1 g-3">
                        {
                            movie.reviews.map(curReview => (
                                <div className="col" key={curReview.id}>
                                    <ReviewCard review={curReview} />
                                </div>
                            ))}
                    </div>
                )
            }
        </>

    )
};

export default ReviewList;