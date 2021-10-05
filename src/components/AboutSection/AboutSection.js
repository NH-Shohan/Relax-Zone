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
        <div>
          {about.map((single) => (
            <AboutYoga>
              {single.side === true ? (
                <div className="aboutyoga">
                  <div className="about-image">
                    <img src={single.image} alt="" />
                  </div>
                  <div className="about-details">
                    <h1>{single.title}</h1>
                    <p className="">{single.details}</p>
                  </div>
                </div>
              ) : (
                <div className="aboutyoga">
                  <div className="about-details">
                    <h1>{single.title}</h1>
                    <p className="">{single.details}</p>
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
