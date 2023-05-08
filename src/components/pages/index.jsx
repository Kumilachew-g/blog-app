import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PostLists from "./PostLists";

export default function Home() {
  return (
    <div>
      <NavBar />
      <PostLists />
      <Footer />
    </div>
  );
}
