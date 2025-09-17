import React from "react";
import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";
const GitHubButton = () => {
  return (
    <Button
      asChild
      variant="outline"
      className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 w-full md:w-auto cursor-pointer bg-transparent text-gray-400 border-gray-400 hover:bg-transparent hover:text-white
        hover:border-white"
    >
      <a
        href={"https://github.com/lukedevza"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-sm md:text-base font-medium">GitHub</span>
      </a>
    </Button>
  );
};

export default GitHubButton;
