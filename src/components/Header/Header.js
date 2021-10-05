import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useHistory } from "react-router-dom";
import { Container } from "@mui/material";

const Header = () => {
  const [value, setValue] = React.useState(0);

  const history = useHistory();
  React.useEffect(() => {
    if (history.location.pathname === "/home") {
      setValue(0);
    } else if (history.location.pathname === "/about") {
      setValue(1);
    } else if (history.location.pathname === "/service") {
      setValue(2);
    } else if (history.location.pathname === "/instructors") {
      setValue(3);
    } else if (history.location.pathname === "/contact") {
      setValue(4);
    } else {
      setValue(0);
    }
  }, [value, history.location.pathname]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="header-container">
      <Container>
        <div className="header">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>

          <div className="navbar-left">
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="background.paper"
              >
                <Tab
                  label="Home"
                  onClick={() => {
                    history.push("/home");
                  }}
                  sx={{ color: "background.paper" }}
                />
                <Tab
                  label="About"
                  onClick={() => {
                    history.push("/about");
                  }}
                  sx={{ color: "background.paper" }}
                />
                <Tab
                  label="Services"
                  onClick={() => {
                    history.push("/service");
                  }}
                  sx={{ color: "background.paper" }}
                />
                <Tab
                  label="Instructors"
                  onClick={() => {
                    history.push("/instructors");
                  }}
                  sx={{ color: "background.paper" }}
                />
                <Tab
                  label="Contact"
                  onClick={() => {
                    history.push("/contact");
                  }}
                  sx={{ color: "background.paper" }}
                />
              </Tabs>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
