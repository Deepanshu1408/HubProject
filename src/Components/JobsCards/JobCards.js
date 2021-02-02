import React from "react";
import img1 from "../../Images/ADNlogo.png";
import "../JobsCards/JobCards.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const JobCards = ({ jobType, jobProfile, listitem1, listitem2, listitem3 }) => {
  return (
    <>
      <div className="mainContainer">
        <div className="Container">
          <div className="jobtype">
            <FiberManualRecordIcon style={{ color: "green" }} />
            <span>{jobType}</span>
          </div>
          <div className="jobProfile">
            <h2>{jobProfile}</h2>
          </div>
          <div className="listelem">
            <ul>
              <l1>{listitem1}</l1>
              <l1>{listitem2}</l1>
              <l1>{listitem3}</l1>
            </ul>
          </div>
          <div className="cardlogo">
            <img src={img1} alt="" className="l_img" />
            <span className="text">AdNudging</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCards;
