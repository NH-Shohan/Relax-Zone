import React from "react";
import "./Contact.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "35ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-required"
            label="Enter your name"
            variant="filled"
            placeholder="Your name"
            color="success"
          />
          <TextField
            id="filled-required"
            label="Enter your mail"
            variant="filled"
            placeholder="Your Email"
            color="success"
          />
          <br />
          <TextField
            className="text-aria"
            id="filled-multiline-static"
            label="Enter your message"
            multiline
            rows={6}
            variant="filled"
            placeholder="Your message"
            color="success"
          />
        </Box>
        <Button variant="contained" color="success" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Contact;
