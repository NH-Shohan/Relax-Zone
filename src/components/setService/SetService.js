import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./SetService.css";

const SetService = (props) => {
  const { image, serviceName, details, price } = props.service;
  return (
    <div className="services-container">
      <Card sx={{ maxWidth: 350, minHeight: 400 }}>
        <CardActionArea>
          <CardMedia component="img" height="200" width="100%" image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {serviceName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details}
            </Typography>
            <Typography variant="h6">Price: ${price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default SetService;
