import ProjectItem from "@/components/ProjectItem";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ProjectItem
        title="Tiered API Access Manager"
        description="The Tiered API Access Manager is a fully automated AWS-powered system designed to manage API subscriptions and access tiers with minimal overhead. Built using the AWS SAM framework, it streamlines API key management, usage throttling, and authentication through an integrated infrastructure-as-code approach. This project deploys a scalable backend with API Gateway, Lambda, DynamoDB, and an ALB-backed Auto Scaling Group, ensuring efficient request handling and adaptive scaling. The system enforces subscription-based API access with dynamic rate limiting, automated billing, and real-time monitoring. A React-based frontend provides a user-friendly interface for managing API keys and subscriptions, backed by AWS Cognito for secure authentication. By combining automation with flexibility, this solution enables businesses to monetize APIs while maintaining security, scalability, and reliability."
        image="APIkeyThumbnail.png"
        firstOfType={true}
        url="https://api-limit-throttler.vercel.app"
      />
      <div>
        <ProjectItem
          title="AWS Prerequisite Knowledge Guide"
          description="The AWS Prerequisite Knowledge Guide is an extensive resource designed to provide a structured, in-depth understanding of key AWS concepts, services, and architectural principles. Originally created as a foundational reference for a serverless architecture project, this guide has grown into a standalone learning resource that comprehensively breaks down AWS infrastructure, networking, and serverless components."
          image="cropped-aws.png"
          shift={1}
          url="https://api-limit-throttler.vercel.app/prerequisite-knowledge"
        />
      </div>
      <div>
        <ProjectItem
          title="VPC Access Control Strategies"
          description="VPC access control is crucial in securing API-driven architectures, especially when routing API Gateway traffic to a public-facing ALB. One major concern is the potential for bypassing API Gateway restrictions by directly accessing the ALB, which can expose APIs to unauthorized usage and service abuse. Various mitigation strategies exist, each with its trade-offs in complexity, cost, and security effectiveness. Removing API Gateway in favor of a custom proxy layer enhances control but adds operational overhead. Implementing mutual TLS (mTLS) at the ALB level ensures only authenticated traffic reaches the backend but introduces management complexity and scaling concerns. Alternatively, leveraging VPC Link to route API Gateway traffic directly to private VPC resources eliminates public exposure while maintaining AWS-native security mechanisms. A cost-benefit analysis reveals that while mTLS is viable for lower data transfer volumes, VPC Link offers better scalability and cost efficiency, making it the preferred solution for high-throughput architectures."
          image="cropped-bad-actor.png"
          shift={2}
          url="https://api-limit-throttler.vercel.app/security-considerations"
        />
      </div>

      <ProjectItem
        title="ColorStream Dynamics"
        description="ColorStream Dynamics is a real-time data processing and visualization system built to explore AWS Kinesis Data Streams' architecture, scalability, and operational best practices. This project provides an in-depth examination of Kinesis components such as shards, partition keys, throughput limits, and stream consumption methods, offering a hands-on approach to understanding data streaming at scale. Through interactive animations, users can visualize how data moves through Kinesis, whether via manual polling or Lambda event triggers. The system is deployed using AWS SAM, with a React front end providing real-time feedback on data flow, making complex cloud-based data streaming concepts more accessible and practical."
        image="kinesis.png"
        url="https://kinesis-tutorial.vercel.app"
      />
      <ProjectItem
        title="GlobalChat"
        description="GlobalChat is a modern, web-based chat application built for real-time communication and seamless user interaction. Developed with a containerized Next.js front end and a Socket.io-powered back end, it delivers a responsive and scalable messaging platform. The app features instant global and private chat, live notifications, and media sharing, all wrapped in a sleek TailwindCSS-powered UI. Users can personalize their experience with custom avatars and searchable chat history, ensuring continuity across sessions. With Docker integration, GlobalChat maintains consistency across environments, enabling effortless deployment on AWS or local systems. This project showcases advanced software design principles, making it an ideal blueprint for scalable and efficient web applications."
        image="cropped-globalchatdark.png"
        url="https://global-chat-docs.vercel.app"
      />
      <ProjectItem
        title="Tailwind UI Design Example"
        description="Tailwind UI Design Example is a website I built using Next.js and Tailwind CSS, inspired by the official Tailwind website. This project showcases my mastery of responsive UI design, emphasizing seamless transitions across all screen sizes. The site employs a heavily mobile-first approach, ensuring a flawless experience from the smallest devices to ultra-wide displays.

