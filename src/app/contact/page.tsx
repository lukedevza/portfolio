import ContactForm from "@/components/ContactForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const Contact = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-between items-center  mb-5">
        <h1 className="text-white text-2xl md:text-5xl lg:text-7xl font-semibold">
          {"< Questions />"}
        </h1>
      </div>
      <p className="text-gray-300 font-semibold ml-8 md:ml-18">Let&apos;s Connect</p>
      <ContactForm />
      <div className="hidden lg:flex gap-10 justify-around pt-8">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clipPath="url(#clip0_227_43)">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M188 100C188 148.601 148.601 188 100 188C51.3989 188 12 148.601 12 100C12 51.3989 51.3989 12 100 12C148.601 12 188 51.3989 188 100ZM200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100ZM100 111C106.075 111 111 106.075 111 100C111 93.9249 106.075 89 100 89C93.9249 89 89 93.9249 89 100C89 106.075 93.9249 111 100 111Z"
              fill="url(#paint0_linear_227_43)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_227_43"
              x1="157.5"
              y1="32"
              x2="44"
              y2="147.5"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop
                offset="0.0509862"
                stopColor="#FFB6E1"
              />{" "}
              <stop
                offset="1"
                stopColor="#FBE3EA"
              />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_227_43">
              {" "}
              <rect
                width="200"
                height="200"
                fill="white"
              />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clipPath="url(#clip0_227_29)">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M132.136 164.537C122.432 180.711 110.697 188 100 188C89.3026 188 77.5678 180.711 67.8635 164.537C58.3025 148.602 52 125.813 52 100C52 74.1867 58.3025 51.3982 67.8635 35.4633C77.5678 19.2895 89.3026 12 100 12C110.697 12 122.432 19.2895 132.136 35.4633C141.697 51.3982 148 74.1867 148 100C148 125.813 141.697 148.602 132.136 164.537ZM200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100ZM12 100C12 135.93 33.5326 166.83 64.3973 180.5C49.5982 162.289 40 133.013 40 100C40 66.9873 49.5982 37.7108 64.3973 19.4995C33.5326 33.1701 12 64.0704 12 100ZM188 100C188 135.93 166.467 166.83 135.603 180.5C150.402 162.289 160 133.013 160 100C160 66.9873 150.402 37.7108 135.603 19.4995C166.467 33.1701 188 64.0704 188 100ZM100 111C106.075 111 111 106.075 111 100C111 93.9249 106.075 89 100 89C93.9249 89 89 93.9249 89 100C89 106.075 93.9249 111 100 111Z"
              fill="url(#paint0_linear_227_29)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_227_29"
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
            <clipPath id="clip0_227_29">
              {" "}
              <rect
                width="200"
                height="200"
                fill="white"
              />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clipPath="url(#clip0_227_4)">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200ZM100 188C148.601 188 188 148.601 188 100C188 51.3989 148.601 12 100 12C51.3989 12 12 51.3989 12 100C12 148.601 51.3989 188 100 188ZM100 176C141.974 176 176 141.974 176 100C176 58.0264 141.974 24 100 24C58.0264 24 24 58.0264 24 100C24 141.974 58.0264 176 100 176ZM100 164C135.346 164 164 135.346 164 100C164 64.6538 135.346 36 100 36C64.6538 36 36 64.6538 36 100C36 135.346 64.6538 164 100 164ZM152 100C152 128.719 128.719 152 100 152C71.2812 152 48 128.719 48 100C48 71.2812 71.2812 48 100 48C128.719 48 152 71.2812 152 100ZM140 100C140 122.091 122.091 140 100 140C77.9086 140 60 122.091 60 100C60 77.9086 77.9086 60 100 60C122.091 60 140 77.9086 140 100Z"
              fill="url(#paint0_linear_227_4)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_227_4"
              x1="27.5"
              y1="19"
              x2="149"
              y2="174.5"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop stopColor="#FFD9A0" />{" "}
              <stop
                offset="1"
                stopColor="#FFF5F1"
              />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_227_4">
              {" "}
              <rect
                width="200"
                height="200"
                fill="white"
              />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>
      </div>
    </MaxWidthWrapper>
  );
};

export default Contact;
