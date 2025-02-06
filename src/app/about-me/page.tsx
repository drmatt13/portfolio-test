"use client";

import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center ">
        <div className="hidden sm:flex w-full max-w-[92.5vw] border border-black/25 bg-white/75 p-2.5 flex-col rounded-md text-xs">
          <p>Hi, I'm Matthew.</p>
          <p className="mt-2.5">
            Based in Boston, MA, I'm a serverless developer passionate about
            learning, problem-solving, and building efficient systems. I'm 4x
            AWS certified and have hands-on experience in software development,
            cloud infrastructure, and DevOps.
          </p>
          <p className="mt-2.5">
            Due to immense family and financial challenges, I made the difficult
            decision to leave university and enter the workforce, taking a
            position in Local 25 as a CDL truck driver and aircraft refueler—
            <span className="italic">a job I genuinely enjoyed</span>. I
            dedicated several years to this role, but I remained committed to
            earning my degree. Determined to build a career in technology, I
            eventually left the union to return to school, balancing full-time
            coursework while raising my newborn son.
          </p>
          <p className="mt-2.5">
            After graduating, I faced a highly competitive job market. Rather
            than rushing into any opportunity, I decided to focus on
            strengthening my skills, earning multiple AWS certifications while
            deepening my expertise in full-stack development and cloud
            computing. Managing the demands of education, career growth, and
            fatherhood has reinforced my discipline, adaptability, and
            resilience.
          </p>
          <p className="mt-2.5">
            I take pride in my strong work ethic and commitment to continuous
            growth. I stay composed under pressure, approach challenges with a
            problem-solving mindset, and always welcome constructive feedback. I
            collaborate well with others and perform effectively in
            high-pressure environments, bringing high energy and a positive
            attitude while valuing professionalism, respect, and teamwork. I’m
            highly efficient at managing workloads, ensuring productivity
            without compromising quality.
          </p>
          <p className="mt-2.5">
            Outside of tech, I enjoy cooking, traveling, studying history, and
            spending time with my son.
          </p>
        </div>
        <div className="max-w-[92.5vw] sm:mt-8 flex flex-col sm:grid sm:grid-cols-[auto_1fr] gap-[3vw] sm:gap-8">
          <div className="flex sm:flex-col rounded-lg justify-between gap-[3vw] sm:gap-8 sm:w-[25vw] md:w-52 md:max-w-[25vw] /bg-black">
            {/* images */}
            <div className="w-full flex-1 bg-white/75 border rounded-lg overflow-hidden relative aspect-square sm:aspect-auto">
              <div className="absolute top-0 left-0 h-full w-full">
                <Image
                  className="rounded-lg flex-1 h-full w-52 object-cover object-top"
                  src="/about-me/headshot2.png"
                  alt="Matthew Sweeney"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="w-full flex-1 bg-white/75 border rounded-lg overflow-hidden relative aspect-square sm:aspect-auto">
              <div className="absolute top-0 left-0 h-full w-full">
                <Image
                  className="h-full w-full object-cover"
                  src="/about-me/tree1.png"
                  alt="Matthew Sweeney"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="w-full flex-1 bg-white/75 border rounded-lg overflow-hidden relative aspect-square sm:aspect-auto">
              <div className="absolute top-0 left-0 h-full w-full">
                <Image
                  className="h-full w-full object-cover"
                  src="/about-me/IMG_20211224_225001_898.jpg"
                  alt="Matthew Sweeney"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            {/* images */}
          </div>
          <div className="flex sm:hidden w-full max-w-[92.5vw] border border-black/25 bg-white/75 p-2.5 flex-col rounded-md text-xs">
            <p>Hi, I'm Matthew.</p>
            <p className="mt-2.5">
              Based in Boston, MA, I'm a serverless developer passionate about
              learning, problem-solving, and building efficient systems. I'm 4x
              AWS certified and have hands-on experience in software
              development, cloud infrastructure, and DevOps.
            </p>
            <p className="mt-2.5">
              Due to immense family and financial challenges, I made the
              difficult decision to leave university and enter the workforce,
              taking a position in Local 25 as a CDL truck driver and aircraft
              refueler—
              <span className="italic">a job I genuinely enjoyed</span>. I
              dedicated several years to this role, but I remained committed to
              earning my degree. Determined to build a career in technology, I
              eventually left the union to return to school, balancing full-time
              coursework while raising my newborn son.
            </p>
            <p className="mt-2.5">
              After graduating, I faced a highly competitive job market. Rather
              than rushing into any opportunity, I decided to focus on
              strengthening my skills, earning multiple AWS certifications while
              deepening my expertise in full-stack development and cloud
              computing. Managing the demands of education, career growth, and
              fatherhood has reinforced my discipline, adaptability, and
              resilience.
            </p>
            <p className="mt-2.5">
              I take pride in my strong work ethic and commitment to continuous
              growth. I stay composed under pressure, approach challenges with a
              problem-solving mindset, and always welcome constructive feedback.
              I collaborate well with others and perform effectively in
              high-pressure environments, bringing high energy and a positive
              attitude while valuing professionalism, respect, and teamwork. I’m
              highly efficient at managing workloads, ensuring productivity
              without compromising quality.
            </p>
            <p className="mt-2.5">
              Outside of tech, I enjoy cooking, traveling, studying history, and
              spending time with my son.
            </p>
          </div>
          <div>
            <img
              onClick={() => {
                window.open("/about-me/resume_v4.pdf", "_blank");
              }}
              className="h-full w-full object-cover border border-black/25 rounded-md cursor-pointer"
              src="/about-me/resume.png"
              alt="resume"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
