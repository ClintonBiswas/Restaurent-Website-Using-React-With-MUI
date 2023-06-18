import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 5, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4" sx={{"@media (max-width:600px)":{fontSize:'1.3rem'}}}>Contact My Restaurant</Typography>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          ml: 5,
          width: "600px",
          "@media (max-width:600px)": { width: "300px" },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  +880 1726-57086
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <AttachEmailIcon sx={{ color: "red", pt: 1 }} />
                  info@mail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "red", pt: 1 }} />
                  +880 1726-57086
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
