// components/layout.js
import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box
        h="calc(100vh - 120px)"
        w={["100%", "100%", "100%", "100%", "1200px!important"]}
        margin="auto"
        p={["2", "5"]}
        overflowY="auto">
        {children}
      </Box>
      <Footer />
    </>
  );
}
