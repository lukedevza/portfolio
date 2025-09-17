"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import React from "react";

import MobileProjects from "@/components/MobileProjects";
const Work = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="relative h-full w-full bg-red [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#323232_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div></div>
        </div>
      </div>

      <MaxWidthWrapper className="z-10 relative">
        <h1 className="text-white text-2xl md:text-5xl lg:text-7xl font-semibold">
          {"< Projects />"}
        </h1>

        <div className="mt-8 flex flex-col items-center justify-center ">
          <p className="text-gray-300 font-semibold text-sm pb-2 text-center">
            Please note: Some of these projects rely on services that are no longer active or are
            incomplete.
            <br /> While the live demo may be limited, the codebase is fully accessible.
          </p>
          <ProjectsCarousel />
          <MobileProjects />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Work;
