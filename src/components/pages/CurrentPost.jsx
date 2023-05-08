import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Container,
  Divider,
  Grid,
  GridItem,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as routerLink, useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AiOutlineRollback } from "react-icons/ai";
import { ROOT } from "../../config/routes";
import NavBar from "./NavBar";

export default function CurrentPost() {
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState([]);
  useEffect(() => {
    onSnapshot(doc(db, "posts", postId), (snapshot) => {
      setCurrentPost({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);
}
