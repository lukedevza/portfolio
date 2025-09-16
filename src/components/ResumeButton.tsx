"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const ResumeButton = () => {
  const handleDownload = async () => {
    const response = await fetch("/resume.pdf"); // static file in public/
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Luke_Storti_Resume.pdf";
    link.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <Button
      variant="outline"
      onClick={handleDownload}
      className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 w-full md:w-auto cursor-pointer bg-transparent text-gray-400 border-gray-400 hover:bg-transparent hover:text-white
      hover:border-white"
    >
      <DownloadIcon className="w-4 h-4 md:w-5 md:h-5" />
      <span className="text-sm md:text-base font-medium">Resume</span>
    </Button>
  );
};

export default ResumeButton;
