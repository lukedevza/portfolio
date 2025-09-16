import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline/next";
import LoadingSpinner from "./LoadingSpinner";
const Hero = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <Suspense fallback={<LoadingSpinner />}>
        <Spline scene="https://prod.spline.design/PMLmTJAofTDWCZ93/scene.splinecode" />;
      </Suspense>
    </div>
  );
};

export default Hero;
