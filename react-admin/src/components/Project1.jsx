import React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Project1 = () => {

    const navigate = useNavigate();

    const handleSubmit = ()=>{
        navigate('/login')
    }

    const openWhatsApp = ()=>{
        const phoneNumber = '+916203684631'; // Replace with your WhatsApp number (including country code)
        const encodedNumber = encodeURIComponent(phoneNumber);
        const url = `https://wa.me/${encodedNumber}`;
        window.location.href = url;
    }
 
  return (
    <div>
      <Typography variant="h2">
        Training for Industrial Production Worker Job role and Basic
        Manufacturing (FoSTaC) for self-help group workers for Britannia
        foundation, Gwalior
      </Typography>
      <br />
      <Typography variant="h4">
        Experts from FICSI conducted a three-day training program for self-help
        group of rural women at Barai, Gwalior supported by Britannia Nutrition
        Foundation. Total 19 women participants joined the training program to
        get the taste of food safety and entrepreneurship in food processing.
        The first day of training started with roles and responsibilities of
        industrial production worker, conduct and behaviour at workplace, good
        manufacturing practices. The second day comprised SWOT analysis to
        develop analytical and critical thinking, decision making and team
        building, basics of entrepreneurship, hazards in food and their
        identification. FOSTAC Basic Manufacturing training, which is made
        mandatory by FSSAI for food handlers in processing industry was
        conducted on the third day. Overall, it was an interactive session. The
        zeal to learn could be seen in the eyes of all the women. This was a
        small step towards women empowerment.
      </Typography>
      <br />
      <Button color="success" onClick={openWhatsApp}>Connect with Whatsapp</Button>
      <Button color="secondary" onClick={handleSubmit}>Check Impact Metrics</Button>
    </div>
  );
};

export default Project1;
