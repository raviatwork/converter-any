import { Text } from "@chakra-ui/react";


function DateCalculator() {
  return (
    <>
      <Text color="red.500">Date Calculator</Text>
      <input type="date" id="birthday" name="birthday" />
    </>
  );
}

export default DateCalculator;
