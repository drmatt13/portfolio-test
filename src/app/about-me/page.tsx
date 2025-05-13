"use client";

import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center ">
        <div className="hidden sm:flex w-full max-w-[92.5vw] border border-black/25 bg-white/80 p-2.5 flex-col rounded-md text-xs">
          <p>
            Hi, I’m Matthew, a Boston based certified AWS Solutions Architect
            Professional passionate about solving complex problems and building
            scalable, efficient cloud based systems. I hold four AWS
            certifications and have hands-on experience working across AWS,
            Azure, and hybrid on-prem environments. My skill set spans
            serverless architecture, full stack development, infrastructure as
            code, containerization, cloud networking, and enterprise systems
            design.
          </p>
          <p className="mt-2.5">
            After leaving university due to family and financial challenges, I
            worked full time as an aircraft refueler. I later returned to
            complete my B.S. in Data Analytics while raising my son and fully
            committing to a career in technology. Since graduating, I’ve
            followed an intensive self study path, diving deep into cloud
            architecture, programming, and infrastructure through hands-on labs,
            client facing freelance work, and certification driven learning.
          </p>
          <p className="mt-2.5">
            As a freelance cloud developer, I’ve architected and delivered
            secure, fault tolerant solutions for clients using AWS services such
            as Lambda, API Gateway, DynamoDB, and Cognito. My work incorporates
            infrastructure as code (CloudFormation, SAM), containerization
            (Docker), and fully automated CI/CD pipelines. I’ve built everything
            from scalable backend systems to polished frontend interfaces using
            TypeScript, React, and Next.js. Each project reinforces my ability
            to apply best practices across the stack, blending cloud
            architecture, software engineering, and real world problem solving.
          </p>
          <p className="mt-2.5">
            I’m now looking to transition into a full time role on a
            collaborative team where I can contribute my skills, grow alongside
            experienced engineers, and help deliver meaningful, scalable
            solutions. I learn quickly, thrive under pressure, and take pride in
            writing clean, maintainable code. Outside of tech, I enjoy cooking,
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
            <p>
              Hi, I’m Matthew, a Boston based certified AWS Solutions Architect
              Professional passionate about solving complex problems and
              building scalable, efficient cloud based systems. I hold four AWS
              certifications and have hands-on experience working across AWS,
              Azure, and hybrid on-prem environments. My skill set spans
              serverless architecture, full stack development, infrastructure as
              code, containerization, cloud networking, and enterprise systems
              design.
            </p>
            <p className="mt-2.5">
              After leaving university due to family and financial challenges, I
              worked full time as an aircraft refueler. I later returned to
              complete my B.S. in Data Analytics while raising my son and fully
              committing to a career in technology. Since graduating, I’ve
              followed an intensive self study path, diving deep into cloud
              architecture, programming, and infrastructure through hands-on
              labs, client facing freelance work, and certification driven
              learning.
            </p>
            <p className="mt-2.5">
              As a freelance cloud developer, I’ve architected and delivered
              secure, fault tolerant solutions for clients using AWS services
              such as Lambda, API Gateway, DynamoDB, and Cognito. My work
              incorporates infrastructure as code (CloudFormation, SAM),
              containerization (Docker), and fully automated CI/CD pipelines.
              I’ve built everything from scalable backend systems to polished
              frontend interfaces using TypeScript, React, and Next.js. Each
              project reinforces my ability to apply best practices across the
              stack, blending cloud architecture, software engineering, and real
              world problem solving.
            </p>
            <p className="mt-2.5">
              I’m now looking to transition into a full time role on a
              collaborative team where I can contribute my skills, grow
              alongside experienced engineers, and help deliver meaningful,
              scalable solutions. I learn quickly, thrive under pressure, and
              take pride in writing clean, maintainable code. Outside of tech, I
              enjoy cooking, studying history, and spending time with my son.
            </p>
          </div>
          <div>
            <img
              onClick={() => {
                window.open("/about-me/Matthew_Sweeney-Resume.pdf", "_blank");
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
