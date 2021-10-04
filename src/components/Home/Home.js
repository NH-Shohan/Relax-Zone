import { Box } from "@mui/system";
import React from "react";
import logo from "../../images/yoga-image.png";
import Service from "../Service/Service";
import "./Home.css";
import image from "../../images/meditaion.png";

const Home = (props) => {
  return (
    <div className="home-container">
      <Box sx={{ display: "flex" }}>
        <div className="home-left">
          <img src={logo} alt="" />
        </div>
        <div className="home-right glow">
          <h1>Let's Get The Balance Of Living.</h1>
          <p>
            Empty your mind, be formless, shapeless – like water. Now you put
            water into a cup, it becomes the cup, you put water into a bottle,
            it becomes the bottle, you put it in a teapot, it becomes the
            teapot. Now water can flow or it can crash. Be water, my friend.
          </p>
        </div>
      </Box>

      <br />

      <section className="about-section">
        <div className="about-left">
          <div>
            <h1>Experience Yoga at Our RelaxZone Studio</h1>
            <p>
              We are happy to see newcomers at any of our yoga and meditation
              classes. Join the community to participate in the center`s life
              and the discussion club. to participate in the center`s life and
              the discussion club.
            </p>
          </div>
        </div>
        <div className="about-right">
          <img src={image} alt="" />
        </div>
      </section>

      <div className="service-secttion">
        <Service view={3}></Service>
      </div>
    </div>
  );
};

export default Home;
