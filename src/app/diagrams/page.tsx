"use client";

import { useEffect } from "react";

import diagramList from "./diagramList";
import Image from "next/image";

const page = () => {
  return (
    <>
      {/* <div
        className={`absolute top-0 left-0 h-screen w-full bg-black/50 pointer-events-none backdrop-blur-sm`}
      ></div> */}
      <div className="grid px-2.5 md:px-0 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {diagramList.map((diagram) => (
          <div
            key={diagram}
            className="border border-black/25 aspect-video overflow-hidden shadow rounded-sm cursor-pointer hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-colors hover:ease-out ease-in hover:duration-0"
            onClick={() => {
              window.open(`/diagram/${diagram}`, "_blank");
            }}
          >
            <Image
              className="object-cover h-full"
              src={`/diagram/${diagram}`}
              alt={diagram}
              width={700}
              height={700}
              // layout="responsive"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
