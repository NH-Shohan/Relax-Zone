import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import SetService from "../setService/SetService";
import "./Service.css";

const Service = (props) => {
  const [service, setService] = useState([]);
  const { view } = props;

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => {
        if (view === 3) {
          setService(data.slice(0, 4));
        } else {
          setService(data);
        }
      });
  }, [service, view]);

  return (
    <div className="service-container">
      <h1>Our Best Services</h1>
      <div className="services">
        {service.map((service) => (
          <Card
            sx={{
              maxWidth: 350,
              minHeight: 200,
            }}
          >
            <SetService key={service.key} service={service}></SetService>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Service;
