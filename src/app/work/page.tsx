import React from "react";

const Work = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="relative h-full w-full bg-red [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#323232_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div></div>
        </div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <h2 className="text-white">WORK</h2>
      </div>
    </div>
  );
};

export default Work;
