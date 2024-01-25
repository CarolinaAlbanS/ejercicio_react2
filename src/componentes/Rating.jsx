import React from "react";

const Rating = ({ estrella }) => {
  return (
    <div>
      <p>{estrella.review.rating}</p>
    </div>
  );
};

export default Rating;
