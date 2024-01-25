import React from "react";

const Review = ({ reviwe }) => {
  return (
    <div className="base">
      <p>{reviwe.review.title}</p>
      <p>{reviwe.review.description}</p>
      <p>{reviwe.review.date}</p>
      <img src={reviwe.review.avatar} alt="avatar" />
    </div>
  );
};

export default Review;
