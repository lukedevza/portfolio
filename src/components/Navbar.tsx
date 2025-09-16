import { NAVLINKS } from "@/constants";
import { Fira_Code } from "next/font/google";
import Link from "next/link";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Navbar = () => {
  return (
    <div className="hidden md:flex items-center justify-center gap-8 lg:gap-20 px-8 flex-1">
      {NAVLINKS.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${firaCode.className} flex flex-col`}
        >
          <span className="self-end text-xs text-gray-500 -mb-1">0{index + 1}</span>

          <span className="text-xl font-medium text-gray-400  hover:text-white">{link.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
