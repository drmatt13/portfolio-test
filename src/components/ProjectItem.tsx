import Link from "next/link";
import Image from "next/image";

import ButtonWrapper from "@/components/ButtonWrapper";

interface ProjectItemProps {
  image: string;
  title: string;
  description: string;
  decommissioned?: boolean;
  workInProgress?: boolean;
  shift?: number;
  firstOfType?: boolean;
  url?: string;
}

const ProjectItem = ({
  image,
  description,
  title,
  decommissioned = false,
  workInProgress = false,
  shift,
  firstOfType = false,
  url,
}: ProjectItemProps) => {
  return (
    <div
      className={`${
        !firstOfType && "pt-4"
      } w-full max-w-[92.5vw] flex rounded-md relative select-none`}
    >
      {shift && (
        <div className="relative">
          <div className="h-full w-14 flex absolute -top-4 left-0">
            <div className="h-4 w-1/2 /bg-black translate-x-full border-l border-zinc-500" />
          </div>
          {shift > 1 && (
            <>
              <div className="h-full w-14 flex absolute -top-16 left-0">
                <div className="h-12 w-1/2 /bg-black translate-x-full border-l border-zinc-500" />
              </div>
            </>
          )}
          <div className="h-full w-14 relative flex">
            <div className="h-10 w-1/2 /bg-black translate-x-full rounded-bl-lg border-b border-l border-zinc-500" />
          </div>
        </div>
      )}
      <>
        {url ? (
          <Link
            href={url}
            passHref
            className="w-full rounded-md overflow-hidden"
            target="_blank"
          >
            <div
              className={`${
                decommissioned
                  ? "cursor-not-allowed border-red-400/50 bg-red-600/25 shadow-sm shadow-red-400/50 text-gray-800/90"
                  : workInProgress
                  ? "cursor-not-allowed border-yellow-500/50 bg-yellow-500/25 shadow-sm shadow-yellow-400/50 text-gray-900/90"
                  : "cursor-pointer border-black/25 bg-white/75 hover:bg-stone-200 transition-colors hover:ease-out ease-in hover:duration-0 shadow"
              } w-full max-w-[95vw] flex gap-4 pr-2.5 border rounded-md overflow-hidden`}
            >
              <div className="h-20 md:h-20 aspect-video relative">
                <Image
                  src={`/projects/${image}`}
                  alt={title}
                  className={`${
                    decommissioned ? "/border-red-500/50" : ""
                  } h-20 md:h-20 aspect-video object-cover /border-r`}
                  height={200}
                  width={400}
                  draggable="false"
                />
                {workInProgress && (
                  <div className="absolute top-0 right-0 z-10 w-full h-full bg-black/50" />
                )}
                {decommissioned && (
                  <div className="absolute top-0 right-0 z-10 w-full h-full bg-black/75" />
                )}
              </div>
              <div className="flex flex-col py-2 gap-0.5 w-full">
                <h1 className="text-sm md:text-md font-bold line-clamp-1">
                  {title}
                </h1>
                <p className="text-xs mt-0.5 /bg-black/50 line-clamp-2">
                  {description}
                </p>
              </div>
            </div>
          </Link>
        ) : (
          <div
            className={`${
              decommissioned
                ? "cursor-not-allowed border-red-400/50 bg-red-600/25 shadow-sm shadow-red-400/50 text-gray-800/90"
                : workInProgress
                ? "cursor-not-allowed border-yellow-500/50 bg-yellow-500/25 shadow-sm shadow-yellow-400/50 text-gray-900/90"
                : "cursor-pointer border-black/25 bg-white/75 hover:bg-stone-200 transition-colors hover:ease-out ease-in hover:duration-0 shadow"
            } w-full max-w-[95vw] flex gap-4 pr-2.5 border rounded-md overflow-hidden`}
          >
            <div className="h-20 md:h-20 aspect-video relative">
              <img
                src={`/projects/${image}`}
                alt={title}
                className={`${
                  decommissioned ? "/border-red-500/50" : ""
                } h-20 md:h-20 aspect-video object-cover /border-r`}
              />
              {workInProgress && (
                <div className="absolute top-0 right-0 z-10 w-full h-full bg-black/50" />
              )}
              {decommissioned && (
                <div className="absolute top-0 right-0 z-10 w-full h-full bg-black/75" />
              )}
            </div>
            <div className="flex flex-col py-2 gap-0.5 w-full">
              <h1 className="text-sm md:text-md font-bold line-clamp-1">
                {title}
              </h1>
              <p className="text-xs mt-0.5 /bg-black/50 line-clamp-2">
                {description}
              </p>
            </div>
          </div>
        )}
      </>
      {!workInProgress && !decommissioned ? (
        <ButtonWrapper
          className="rounded-md absolute -bottom-2 sm:-bottom-[.46rem] -right-1 bg-blue-500 backdrop-blur text-xs px-2.5 py-0.5 hover:bg-blue-600 cursor-pointer transition-colors hover:ease-out ease-in hover:duration-0"
          data={{ title, description }}
        >
          <div className="italic font-mono text-white">Expand Description</div>
        </ButtonWrapper>
      ) : workInProgress ? (
        <ButtonWrapper
          className="rounded-md absolute -bottom-2 sm:-bottom-[.46rem] -right-1 bg-green-700 text-xs px-2.5 py-0.5 cursor-not-allowed"
          disabled={true}
        >
          <div className="italic font-mono text-white">In Development</div>
        </ButtonWrapper>
      ) : (
        decommissioned && (
          <ButtonWrapper
            className="rounded-md absolute -bottom-2 sm:-bottom-[.46rem] -right-1 bg-black text-xs px-2.5 py-0.5 cursor-not-allowed"
            disabled={true}
          >
            <div className="italic font-mono text-white">Decommissioned</div>
          </ButtonWrapper>
        )
      )}
    </div>
  );
};

export default ProjectItem;
