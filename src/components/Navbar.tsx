"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [interactionType, setInteractionType] = useState<"mouse" | "touch">(
    "mouse"
  );

  useEffect(() => {
    const touchHandler = () => {
      setInteractionType("touch");
    };

    window.addEventListener("touchstart", touchHandler);
    return () => {
      window.removeEventListener("touchstart", touchHandler);
    };
  }, []);

  return (
    <div className="w-full md:max-w-[92.5vw] md:w-[48rem] h-16 md:h-[6.5rem] flex">
      <div className="relative w-full md:mt-8 h-10 bg-white/75 md:rounded-lg border-b md:border border-black/25 shadow flex justify-around items-center text-[.7rem] sm:text-xs overflow-hidden font-mono">
        <Link
          href="/projects"
          passHref
          className="w-full h-full overflow-hidden"
          replace
        >
          <div
            className={`${
              interactionType === "mouse"
                ? "hover:bg-[#e8ddd8] hover:ease-out hover:duration-0"
                : "active:bg-[#e8ddd8] active:ease-out active:duration-0 duration-75"
            } transition-colors ease-in w-full h-full flex justify-center items-center cursor-pointer`}
          >
            Projects{pathname === "/projects" && "*"}
          </div>
        </Link>
        <Link
          href="/skills"
          passHref
          className="w-full h-full overflow-hidden"
          replace
        >
          <div
            className={`${
              interactionType === "mouse"
                ? "hover:bg-[#e8ddd8] hover:ease-out hover:duration-0"
                : "active:bg-[#e8ddd8] active:ease-out active:duration-0 duration-75"
            } transition-colors ease-in w-full h-full flex justify-center items-center cursor-pointer`}
          >
            Skills{pathname === "/skills" && "*"}
          </div>
        </Link>
        <Link
          href="/diagrams"
          passHref
          className="w-full h-full overflow-hidden"
          replace
        >
          <div
            className={`${
              interactionType === "mouse"
                ? "hover:bg-[#e8ddd8] hover:ease-out hover:duration-0"
                : "active:bg-[#e8ddd8] active:ease-out active:duration-0 duration-75"
            } transition-colors ease-in w-full h-full flex justify-center items-center cursor-pointer`}
          >
            Diagrams{pathname === "/diagrams" && "*"}
          </div>
        </Link>
        <Link
          href="/about-me"
          passHref
          className="w-full h-full overflow-hidden"
          replace
        >
          <div
            className={`${
              interactionType === "mouse"
                ? "hover:bg-[#e8ddd8] hover:ease-out hover:duration-0"
                : "active:bg-[#e8ddd8] active:ease-out active:duration-0 duration-75"
            } transition-colors ease-in w-full h-full flex justify-center items-center cursor-pointer`}
          >
            About Me{pathname === "/about-me" && "*"}
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/drmatt13"
          passHref
          target="_blank"
          className="w-full h-full overflow-hidden"
        >
          <div
            className={`group ${
              interactionType === "mouse"
                ? "hover:bg-[#e8ddd8] hover:ease-out hover:duration-0"
                : "active:bg-[#e8ddd8] active:ease-out active:duration-0 duration-75"
            } transition-colors ease-in w-full h-full flex justify-center items-center cursor-pointer`}
          >
            Contact
            <div
              className={`${
                interactionType === "mouse"
                  ? "group-hover:bg-[#e8ddd8] group-hover:ease-in group-hover:duration-0"
                  : "group-active:bg-[#e8ddd8] group-active:ease-in group-active:duration-0 duration-75"
              } absolute right-0 top-0 h-full pointer-events-none w-2 transition-colors ease-out`}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
