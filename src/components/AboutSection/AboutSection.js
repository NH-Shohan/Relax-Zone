import React, { useEffect, useState } from "react";
import AboutYoga from "../AboutYoga/AboutYoga";
import "./AboutSection.css";

const AboutSection = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch("./about.json")
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, []);
  return (
    <div>
      <div>
        {/* <AboutYoga>hello</AboutYoga> */}
        <div>
          {about.map((single) => (
            <AboutYoga>
              {single.side === true ? (
                <div className="aboutyoga">
                  <div className="about-image">
                    <img src={single.image} alt="" />
                  </div>
                  <div className="col-md-6">
                    <h3>{single.title}</h3>
                    <p className="col-md-6">{single.details}</p>
                  </div>
                </div>
              ) : (
                <div className="aboutyoga">
                  <div className="col-md-6">
                    <h3>{single.title}</h3>
                    <p className="col-md-6">{single.details}</p>
                  </div>
                  <div className="about-image">
                    <img src={single.image} alt="" />
                  </div>
                </div>
              )}
            </AboutYoga>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
