import { Box, useBreakpointValue } from "@chakra-ui/react";

export default function Container({
  backgroundColor,
  children,
}: {
  backgroundColor?: string;
  children: React.ReactNode;
}) {
  const bgColor = useBreakpointValue({ base: "gray.100", md: backgroundColor });
  return (
    <>
      <Box
        maxW={500}
        minHeight="100vh"
        m="0 auto"
        bgColor={bgColor}
        as="main"
        position="relative"
        z-index="-10"
      >
        {children}
      </Box>
    </>
  );
}
