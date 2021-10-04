import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const SteInstructor = (props) => {
  const { image, InsName, details } = props.service;
  return (
    <div className="services-container">
      <Card sx={{ maxWidth: 350, minHeight: 400 }}>
        <CardActionArea>
          <CardMedia component="img" height="200" width="100%" image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {InsName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default SteInstructor;
