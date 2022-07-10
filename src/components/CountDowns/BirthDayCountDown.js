import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Stack,
  Box,
  Text,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { appConstants } from "../../utils/constants";

const defaultValues = [
  {
    key: "Days",
    value: 0,
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

const getDiff = (dateFuture, dateNow) => {
  let delta = Math.abs(dateFuture - dateNow) / 1000;
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
      total: 365,
    },
    {
      key: "Hours",
      value: hours,
      total: 24,
    },
    {
      key: "minutes",
      value: minutes,
      total: 60,
    },
    {
      key: "Seconds",
      value: Math.floor(delta % 60),
      total: 60,
    },
  ];
};

function BirthDayCountDown() {
  const timeRef = useRef(null);
  const [countDown, setCountDown] = useState([...defaultValues]);
  const [month, setMonth] = useState(appConstants.months[new Date().getMonth()].month);
  const [date, setDate] = useState(new Date().getDate());
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setInterval(() => {
      setCountDown(getDiff(new Date("07/20/2022"), new Date()));
    }, 1000);
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    };
  }, []);
  const days = useMemo(() => {
    return appConstants.months.find((item) => item.month === month).days;
  }, [month]);
  return (
    <Stack spacing="24px" mx={{ base: 20, xs: 0, lg: 20 }}>
      <Text fontWeight="bold" fontSize="2xl" textAlign="center">
        Birthday CountDown
      </Text>
      <Stack
        bg="white"
        p="15"
        borderRadius="5"
        border="1px solid #c4c4c4"
        boxShadow="xl"
        spacing="24px"
        direction={["column", "row"]}>
        <Stack
          direction={["column"]}
          spacing="24px"
          w={["100%", "50%"]}
          p={["0 0 2rem 0", "2rem"]}
          borderRight={["none", "1px solid #c4c4c4"]}
          borderBottom={["1px solid #c4c4c4", "none"]}>
          <FormControl>
            <FormLabel htmlFor="country">Name</FormLabel>
            <Input
              value=""
              id="name"
              onChange={() => {}}
              variant="outline"
              placeholder="Enter name..."
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="month">Month</FormLabel>
            <Select id="month" value={month} onChange={({ target }) => setMonth(target.value)}>
              {appConstants.months.map((item) => (
                <option key={item.month} value={item.month}>
                  {item.month}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Select id="date" value={date} onChange={({ target }) => setDate(target.value)}>
              {Array.from({ length: days }, (_, i) => i + 1).map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="country">Year</FormLabel>
            <Input
              value={year}
              id="year"
              onChange={({ target }) => setYear(target.value)}
              variant="outline"
              placeholder="Year"
            />
          </FormControl>
          <WrapItem justifyContent="end">
            <Button colorScheme="teal">SUBMIT</Button>
          </WrapItem>
        </Stack>
        <Stack w={["100%", "50%"]} p={[0, "2rem"]}>
          <Box>
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize="xl"
              textDecor="underline"
              textColor="red.700">
              Kushi&apos;s Birthday will be in
            </Text>
            <Stack direction={["row"]}>
              {countDown.map(({ key, value }, idx) => (
                <Box key={key} w="25%" display="flex" justifyContent="space-evenly">
                  <Box mr={idx !== countDown.length - 1 ? 4 : 0} textAlign="center">
                    <Text fontSize={36} fontWeight="bold">
                      {`0${Math.floor(value)}`.slice(-2)}
                    </Text>
                    <Text fontSize={12}>{key}</Text>
                  </Box>
                  {idx !== countDown.length - 1 ? (
                    <Text fontSize={36} fontWeight="bold">
                      :
                    </Text>
                  ) : null}
                </Box>
              ))}
            </Stack>
            <Image src="/images/happybirthday.png" alt="#happybirthday" width={500} height={500} />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default BirthDayCountDown;
