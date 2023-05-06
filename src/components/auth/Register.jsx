import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage,
  Tooltip,
} from "@chakra-ui/react";
import { Link as routerLink } from "react-router-dom";
import { LOGIN, ROOT } from "../../config/routes";
import { useForm } from "react-hook-form";
import {
  usernameValidate,
  passwordValidate,
  emailValidate,
} from "../../validations/formValidation";
