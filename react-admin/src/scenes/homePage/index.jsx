import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Link } from 'react-router-dom';
const Introduction = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ESG Parameters" subtitle="" />
      </Box>
      <Link to="/environment">
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="180px"
        gap="20px"
        marginTop="10px"
      >
        <Box
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
          display="flex"
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.greenAccent[500]}
            marginLeft="10px"
            marginTop="10px"
          >
            E-Environment
            <Typography marginTop="10px" fontSize="15px"><li>Climate Impact:This includes its carbon footprint, use of renewable energy, and efforts to reduce greenhouse gas emissions.</li></Typography>
            <Typography marginTop="10px" fontSize="15px"><li>Resource Use: Efforts to minimize waste and optimize resource efficiency such as water and raw materials</li></Typography>
            <Typography marginTop="10px" fontSize="15px"><li>Pollution and Waste: This involves practices related to waste disposal, recycling, and emissions.</li></Typography>
            <Typography marginTop="10px" fontSize="15px"><li>Biodiversity: Institutions are evaluated on how their activities affect local ecosystems and whether they have conservation measures in place.</li></Typography>
          </Typography>
        </Box>
      </Box>
      </Link>
      <Link to="/social">
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="180px"
        gap="20px"
        gridColumn="span 8"
        gridRow="span 4"
        marginTop="10px"
      >
        <Box
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
          display="flex"
        >
            <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.greenAccent[500]}
            marginLeft="10px"
            marginTop="10px"
          >
            S-Social
            <Typography marginTop="10px" fontSize="15px"><li>Diversity-Ratio of Male Workers to Female Workers</li></Typography>
            <Typography marginTop="10px" fontSize="15px"><li>Equal Pay-Pay Ratio of Male Workers to Female Workers</li></Typography>
            <Typography marginTop="10px" fontSize="15px"><li>Health and Hygiene-it is keeping yourself and the your surronding environment clean</li></Typography>
          </Typography>
        </Box>
      </Box>
      </Link>
      <Link to="/governance">
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="180px"
        gap="20px"
        marginTop="10px"
      >
        <Box
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
          display="flex"
        >
           <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.greenAccent[500]}
            marginLeft="10px"
            marginTop="10px"
          >
            G-Governance
            <Typography marginTop="10px" fontSize="15px"><li>Climate Impact:This includes its carbon footprint, use of renewable energy, and efforts to reduce greenhouse gas emissions.</li></Typography>
            <Typography marginTop="10px" fontSize="15px"><li>Resource Use: Efforts to minimize waste and optimize resource efficiency such as water and raw materials</li></Typography>
            <Typography marginTop="10px" fontSize="15px"><li>Pollution and Waste: This involves practices related to waste disposal, recycling, and emissions.</li></Typography>
          </Typography>
        </Box>
      </Box>
      </Link>
    </Box>
  );
};

export default Introduction;
