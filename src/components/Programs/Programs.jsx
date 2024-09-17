import React from "react";
import "./Programs.css";
import images from "../../assets/images.js";

const Programs = () => {
  return (
    <div className="programs container">
      <div className="program">
        <img src={images.program1} />
        <div className="caption">
            <img src={images.programIcon1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={images.program2} />
        <div className="caption">
            <img src={images.programIcon1} alt="" />
            <p>Masters Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={images.program3} />
        <div className="caption">
            <img src={images.programIcon1} alt="" />
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
