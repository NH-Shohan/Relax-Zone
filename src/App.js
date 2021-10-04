import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import { Container } from "@mui/material";
import Footer from "./components/Footer/Footer";
import Instructors from "./components/Instructors/Instructors";
import NotFound from "./components/NotFound/NotFound";
import AboutSection from "./components/AboutSection/AboutSection";

function App() {
  return (
    <div className="App">
      <h2>RelaxZone</h2>
      <div className="background">
        <Container>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/about">
                <AboutSection></AboutSection>
              </Route>
              <Route path="/service">
                <Service></Service>
              </Route>
              <Route path="/instructors">
                <Instructors></Instructors>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
