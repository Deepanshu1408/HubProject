import React from "react";
import "../CategoryCard/CategoryCard.css";

const CategoryCard = ({ logoUrl, CategoryType }) => {
  return (
    <>
      <div className="mainConatiner1">
        <div className="container1">
          <div className="logo">
            <img src={logoUrl} alt="" />
          </div>
          <div className="category">
            <p>{CategoryType}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
