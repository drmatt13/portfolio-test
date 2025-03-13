import ProjectItem from "@/components/ProjectItem";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <ProjectItem
        title="Tiered API Access Manager"
        description="The Tiered API Access Manager is a fully automated Infrastructure as Code (IaC) solution for managing API subscriptions and access tiers, deployed to AWS via a CloudFormation-based stack. Built with the AWS SAM framework, it utilizes API Gateway, Lambda, DynamoDB, and an ALB-backed Auto Scaling Group to facilitate dynamic request handling and adaptive scaling. The system enforces tiered API access with rate limiting, automated billing, and real-time monitoring. A React-based front end streamlines API key management, while AWS Cognito provides secure authentication. Designed for scalability and efficiency, this project empowers businesses to monetize APIs while ensuring security and operational flexibility."
        image="APIkeyThumbnail.png"
        firstOfType={true}
        url="https://api-limit-throttler.vercel.app"
      />

      <ProjectItem
        title="AWS Prerequisite Knowledge Guide"
        description="The AWS Prerequisite Knowledge Guide was initially developed as part of the Tiered API Access Manager to provide a structured, in-depth exploration of essential AWS concepts, services, and architectural principles crucial for understanding the project's serverless architecture. Over time, it evolved into a standalone resource designed to break down AWS infrastructure, networking, and serverless components in a clear and accessible way. Drawing on my experience as a certified AWS Solutions Architect Professional, this guide condenses the vast AWS ecosystem into a concise yet comprehensive foundation, equipping readers with the knowledge necessary to grasp the architectural decisions behind the project. While tailored to align with the project's technical requirements, it maintains a broader perspective, making it valuable for newcomers and experienced users looking to deepen their understanding of AWS."
        image="cropped-aws.png"
        shift={1}
        url="https://api-limit-throttler.vercel.app/prerequisite-knowledge"
      />

      <ProjectItem
        title="VPC Access Control Strategies"
        description="The VPC Access Control Strategies guide was initially developed as a security-focused subproject within the Tiered API Access Manager, addressing the challenge of securing API Gateway traffic routed to a public-facing ALB. Over time, it evolved into a standalone resource that explores vulnerabilities, mitigation strategies, and cost-benefit analyses of various approaches, including removing API Gateway in favor of a custom proxy, implementing mutual TLS (mTLS) at the ALB level, and leveraging VPC Link for private connectivity. Drawing on my experience as a certified AWS Solutions Architect Professional, this guide breaks down AWS networking concepts, security mechanisms, and architectural trade-offs, equipping readers with the knowledge to design scalable, secure, and cost-efficient API architectures. While deeply rooted in the original project’s requirements, it provides a broader perspective that is valuable to AWS practitioners and security-focused architects."
        image="cropped-bad-actor.png"
        shift={2}
        url="https://api-limit-throttler.vercel.app/security-considerations"
      />
      <ProjectItem
        title="ColorStream Dynamics"
        description="ColorStream Dynamics is a deep dive into AWS Kinesis Data Streams, combining a structured guide with an interactive real-time data processing system. It covers shard distribution, partition key hashing, throughput constraints, and stream consumption patterns, demonstrating explicit polling and event-driven processing via AWS Lambda triggers. A defining feature is its real-time visualization, where a React-based front end dynamically renders data ingestion and retrieval, allowing users to analyze stream propagation, retrieval latency, and consumer behavior. The system simulates streaming color-encoded records from multiple producers, while a togglable consumer ingests and animates records by color and retrieval order. It persistently tracks shard iterators in DynamoDB, ensuring polling resumes seamlessly after interruptions. This hands-on approach reinforces partitioning, scaling, and data consistency in distributed streaming. The architecture is deployed via CloudFormation, with AWS SAM handling stack generation and automated resource provisioning."
        image="kinesis.png"
        url="https://kinesis-tutorial.vercel.app"
      />

      <ProjectItem
        title="GlobalChat"
        description="GlobalChat is a real-time web application showcasing interactive UI development, real-time data handling, and efficient state management using React and Socket.io. It features global and private messaging, live notifications, and media sharing, all structured within a modular component-based architecture. While the single-server design centralizes connection management, making it less scalable for high traffic, the project serves as a strong reference for my ability to build complex event-driven frontends. The front and back end are containerized and orchestrated via Docker Compose for local development or AWS deployment. An EC2 user data script automates provisioning by cloning the repository, dynamically configuring environment variables based on instance metadata, and executing docker-compose up to deploy the stack on AWS. This setup ensures environment consistency, enabling seamless execution both locally and in the cloud."
        image="cropped-globalchatdark.png"
        url="https://global-chat-docs.vercel.app"
      />
      <ProjectItem
        title="Massachusetts Code Violations Reporter"
        description="Massachusetts Code Violations Reporter is a tech demo showcasing GIS integration, real-time mapping, and interactive parcel selection. Built with Leaflet for tile-based rendering, it enables users to search for properties or click on the map to retrieve tax parcel data via public APIs, precisely identifying land parcels and structures. Users can specify properties such as apartment units, commercial buildings, and multi-use developments to report potential violations, including unsafe conditions, zoning infractions, or illegal construction. This project demonstrates my experience in spatial data processing, interactive mapping, and leveraging public GIS datasets for real-time property analysis."
        image="code-violations-reporter.png"
        url="https://massachusetts-code-violations-reporter.vercel.app/"
      />
      <ProjectItem
        title="Tailwind UI Design Example"
        description="Tailwind UI Design Example is a tech demo built with Next.js (using the Next 12 pages directory) and Tailwind CSS, inspired by the official Tailwind website. This project demonstrates advanced responsive UI design, focusing on seamless transitions across all screen sizes with a mobile-first approach. It features nested layouts shared between dynamically generated routes, eliminating cumulative layout shift while ensuring only the necessary content loads during navigation. Breakpoint handling is optimized using Tailwind’s responsive utilities alongside JavaScript-powered resize listeners, allowing UI elements like modals to adapt dynamically—automatically closing or repositioning based on device type. The result is a highly optimized, visually stable, intuitive interface that delivers a polished experience across mobile, tablet, and ultra-wide displays."
        image="ui.png"
        url="https://ui-design-drmatt13.vercel.app"
      />
      <ProjectItem
        title="Visual Algorithms"
        description="Visual Algorithms is a collection of interactive algorithm visualizations created to showcase my ability to build intuitive, UI-driven tools for exploring classic algorithms. The project includes searches like Breadth-First Search and Graph Search, sorting algorithms like Insertion Sort, and practical tools like a Loan Calculator and Island Counter. While focusing on presenting the results and outputs of these algorithms engagingly—such as visualizing loan amortization with graphs or counting islands on a grid—the project doesn’t break down the underlying mechanics in depth. Instead, it emphasizes making these concepts more interactive and accessible. This project is still a work in progress, and I plan to continue developing it when I have time."
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
