import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LOGIN, ROOT } from "../config/routes";
export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
}

async function login({ email, password, redirectTo = ROOT }) {
  setLoading(true);
}
