"use server";

import diagramList from "./diagramList";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="grid px-2.5 md:px-0 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {diagramList.map((diagram) => (
          <div
            key={diagram}
            className="border border-black/25 aspect-video overflow-hidden shadow rounded-sm cursor-pointer hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-colors hover:ease-out ease-in hover:duration-0"
          >
            <Link
              href={`/diagrams/fullsize/${diagram}`}
              passHref
              className="w-full rounded-md overflow-hidden"
              target="_blank"
            >
              <Image
                className="object-cover h-full"
                src={`/diagrams/thumbnail/${diagram}`}
                alt={diagram}
                width={400}
                height={200}
                blurDataURL={`/diagrams/blur/${diagram}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
