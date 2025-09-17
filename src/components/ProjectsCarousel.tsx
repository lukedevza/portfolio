import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECTDATA } from "@/constants";
import ProjectCard from "./ProjectCard";

const ProjectsCarousel = () => {
  return (
    <Carousel
      className="flex"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="w-[650px]">
        {PROJECTDATA.map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              <ProjectCard
                key={item.id}
                title={item.title}
                subTitle={item.subTitle}
                image={item.image}
                github={item.github}
                link={item.link}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectsCarousel;
