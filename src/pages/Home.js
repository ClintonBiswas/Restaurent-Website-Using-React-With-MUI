import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyle.css";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food Website In Bangladesh</p>
          <Link to={"/menu"}>
            <Button
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              sx={{
                bgcolor: "black",
                mt: 2,
                height: "50px",
                width: "180px",
                "@media (max-width:600px)": { marginBottom: "30px", bgcolor:'white', color:'black' },
              }}
            >
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
