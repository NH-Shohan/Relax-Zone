import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import SteInstructor from "../SteInstructor/SteInstructor";

const Instructors = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("./instructors.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="service-container">
      <h1>Our Best Instructors</h1>
      <div className="services">
        {service.map((ser) => (
          <Card
            sx={{
              maxWidth: 350,
              minHeight: 200,
            }}
          >
            <SteInstructor key={ser.id} service={ser}></SteInstructor>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
