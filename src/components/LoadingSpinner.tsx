import { Loader2Icon } from "lucide-react";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="text-white">
      <Loader2Icon className="animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
