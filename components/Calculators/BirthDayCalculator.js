import React, { useState, useMemo, useRef, Fragment, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  VStack,
  Container,
  Box,
  Progress,
} from "@chakra-ui/react";
import { appConstants } from "../../utils/constants";
import { differenceInWeeks, differenceInMonths } from "date-fns";

const defaultValues = [
  {
    key: "Days",
    value: 366,
  },
  {
    key: "Hours",
    value: 0,
  },
  {
    key: "Minutes",
    value: 0,
  },
  {
    key: "Seconds",
    value: 0,
  },
];

const getDiff = (date_future, date_now) => {
  let delta = Math.abs(date_future - date_now) / 1000;
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  return [
    {
      key: "Days",
      value: days,
      total: 365
    },
    {
      key: "Hours",
      value: hours,
      total: 24
    },
    {
      key: "minutes",
      value: minutes,
      total: 60
    },
    {
      key: "Seconds",
      value: Math.floor(delta % 60),
      total: 60
    },
  ];
};

function BirthDayCalculator() {
  const timeRef = useRef(null);
  const [countDown, setCountDown] = useState([...defaultValues]);
  useEffect(() => {
    setInterval(() => {
      setCountDown(getDiff(new Date('7/20/2022'), new Date()))
    }, 1000);
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    };
  }, []);
  return (
    <>
      <Text fontWeight="bold" fontSize="lg">
        Birth Day CountDown
      </Text>
      <VStack>
        <Container maxW="sm" bg="">
          <Box boxShadow="xs" p="4" rounded="md" bg="white" margin="auto" width="280px">
            {countDown.map(({ key, value, total }) => (
              <Container key={key} mb="7">
                <Text align="center" color="">
                  {Math.floor(value)}
                </Text>
                <Text align="center" color="">
                  {key}
                </Text>
                <Progress value={(value/total)*100} rounded="md" size="xs" width="120px" />
              </Container>
            ))}
          </Box>
        </Container>
      </VStack>
      {/* <FormControl>
        <FormLabel htmlFor="month">Month</FormLabel>
        <Select
          id="month"
          value={month}
          onChange={({ target }) => setMonth(target.value)}
        >
          {appConstants.months.map(({ month }) => (
            <option value={month}>{month}</option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="date">Date</FormLabel>
        {console.log("[date]", date)}
        <Select
          id="date"
          value={date}
          onChange={({ target }) => setValue(target.value)}
        >
          {Array.from({ length: days }, (_, i) => i + 1).map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="country">Year</FormLabel>
        <Input value={year} id="year" variant="outline" placeholder="Year" />
      </FormControl> */}
    </>
  );
}

export default BirthDayCalculator;
