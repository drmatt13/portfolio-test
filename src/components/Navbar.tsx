"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="w-full md:max-w-[92.5vw] md:w-[48rem] h-16 md:h-[6.5rem] flex">
      <div className="relative w-full md:mt-8 h-10 bg-white/75 md:rounded-lg border-b md:border border-black/25 shadow flex justify-around items-center text-xs /md:text-sm overflow-hidden font-mono">
        <div
          className={`hover:bg-[#e8ddd8] transition-colors hover:ease-out ease-in hover:duration-0 w-full h-full flex justify-center items-center cursor-pointer`}
          onClick={() => router.replace("/projects")}
        >
          Projects{pathname === "/projects" && "*"}
        </div>
        <div
          className={`hover:bg-[#e8ddd8] transition-colors hover:ease-out ease-in hover:duration-0 w-full h-full flex justify-center items-center cursor-pointer`}
          onClick={() => router.replace("/skills")}
        >
          Skills{pathname === "/skills" && "*"}
        </div>
        <div
          className={`hover:bg-[#e8ddd8] transition-colors hover:ease-out ease-in hover:duration-0 w-full h-full flex justify-center items-center cursor-pointer`}
          onClick={() => router.replace("/diagrams")}
        >
          Diagrams{pathname === "/diagrams" && "*"}
        </div>
        <div
          className={`hover:bg-[#e8ddd8] transition-colors hover:ease-out ease-in hover:duration-0 w-full h-full flex justify-center items-center cursor-pointer`}
          onClick={() => router.replace("/about-me")}
        >
          About Me{pathname === "/about-me" && "*"}
        </div>
        <Link
          href="https://www.linkedin.com/in/drmatt13"
          passHref
          className="w-full h-full overflow-hidden"
          target="_blank"
        >
          <div
            className={`group hover:bg-[#e8ddd8] transition-colors hover:ease-out ease-in hover:duration-0 w-full h-full flex justify-center items-center cursor-pointer`}
          >
            Contact{pathname === "/components" && "*"}
            <div className="absolute right-0 top-0 group-hover:bg-[#e8ddd8] h-full pointer-events-none w-2 transition-colors ease-out group-hover:ease-in group-hover:duration-0"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