A key feature of this design is its use of nested layouts shared between dynamically generated routes, eliminating cumulative layout shift while streaming in only the necessary content during route changes. Breakpoint handling is executed with precision, leveraging both Tailwind’s responsive utilities and JavaScript-powered screen resize listeners. This ensures that UI elements like modals adapt dynamically—automatically closing or repositioning based on whether the user is on a mobile or desktop experience. The result is a highly optimized, fluid interface that maintains visual stability while delivering a polished, intuitive experience across all devices."
        image="ui.png"
        url="https://ui-design-drmatt13.vercel.app"
      />
      <ProjectItem
        title="Visual Algorithms"
        description="A collection of simple yet interactive algorithm visualizations and demonstrations. Includes classic searches like Breadth-First Search and Graph Search, sorting techniques like Insertion Sort, and problem-solving tools like a Sudoku Solver and Island Counter. Some entries, like Web Assembly and Loan Calculation, explore performance and practical applications beyond standard algorithmic concepts."
        image="algorithms.png"
        url="https://example-visual-algorithms.vercel.app"
      />
      <ProjectItem
        title="Agile Enterprise Operations"
        description="
Agile Enterprise Operations is an in-depth exploration of organizational structure, DevOps methodologies, and CI/CD dynamics within modern software development. This project examines the seamless integration of development and operations, starting from client expectations to the implementation of sophisticated workflows. It not only outlines the theoretical framework of Agile teams but also delves into practical applications, such as development environments, version control, and CI/CD pipelines. By analyzing how these pipelines are managed and monitored, this project highlights both the technical and strategic competencies required to navigate complex software deployments. Through this approach, it demonstrates a comprehensive understanding of Agile enterprise operations, reinforcing the ability to implement and oversee scalable, high-performing software solutions in real-world environments."
        image="360_F_811656345_9hamCFadbRyk18aIeeyUZFes1fhaMlkV.jpg"
        workInProgress={true}
      />
      <ProjectItem
        title="Banned Social"
        description="Banned Social is a decentralized social platform built for uncensored news sharing and open discussions, leveraging a microservices architecture with MongoDB, Express.js, and a custom event bus broker for service communication. It features custom authentication with OAuth, enabling secure access while preserving user privacy. Users can share and view news globally or locally, connect with friends, and curate their feeds based on friend activity, local trends, or global discussions. A real-time notification system powered by WebSockets ensures instant updates for friend requests, comments, and trending posts. Additionally, Banned Social includes an independent news section, providing an alternative to mainstream media with unrestricted reporting and discussions."
        image="bannedsocial.jpg"
        decommissioned={true}
      />
      <ProjectItem
        title="Social Media Template"
        description="A Social Media Starter Template built with Next.js & Tailwind designed for the rapid development of dynamic content-driven applications. It features a hybrid authentication system, seamlessly integrating custom user authentication with OAuth 2.0 from popular providers. Built on a microservices architecture, it ensures scalability and flexibility for modern applications. Originally developed as a reusable boilerplate, this template served as the foundation for Banned Social, streamlining its backend infrastructure and accelerating development. Perfect for projects requiring secure authentication, modular architecture, and dynamic content handling, this template provides a robust starting point for building scalable social platforms."
        image="socialtemplate.jpg"
        decommissioned={true}
      />
      <ProjectItem
        title="URL Shortener"
        description="A lightweight, high-performance service that allows users to create short, shareable links that redirect with a 301 status code for efficient and permanent URL forwarding. Built with MongoDB for persistent storage, it ensures quick retrieval and redirection of shortened URLs. The system is designed for simplicity and speed, offering a clean API for generating and managing shortened links. Whether for personal use or integrating into larger applications, URL Shortener provides a reliable way to condense long URLs while maintaining seamless redirection and tracking capabilities."
        image="chain.webp"
        decommissioned={true}
      />
      <ProjectItem
        title="Development Blog"
        description="A platform I built to document my insights, experiences, and technical explorations in software development. It covers topics ranging from backend architecture and front-end frameworks to DevOps, cloud computing, and system design. Designed as both a personal reference and a resource for others, it showcases best practices, debugging techniques, and innovative solutions while capturing my ongoing learning process in the ever-evolving tech landscape."
        image="devblog.webp"
        decommissioned={true}
      />
      <ProjectItem
        title="Costello Ink"
        description="My good friend Cody is a tattoo artist and this is a website I made for him. He's a very busy guy, so I wanted to make a website that would allow others to see of his work and get in contact with him."
        image="costello.jpg"
        decommissioned={true}
      />
      <ProjectItem
        title="Simple Image Uploader"
        description="
  This website was a design challenge project from devchallenges.io which tasked me with creating an application allows users to upload a single image at a time, supporting JPG, PNG, and GIF formats with a maximum file size of 2MB. Users can either drag and drop an image or manually browse and select a file for upload. During the upload process, a progress indicator provides real-time feedback, ensuring a smooth user experience. Once the upload is complete, users can preview the image, copy its URL for sharing, or download it directly. Additionally, the application includes a light and dark theme toggle for improved accessibility and customization. Prioritizing usability and clean UI/UX, this project delivers a responsive and efficient image handling solution. The final implementation is deployed with both a repository and a live demo available for review."
        image="bluetiles.jpg"
        decommissioned={true}
      />
    </div>
  );
};

export default page;
