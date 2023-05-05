import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router";
import { router } from "./config/Routes";
function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
