"use client";
import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ResumeButton from "./ResumeButton";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import GitHubButton from "./GitHubButton";

const Header = () => {
  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-4 bg-[#0a0a0a] sm:bg-transparent"
    >
      <Logo
        title="luke storti"
        iconSize={28}
        titleStyles="text-sm md:text-xl font-medium -mt-1"
      />
      <div className="flex items-center justify-center flex-1 ">
        <Navbar />
        <div className="hidden md:flex items-center gap-2">
          <ResumeButton />
          <GitHubButton />
        </div>
      </div>
      <MobileNav />
    </motion.header>
  );
};

export default Header;
