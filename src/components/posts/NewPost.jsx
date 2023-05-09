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
import { useAuth } from "../../hooks/auths";

export default function SimpleCard({ onModalClose }) {
  const { addPost, isLoading } = useAddPost();
  const { user, authLoading } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const toast = useToast();

  const handleAddPost = (data) => {
    addPost({
      uid: user.id,
      title: data.title,
      desc: data.desc,
      imageUrl: data.imageUrl,
    });
    reset();
    onModalClose();
  };
}
