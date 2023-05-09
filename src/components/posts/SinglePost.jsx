import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Avatar,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { AiTwotoneHeart, AiOutlineHeart, AiFillDelete } from "react-icons/ai";
import { Link as routerLink } from "react-router-dom";
import { useAuth } from "../../hooks/auths";
import { useDeletePost, useToggleLike } from "../../hooks/posts";
import { useUser } from "../../hooks/user";

const SinglePost = ({ post }) => {
  const { user, isLoading: authLoading } = useAuth();
  const { id, likes, uid } = post;
  const isLiked = likes.includes(user?.id);
  const { toggleLike, isLoading } = useToggleLike({
    id,
    isLiked,
    uid: user?.id,
  });
  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
  const { user: users, isLoading: userLoading } = useUser(uid);
};
