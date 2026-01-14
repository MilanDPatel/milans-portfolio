import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Orchestration",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Agentic AI",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI Engineer Intern",
    company_name: "IEEE",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2025 - August 2025",
    points: [
      "Engineered an AI-powered mentor–mentee matching system for 1,000+ users using AWS Bedrock Knowledge Bases and a RAG pipeline to optimize recommendations.",
      "Automated resume parsing with a Python AWS Lambda triggered by S3 uploads, using Azure GPT-4 to extract structured data into DynamoDB, eliminating manual processing.",
      "Developed and maintained 15+ REST API endpoints with Spring Boot and built an Angular frontend for user profiles and resume workflows",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Verizon",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Boosted unit test coverage across three core Java packages by 72% through the development and documentation of 250+ tests using Mockito and JaCoCo, enhancing code reliability and minimizing regressions.",
      "Utilized Swagger to design, document, and maintain RESTful APIs, improving developer onboarding and streamlining integration across multiple services.",
      "Reduced virtual machine setup by 82% for the development team by creating Ansible scripts to automate environment configuration, dependency installation, and Docker integration.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Valeon",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2023 - Jan 2024",
    points: [
      "Built a responsive dashboard using React J.S and JavaScript to support 5 team workflows, enhancing user experience and enabling real-time insights through interactive data visualizations.",
      "Improved data consistency across 800+ customer records by removing duplicates and handling missing values in PostgreSQL to optimize downstream membership analysis and reporting accuracy.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Robert Wood Johnson Hospital",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Contributed as third author to a published paper comparing concurrent versus sequential chemotherapy outcomes.",
      "Shadowed oncologists and leveraged visual analysis tools to examine lung imaging, supporting accurate data collection for clinical studies.",
      "Analyzed patient data for lung cancer research using Excel to extract and organize critical study information.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
