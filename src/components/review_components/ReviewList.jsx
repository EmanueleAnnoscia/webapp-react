import Alert from "../Alert"
import ReviewCard from "./ReviewCard";

const ReviewList = ({reviews}) => {
    return (
        <>
            {
                reviews.length === 0 ? (
                   <Alert type="info" text="Non vi sono recensioni al momento" />
                ) : (
                    <div className="row row-cols-1 g-3">
                        {
                            reviews.map(curReview => (
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