import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MenuIcon } from "lucide-react";

import { NAVLINKS } from "@/constants";
import Link from "next/link";
import ResumeButton from "./ResumeButton";
import { Fira_Code } from "next/font/google";
import Logo from "./Logo";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const MobileNav = () => {
  return (
    <div className="flex md:hidden cursor-pointer">
      <Sheet>
        <SheetTrigger
          asChild
          className=" text-gray-400"
        >
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className={`${firaCode.className} bg-[#1b1b1b] border-[#1b1b1b] px-2`}>
          <SheetHeader>
            <SheetTitle className="text-white font-light">lukestorti</SheetTitle>
            <SheetDescription className="hidden">
              Handles Navigation for mobile and smaller screens
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col px-2 gap-4">
            {NAVLINKS.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`${firaCode.className} flex flex-col`}
              >
                <span className="text-xs text-gray-500">0{index + 1}</span>

                <span className="text-xl font-medium text-gray-400  hover:text-white">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
          <ResumeButton />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
