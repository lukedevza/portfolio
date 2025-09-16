import { Code2Icon, CodeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = ({
  title,
  titleStyles,
  iconSize,
}: {
  title: string;
  titleStyles?: string;
  iconSize: number;
}) => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-1.5 px-2  text-gray-400 hover:text-white"
    >
      <CodeIcon size={iconSize} />
      <h1 className={titleStyles}>{title}</h1>
      <Code2Icon size={iconSize} />
    </Link>
  );
};

export default Logo;
