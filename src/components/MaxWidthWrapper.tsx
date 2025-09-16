import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-6 md:px-20 pt-20 min-h-screen", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
