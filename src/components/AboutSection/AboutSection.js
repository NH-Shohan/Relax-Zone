import React, { useEffect, useState } from "react";
import About from "../About/About";

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
            <About>
              {single.side === true ? (
                <>
                  <div className="col-md-6">
                    <img src={single.image} alt="" />
                  </div>
                  <div className="col-md-6">
                    <h3>{single.title}</h3>
                    <p className="col-md-6">{single.details}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6">
                    <h3>{single.title}</h3>
                    <p className="col-md-6">{single.details}</p>
                  </div>
                  <div className="col-md-6">
                    <img src={single.image} alt="" />
                  </div>
                </>
              )}
            </About>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
