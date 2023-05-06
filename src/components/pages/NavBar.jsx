import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Container,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Tooltip,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { Link as routerLink } from "react-router-dom";
import { ModalBody } from "react-bootstrap";
import { RiLogoutCircleLine } from "react-icons/ri";

import { LOGIN, REGISTER, ROOT } from "../../config/routes";
import { useLogout } from "../../hooks/auths";
