import { Box, Flex, Grid, Heading, Icon, Spacer, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiUserCircle } from "react-icons/bi";

export default function Header({ bgColor = "#fff" }) {
  const router = useRouter();
  const backHome = () => {
    router.push("/diary");
  };
  return (
    <Box
      as="header"
      mb="4"
      bgColor={bgColor}
      boxShadow="md"
      color={bgColor !== "#fff" ? "#fff" : "grape.start"}
    >
      <Grid gridTemplateColumns="1fr 2fr 1fr" height="80px" alignItems="center">
        <Spacer />
        <Heading
          as="h1"
          fontSize="2xl"
          textAlign="center"
          p={2}
          cursor="pointer"
          onClick={backHome}
        >
          SpiritLog
        </Heading>
        <Flex align="center">
          <BiUserCircle />
          <Text fontSize="sm" fontWeight="bold" ml="1">
            스피릿로그 님
          </Text>
        </Flex>
      </Grid>
    </Box>
  );
}

export function getServerSideProps() {
  return { props: {} };
}
