import React from "react";
import "../Carousel/CarouselCard.css";

const CarouselCard = ({ imgUrl, companyName, description, jobType }) => {
  return (
    <>
      <div className="caroMainContainer">
        <div className="caroContainer">
          <div>
            <img src={imgUrl} className="logo" />
          </div>
          <div className="companyName">
            <h3>{companyName}</h3>
          </div>
          <div>
            <p className="description">{description}</p>
          </div>
          <div>
            <p className="jobtype">{jobType}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
