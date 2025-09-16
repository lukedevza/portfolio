"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

const svgs = [
  <svg
    key="1"
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {" "}
    <g clipPath="url(#clip0_105_296)">
      {" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M200 98.5234C196.477 99.4861 192.769 100 188.941 100H144.233C121.117 100 102.378 118.739 102.378 141.854V191.319C102.378 194.295 102.067 197.199 101.477 200C100.514 196.477 100 192.769 100 188.941V144.233C100 121.117 81.2612 102.378 58.1456 102.378H8.68122C5.70469 102.378 2.80073 102.067 0 101.477C3.52289 100.514 7.23105 100 11.0593 100H55.7675C78.8831 100 97.622 81.2611 97.622 58.1456L97.622 8.68118C97.622 5.70466 97.9327 2.80071 98.5234 0C99.4861 3.5229 100 7.23107 100 11.0593V55.7675C100 78.8831 118.739 97.622 141.855 97.622H191.319C194.295 97.622 197.199 97.9327 200 98.5234Z"
        fill="url(#paint0_linear_105_296)"
      />{" "}
    </g>{" "}
    <defs>
      {" "}
      <linearGradient
        id="paint0_linear_105_296"
        x1="100"
        y1="0"
        x2="100"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        {" "}
        <stop stopColor="#DF99F7" />{" "}
        <stop
          offset="1"
          stopColor="#FFDBB0"
        />{" "}
      </linearGradient>{" "}
      <clipPath id="clip0_105_296">
        {" "}
        <rect
          width="200"
          height="200"
          fill="white"
        />{" "}
      </clipPath>{" "}
    </defs>{" "}
  </svg>,
  <svg
    key="2"
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {" "}
    <g clipPath="url(#clip0_105_300)">
      {" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M188.941 100C192.769 100 196.477 99.4861 200 98.5234C197.199 97.9327 194.295 97.622 191.319 97.622H141.855C133.685 97.622 126.061 95.2811 119.619 91.2334C121.027 82.9896 124.913 75.0866 131.277 68.7229L162.891 37.1094C165.598 34.4024 167.856 31.4169 169.667 28.2452C167.268 29.8079 164.995 31.6416 162.891 33.7463L127.914 68.7229C122.137 74.4999 115.091 78.2351 107.674 79.9285C102.84 73.1033 100 64.7671 100 55.7675V11.0593C100 7.23107 99.4861 3.5229 98.5234 0C97.9327 2.80071 97.622 5.70466 97.622 8.68118L97.622 58.1456C97.622 66.3155 95.2811 73.9388 91.2335 80.3812C82.9897 78.9727 75.0866 75.0865 68.7229 68.7228L37.1094 37.1094C34.4024 34.4024 31.4169 32.1437 28.2452 30.3334C29.8079 32.7315 31.6416 35.0047 33.7463 37.1094L68.7229 72.086C74.4999 77.8631 78.2352 84.9088 79.9285 92.3263C73.1033 97.1596 64.7671 100 55.7675 100H11.0593C7.23105 100 3.52289 100.514 0 101.477C2.80073 102.067 5.70469 102.378 8.68122 102.378H58.1456C66.3156 102.378 73.9388 104.719 80.3812 108.767C78.9727 117.01 75.0866 124.913 68.7229 131.277L37.1094 162.891C34.4025 165.598 32.1438 168.583 30.3335 171.755C32.7316 170.192 35.0047 168.358 37.1094 166.254L72.086 131.277C77.863 125.5 84.9088 121.765 92.3263 120.071C97.1596 126.897 100 135.233 100 144.233V188.941C100 192.769 100.514 196.477 101.477 200C102.067 197.199 102.378 194.295 102.378 191.319V141.854C102.378 133.684 104.719 126.061 108.767 119.619C117.01 121.027 124.913 124.913 131.277 131.277L162.891 162.891C165.598 165.598 168.583 167.856 171.755 169.667C170.192 167.268 168.358 164.995 166.254 162.891L131.277 127.914C125.5 122.137 121.765 115.091 120.072 107.674C126.897 102.84 135.233 100 144.233 100H188.941Z"
        fill="url(#paint0_linear_105_300)"
      />{" "}
    </g>{" "}
    <defs>
      {" "}
      <linearGradient
        id="paint0_linear_105_300"
        x1="100"
        y1="0"
        x2="100"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        {" "}
        <stop stopColor="#B8DBFC" />{" "}
        <stop
          offset="1"
          stopColor="#F8FBFE"
        />{" "}
      </linearGradient>{" "}
      <clipPath id="clip0_105_300">
        {" "}
        <rect
          width="200"
          height="200"
          fill="white"
        />{" "}
      </clipPath>{" "}
    </defs>{" "}
  </svg>,
  <svg
    key="3"
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {" "}
    <g clipPath="url(#clip0_116_139)">
      {" "}
      <path
        d="M100 0L105.94 94.0603L200 100L105.94 105.94L100 200L94.0603 105.94L0 100L94.0603 94.0603L100 0Z"
        fill="url(#paint0_linear_116_139)"
      />{" "}
    </g>{" "}
    <defs>
      {" "}
      <linearGradient
        id="paint0_linear_116_139"
        x1="20.5"
        y1="16"
        x2="100"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        {" "}
        <stop stopColor="#ACAAFF" />{" "}
        <stop
          offset="1"
          stopColor="#C0E8FF"
        />{" "}
      </linearGradient>{" "}
      <clipPath id="clip0_116_139">
        {" "}
        <rect
          width="200"
          height="200"
          fill="white"
        />{" "}
      </clipPath>{" "}
    </defs>{" "}
  </svg>,
];

const About = () => {
  return (
    <MaxWidthWrapper className="sm:overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col "
      >
        <div className="flex justify-between items-center  mb-5">
          <h1 className="text-white text-2xl md:text-5xl lg:text-7xl font-semibold">
            {"< Developer />"}
          </h1>
          <div className="text-white flex gap-4">
            <FaReact className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 " />
            <TbBrandReactNative className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 " />
            <TbBrandNextjs className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 " />
          </div>
        </div>
        <h2 className="text-white text-xl font-semibold">{"//"}</h2>
        <p className="text-gray-300 ml-8 md:ml-18 text-lg md:text-xl leading-loose">
          Hi, I&apos;m Luke! A Web Developer from South Africa.
          <br /> I mainly work with React-based frameworks like Next.js and React Native,
          experimenting with creative ways to build web and mobile apps.
          <br /> Before learning Web Development I was a music producer. I worked with artists from
          all over the world.
          <br />
          Besides Web Development & Music, I love animals and nature. If I won the lottery I would
          adopt 100 dogs. Maybe some cats too, but definitely 100 dogs.
          <br />
          I&apos;d describe myself as a creative person, I have a passion for trying new things.
          Thats why I gravitated towards Web Development, because we get to create things out of
          nothing, and at the end of the day there is a visible reward for our efforts. This
          scratches an itch in my brain.
        </p>
        <h2 className="text-white text-6xl font-semibold text-right">{"//"}</h2>
      </motion.div>
      <motion.div
        className="md:flex hidden items-center justify-between mt-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.7,
              delay: 1,
            },
          },
        }}
      >
        {svgs.map((svg, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: 500 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ type: "tween" }}
          >
            {svg}
          </motion.div>
        ))}
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default About;
