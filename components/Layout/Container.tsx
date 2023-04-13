import { Box, useBreakpointValue } from "@chakra-ui/react";

export default function Container({
  backgroundColor,
  children,
}: {
  backgroundColor?: string;
  children: React.ReactNode;
}) {
  const bgColor = useBreakpointValue({
    base: backgroundColor ?? "#f2f2f2",
  });
  return (
    <>
      <Box
        maxW={500}
        minHeight="100vh"
        m="0 auto"
        bgColor={bgColor}
        as="main"
        position="relative"
      >
        {children}
      </Box>
    </>
  );
}
