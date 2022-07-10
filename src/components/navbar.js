import React from "react";
import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" p="2" bg="Teal">
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
  );
}
