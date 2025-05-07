"use client";

import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center ">
        <div className="hidden sm:flex w-full max-w-[92.5vw] border border-black/25 bg-white/80 p-2.5 flex-col rounded-md text-xs">
          <p className="">
            Hi, I’m Matthew — a Boston-based Solutions Architect Professional
            passionate about solving problems and building scalable, efficient
            systems. I hold four AWS certifications and have hands-on experience
            across AWS, Azure, and hybrid on-prem environments. My skill set
            spans serverless architecture, full-stack development,
            infrastructure as code, containerization, cloud networking, and
            systems design.{" "}
          </p>
          <p className="mt-2.5">
            After leaving university due to family and financial challenges, I
            worked as an aircraft refueler. I later returned to complete my B.S.
            in Data Analytics while raising my son and fully committing to a
            career in technology. Since then, I’ve taken an intensive self-study
            path — diving deep into cloud architecture, programming, and
            infrastructure through hands-on labs, short-term projects, and
            certification prep. I study every chance I get and regularly build
            focused projects to reinforce concepts across the stack, from
            frontend interfaces to backend systems.
          </p>
          <p className="mt-2.5">
            I’m now looking to bring that same drive, consistency, and technical
            skill to a forward-thinking team in my first professional tech role.
            I learn quickly, work well under pressure, and take pride in writing
            clean, scalable solutions. Outside of tech, I enjoy cooking,
            studying history, and spending time with my son.
          </p>
        </div>
        <div className="max-w-[92.5vw] sm:mt-8 flex flex-col sm:grid sm:grid-cols-[auto_1fr] gap-[3vw] sm:gap-8">
          <div className="flex sm:flex-col rounded-lg justify-between gap-[3vw] sm:gap-8 sm:w-[25vw] md:w-52 md:max-w-[25vw]">
            {/* images */}
            <div className="w-full flex-1 bg-white/80 border rounded-lg overflow-hidden relative aspect-square sm:aspect-auto">
              <div className="absolute top-0 left-0 h-full w-full">
                <Image
                  className="select-none rounded-lg flex-1 h-full w-52 object-cover object-top"
                  src="/about-me/headshot2.png"
                  alt="Matthew Sweeney"
                  width={1000}
                  height={1000}
                  draggable="false"
                />
              </div>
            </div>
            <div className="w-full flex-1 bg-white/75 border rounded-lg overflow-hidden relative aspect-square sm:aspect-auto">
              <div className="absolute top-0 left-0 h-full w-full">
                <Image
                  className="select-none h-full w-full object-cover"
                  src="/about-me/tree1.png"
                  alt="Matthew Sweeney"
                  width={1000}
                  height={1000}
                  draggable="false"
                />
              </div>
            </div>
            <div className="w-full flex-1 bg-white/75 border rounded-lg overflow-hidden relative aspect-square sm:aspect-auto">
              <div className="absolute top-0 left-0 h-full w-full">
                <Image
                  className="select-none h-full w-full object-cover"
                  src="/about-me/IMG_20211224_225001_898.jpg"
                  alt="Matthew Sweeney"
                  width={1000}
                  height={1000}
                  draggable="false"
                />
              </div>
            </div>
            {/* images */}
          </div>
          <div className="flex sm:hidden w-full max-w-[92.5vw] border border-black/25 bg-white/75 p-2.5 flex-col rounded-md text-xs">
            <p>Hi, I'm Matthew.</p>
            <p className="mt-2.5">
              Based in Boston, MA, I'm a Solutions Architect Professional
              passionate about learning, problem-solving, and building
              efficient, scalable systems. I'm 4x AWS certified, including AWS
              Certified Solutions Architect – Professional, with hands-on
              experience across AWS, Azure, and on-premises environments. My
              technical skills include full-stack development (JavaScript,
              TypeScript, React, Next.js, and Python), serverless architecture
              with AWS Lambda, hybrid cloud networking, Infrastructure as Code
              (CloudFormation and AWS SAM), containerization with Docker,
              relational and NoSQL databases (PostgreSQL, DynamoDB, MongoDB),
              GraphQL integration, systems design, and cloud-native
              modernization.
            </p>
            <p className="mt-2.5">
              Due to immense family and financial challenges, I made the
              difficult decision to leave university and enter the workforce,
              taking a position in Local 25 as a CDL truck driver and aircraft
              refueler—
              <span className="italic">a job I genuinely enjoyed</span>. I
              dedicated several years to this role, yet I always remained
              committed to earning my degree. Determined to build a career in
              technology, I eventually left the union to return to school,
              balancing full-time coursework while raising my newborn son.
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
                window.open("/about-me/resume_v5.pdf", "_blank");
              }}
              className="select-none h-full w-full object-cover border border-black/25 rounded-md cursor-pointer"
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
