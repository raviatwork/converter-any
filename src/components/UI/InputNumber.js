import React from "react";
import {
  FormControl,
  FormLabel,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function InputNumber({ label }) {
  return (
    <FormControl>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <NumberInput max={50} min={10}>
        <NumberInputField id={label} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
}

export default InputNumber;
