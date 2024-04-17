import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  AWS,
  Azure,
  Bootstrap,
  C,
  CakePHP,
  Canva,
  Cloudflare,
  DigitalOcean,
  Express,
  FastAPI,
  Firebase,
  Flask,
  GitHub,
  Heroku,
  Jira,
  Laravel,
  MySQL,
  Next,
  Postman,
  Python,
  Selenium,
  Vercel,
  YAML,
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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  innovya,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Ai/Ml Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "AWS",
    icon: AWS,
  },
  {
    name: "Azure",
    icon: Azure,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "CakePHP",
    icon: CakePHP,
  },
  {
    name: "Canva",
    icon: Canva,
  },
  {
    name: "Cloudflare",
    icon: Cloudflare,
  },
  {
    name: "DigitalOcean",
    icon: DigitalOcean,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "FastAPI",
    icon: FastAPI,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
  {
    name: "Flask",
    icon: Flask,
  },
  {
    name: "GitHub",
    icon: GitHub,
  },
  {
    name: "Heroku",
    icon: Heroku,
  },
  {
    name: "Jira",
    icon: Jira,
  },
  {
    name: "Laravel",
    icon: Laravel,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "Next",
    icon: Next,
  },
  {
    name: "Postman",
    icon: Postman,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Selenium",
    icon: Selenium,
  },
  {
    name: "Vercel",
    icon: Vercel,
  },
  {
    name: "YAML",
    icon: YAML,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Solution Developer Intern",
    company_name: "Innovya Technologies",
    icon: innovya,
    iconBg: "#383E56",
    date: "May 2023 - current",
    points: [
      "Led development for client project Revkeep, streamlining processes and boosting team productivity by 30% through the suggestion of setting up Github Repository, did over 40 commits and added around 326,951 lines of code in just a span of 5 months.",
      "Orchestrated project deployment on Digital Ocean droplet and Azure, and attended client meetings for understanding their requirements feedback purposes.",
      "Developed various modules for Revkeep, including API creation and controllers for data interaction, leveraging different frameworks.",
      "Integrated FTP technology NPPES API for enhanced functionality in Revkeep."
    ],
  },
  {
    "title": "Vice Chairperson",
    "company_name": "Mozilla Firefox Club",
    "icon": tesla,
    "iconBg": "#E6DEDD",
    "date": "Jan 2021 - Feb 2022",
    "points": [
      "Coordinated and successfully completed over 15 technical events, guiding 1000+ students as core committee members.",
      "Led a team of 6 junior core committee members in building and deploying the club’s website: Mozilla Firefox Club Website.",
      "Guided juniors on web development, open-source contributions, fostering technical skill development among members."
    ]
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
    name: "FTP Demo",
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
    name: "ShiftBuddy",
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
    name: "PredictMyHealth",
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
