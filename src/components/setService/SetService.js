import React from "react";
import "./SetService.css";

const SetService = (props) => {
  const { image, serviceName, details, price } = props.service;
  return (
    <div className="services-container">
      <div className="card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="card-details">
          <h3>{serviceName}</h3>
          <p>{details}</p>
          <h4>Price: ${price}</h4>
        </div>
      </div>
    </div>
  );
};

export default SetService;
