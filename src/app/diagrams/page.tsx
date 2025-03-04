"use server";

import Image from "next/image";
import Link from "next/link";

import ButtonWrapper from "@/components/ButtonWrapper";

import diagramList from "./diagramList";
import diagramImports from "./diagramImports";

const page = () => {
  return (
    <>
      <div className="grid px-2.5 md:px-0 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {diagramList.map((diagram) => (
          <div
            key={diagram.fileName}
            className="border border-black/25 aspect-video overflow-hidden shadow rounded-sm cursor-pointer hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-colors hover:ease-out ease-in hover:duration-0 bg-white select-none"
          >
            <Link
              href={`/diagrams/fullsize/${diagram.fileName}`}
              passHref
              target="_blank"
              className="w-full h-full overflow-hidden"
            >
              {/* <ButtonWrapper
              className="h-full w-full bg-white"
              data={{
                image:
                  diagramImports[
                    diagram.fileName as keyof typeof diagramImports
                  ],
                blurDataURL: diagram.blurDataURL,
                imageKey: diagram.fileName,
                imageHeight: diagram.height,
                imageWidth: diagram.width,
              }}
            > */}
              <Image
                className={`${diagram.objectFit} h-full w-full`}
                src={`/diagrams/thumbnail/${diagram.fileName}`}
                alt={diagram.fileName}
                width={200}
                height={100}
                blurDataURL={diagram.blurDataURL}
                placeholder="blur"
                loading="lazy"
                draggable="false"
              />
              {/* </ButtonWrapper> */}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
