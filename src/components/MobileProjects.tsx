import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { PROJECTDATA } from "@/constants";
import ProjectCard from "./ProjectCard";

const MobileProjects = () => {
  return (
    <MaxWidthWrapper className="flex flex-col md:hidden gap-8 pb-12">
      {PROJECTDATA.map((item) => (
        <ProjectCard
          key={item.id}
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
          github={item.github}
          link={item.link}
        />
      ))}
    </MaxWidthWrapper>
  );
};

export default MobileProjects;
