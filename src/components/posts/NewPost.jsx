import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Textarea,
  useColorModeValue,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useAddPost } from "../../hooks/posts";
