import React from "react";
import style from "../style.scss";
import { CssBaseline, Container, Box  } from "@mui/material";

export const Logout = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" className="gg">
      <Box sm={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      <h1>login</h1>
      </Container>
    </>
  );
};

export default Logout;
