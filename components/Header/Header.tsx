import { Box, Grid, Heading, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const backHome = () => {
    router.push("/diary");
  };
  return (
    <Box as="header" mb="4" bgColor="#fff">
      <Grid gridTemplateColumns="1fr 2fr 1fr" height="80px" alignItems="center">
        <Spacer />
        <Heading
          as="h1"
          fontSize="2xl"
          textAlign="center"
          p={2}
          cursor="pointer"
          color="grape.start"
          onClick={backHome}
        >
          SpiritLog
        </Heading>
        <Box>{/* Login user */}</Box>
      </Grid>
    </Box>
  );
}

export function getServerSideProps() {
  return { props: {} };
}
