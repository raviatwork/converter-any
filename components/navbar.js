import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md">Convertion App</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Log in</Button>
      </ButtonGroup>
    </Flex>
  );
}
