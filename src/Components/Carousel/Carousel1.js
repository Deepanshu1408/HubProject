import React from "react";
import CarouselCard from "../Carousel/CarouselCard";
import Carousel from "react-elastic-carousel";
import "../Carousel/Carousel.css";
const breakPoints = [{ width: 1, itemToShow: 4 }];

const Carousel1 = () => {
  return (
    <>
      <div className="carousel123">
        <Carousel breakPoints={breakPoints}>
          <CarouselCard
            imgUrl="https://thehub-io.imgix.net/files/s3/20210122082510-bd654394b87d3cddb6f46b4f2d98bf3c.png?fit=crop&w=300&h=300&q=60"
            companyName="SoilSense"
            description="Rodinia Generation was created, with one goal in mind: Changing the fashion industry for the better. "
            jobType="Consumer Good, IT & Software"
          />
          <CarouselCard
            imgUrl="https://thehub-io.imgix.net/files/s3/20210120162507-45eb11f3d6ad634011bad5a02219c1af.jpg?fit=crop&w=300&h=300&q=60"
            companyName="Xilium A/S"
            description="Rodinia Generation was created, with one goal in mind: Changing the fashion industry for the better. "
            jobType="Consumer Good, IT & Software"
          />
          <CarouselCard
            imgUrl="https://thehub-io.imgix.net/files/59b145cc9fac280769b0d7c5/logo_upload-f9df389f3274b344675e2fc6c001193e.jpg?fit=crop&w=300&h=300&q=60"
            companyName="Tise"
            description="Rodinia Generation was created, with one goal in mind: Changing the fashion industry for the better. "
            jobType="Consumer Good, IT & Software"
          />
          <CarouselCard
            imgUrl="https://thehub-io.imgix.net/files/s3/20210122082510-bd654394b87d3cddb6f46b4f2d98bf3c.png?fit=crop&w=300&h=300&q=60"
            companyName="SoilSense"
            description="Rodinia Generation was created, with one goal in mind: Changing the fashion industry for the better. "
            jobType="Consumer Good, IT & Software"
          />
          <CarouselCard
            imgUrl="https://thehub-io.imgix.net/files/s3/20210122082510-bd654394b87d3cddb6f46b4f2d98bf3c.png?fit=crop&w=300&h=300&q=60"
            companyName="SoilSense"
            description="Rodinia Generation was created, with one goal in mind: Changing the fashion industry for the better. "
            jobType="Consumer Good, IT & Software"
          />
        </Carousel>
      </div>
    </>
  );
};

export default Carousel1;
