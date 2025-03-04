"use client";

import SkillItem from "@/components/SkillItem";

import skillData from "./skillData";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

const page = () => {
  return (
    <>
      <div className="grid px-2.5 md:px-0 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {skillData.map((item) => (
          <div
            key={item.title}
            className="border border-black/25 aspect-video overflow-hidden shadow rounded-sm /cursor-pointer select-none"
            data-tooltip-id={item.title}
            data-tooltip-content={item.title}
          >
            <Image
              className="object-cover h-full"
              src={`/skills/${item.image}`}
              alt={item.image}
              width={600}
              height={300}
              // layout="responsive"
              draggable="false"
            />

            <Tooltip id={item.title} />
          </div>
        ))}
      </div>
    </>
    // <div className="flex flex-col gap-4 items-center">
    //   {skillData.map((skill) => (
    //     <SkillItem
    //       key={skill.title}
    //       title={skill.title}
    //       description={skill.description}
    //       image={skill.image}
    //       objectCover={skill.objectCover}
    //     />
    //   ))}
    // </div>
  );
};

export default page;
