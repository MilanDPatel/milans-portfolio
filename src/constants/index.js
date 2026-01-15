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
  angular,
  springboot,
  flask,
  androidstudio,
  postgresql,
  aws,
  pytorch,
  meta,
  starbucks,
  tesla,
  shopify,
  ieee,
  verizon,
  valeon,
  rwj,
  carrent,
  jobit,
  tripguide,
  maniflow,
  burger,
  coffeebot,
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
    id: "projects",
    title: "Projects",
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Android Studio",
    icon: androidstudio,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
];

const experiences = [
  {
    title: "AI Engineer Intern",
    company_name: "IEEE",
    icon: ieee,
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
    icon: verizon,
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
    icon: valeon,
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
    icon: rwj,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Contributed as third author to a published paper comparing concurrent versus sequential chemotherapy outcomes.",
      "Shadowed oncologists and leveraged visual analysis tools to examine lung imaging, supporting accurate data collection for clinical studies.",
      "Analyzed patient data for lung cancer research using Excel to extract and organize critical study information.",
    ],
  },
];

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    link: "https://www.credly.com/badges/e521c3f8-8864-4804-a0fa-9db2085f3f90/linked_in_profile",
  },
  {
    title: "Python Course by University of Michigan",
    link: "https://ibb.co/rs3vyqd",
  },
  {
    title: "AWS Machine Learning Associate",
    link: "<insert link here>",
    status: "Upcoming",
  },
];

const testimonials = certifications;

const projects = [
  {
    name: "ManiFlow",
    description:
      "ManiFlow is a system that converts academic PDFs into animated educational videos by analyzing documents with AI, generating storyboards, and rendering animations using Manim.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "React J.S",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "pink-text-gradient",
      },
    ],
    image: maniflow,
    source_code_link: "https://github.com/MilanDPatel/maniflow-backend",
  },
  {
    name: "BurgerRush",
    description:
      "Android app that allows users to browse a menu, customize orders, and manage a dynamic shopping cart, with CSV export functionality for saving order summaries locally.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
    ],
    image: burger,
    source_code_link: "https://github.com/MilanDPatel/RUBurgerAndroidApp",
  },
  {
    name: "CoffeeBot",
    description:
      "AI-powered chatbot for a coffee shop that recommends products using Apriori-based market basket analysis and semantic search, with a CI/CD pipeline for automated deployment on AWS.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Pinecone",
        color: "pink-text-gradient",
      },
    ],
    image: coffeebot,
    source_code_link: "https://github.com/MilanDPatel/coffee-chat-bot",
  },
];

export { services, technologies, experiences, testimonials, projects };
