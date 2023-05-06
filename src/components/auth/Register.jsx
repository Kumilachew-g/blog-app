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
import { useForm } from "react-hook-form";
import { LOGIN, ROOT } from "../../config/routes";
import {
  usernameValidate,
  passwordValidate,
  emailValidate,
} from "../../validations/formValidation";
import { useRegister } from "../../hooks/auths";

export default function Register() {
  const { register: signup, isLoading } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleRegister(data) {
    signup({
      username: data.username,
      email: data.email,
      password: data.password,
      redirectTo: ROOT,
    });
  }
}
