import Css from "./ReviewsList.module.css";

export default function Reviews({ reviews = [] }) {
  if (!reviews.length) {
    return <p className={Css.empty}>No reviews yet.</p>;
  }

  return (
    <div className={Css.wrap}>
      {reviews.map((review, index) => (
        <div key={index} className={Css.review}>
          <div className={Css.avatar}>
            {review.reviewer_name?.[0]?.toUpperCase() || "U"}
          </div>
          <div className={Css.body}>
            <div className={Css.header}>
              <div className={Css.name}>{review.reviewer_name}</div>
              <div className={Css.stars}>
                {Array.from({ length: 5 }).map((_, i) => {
                  const value = review.reviewer_rating ?? review.rating ?? 0;
                  const filled = i < Math.round(value);
                  return (
                    <span
                      key={i}
                      className={filled ? Css.starFilled : Css.starEmpty}
                    >
                      ★
                    </span>
                  );
                })}
              </div>
            </div>
            <p className={Css.comment}>{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
