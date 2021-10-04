import React from "react";

const About = (props) => {
  const service = props.children;
  return (
    <div className="about-container">
      <div className="row">{service}</div>
      <h1>hello</h1>
    </div>
  );
};

export default About;
