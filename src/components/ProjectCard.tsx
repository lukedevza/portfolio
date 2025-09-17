import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { GithubIcon, GlobeIcon } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  subTitle: string;
  link?: string;
  github: string;
}

const ProjectCard = ({ title, subTitle, image, github, link }: ProjectCardProps) => {
  return (
    <Card className="bg-[#0a0a0a] h-[400px] md:h-[600px] flex flex-col items-center">
      <CardContent>
        <div className="flex flex-col items-center mt-2 md:mt-0 space-y-4 text-white">
          <h4 className="text-xl font-bold text-center overflow-hidden">{title}</h4>
          <p className="text-center text-sm overflow-hidden text-gray-400">{subTitle}</p>
          <div className="relative w-[150px] md:w-[350px] h-[150px] md:h-[350px]">
            <Image
              src={image}
              alt="thumbnail"
              fill
              className="object-contain rounded-md overflow-hidden"
            />
          </div>
          <div className="flex items-center justify-between pt-4 px-2 gap-2">
            <Button
              asChild
              className="w-[140px]"
            >
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <GithubIcon />
                <p>View on GitHub</p>
              </a>
            </Button>
            {link && (
              <Button
                asChild
                className="w-[140px]"
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <GlobeIcon />
                  <p>Live Demo</p>
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
