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
import { doc, onSnapshot } from "react-icons/ai";
