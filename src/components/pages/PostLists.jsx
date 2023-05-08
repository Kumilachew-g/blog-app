import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { motion, LayoutGroup } from "framer-motion";
import React from "react";
import { usePosts } from "../../hooks/posts";
import SinglePost from "../posts/SinglePost";
