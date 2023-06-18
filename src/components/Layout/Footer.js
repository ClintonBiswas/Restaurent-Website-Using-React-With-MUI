import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", p: 3, color: "white" }}
      >
        <Box
          sx={{
            my: 2,
            "& svg": { fontSize: 50, cursor: "pointer", mr: 2 },
            "& svg:hover": { color: "goldenrod", transform: "translateX(5px)", transition:"all 400ms" },
            "@media (max-width:600px)":{"& svg":{fontSize: 40}}
          }}
        >
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <TwitterIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
        >
          All Rights Reserved &copy; Clinton Biswas
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
