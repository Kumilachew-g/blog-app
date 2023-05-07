import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW="1300px"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 Kumilachew Getie.</Text>
      </Container>
    </Box>
  );
}
