import { Spotlight } from "@/components/ui/spotlight";
import React from "react";

const aboutpage = () => {
  return (
    <div className=" pt-10 bg-gradient-to-b from-gray-800 to-blue-950 h-screen w-full  relative">
      <h1 className="text-center text-4xl text-green-500 tracking-widest font-bold">
        AboutPage
      </h1>
      <Spotlight className="absolute top-0 left-4  fill-white" />
      <Spotlight className="absolute top-0 left-1/2 rotate-45  fill-red-600" />
    </div>
  );
};

export default aboutpage;
