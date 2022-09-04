import React from "react";
import Script from "next/script";
import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6851649371418424"
        crossOrigin="anonymous"
      />
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        p="2"
        bg="Teal"
        pos="sticky"
        top="0"
        zIndex="1">
        <Box p="2">
          <Heading size="md" color="white">
            CountDown Date
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Welcome</Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}
