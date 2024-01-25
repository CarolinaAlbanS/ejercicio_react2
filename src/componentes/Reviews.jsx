import React from "react";
import Review from "./Review";
import Rating from "./Rating";

const Reviews = ({ revi }) => {
  return (
    <div className="cuerpo">
      {revi.map((item, index) => (
        <div key={index}>
          <Review reviwe={item}></Review>
          <Rating estrella={item}></Rating>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
