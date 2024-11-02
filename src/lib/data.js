import React from 'react'

import campwithusImg from '../assets/images/camp-with-us.png'
import carcatalogImg from '../assets/images/car-catalog.png'
import filedriveImg from '../assets/images/file-drive.png'
import projectmanagementImg from '../assets/images/project-management.png'
import reactfoodImg from '../assets/images/react-food.png'

import brameworkImg from "../assets/images/projects/Bramework.png";
import dp360CRMImg from "../assets/images/projects/DP360-CRM.png";
import ledavioImg from "../assets/images/projects/Ledavio.png";
import blackstartImg from "../assets/images/projects/blackstartnew.png";
import rigorImg from "../assets/images/projects/RIGOR.png";
import coworkifyImg from "../assets/images/projects/Coworkify.png";


// import surgeImg from '../assets/images/surge.png'
// import portfolioImg from '../assets/images/portfolio.png'
// import aiLawyerImg from '../assets/images/ai-lawyer.png'
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
  GraduationCap,
} from 'lucide-react'

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
]

export const experiencesData = [
  {
    title: 'Freelancer',
    // location: 'Prague, Czechia',
    description: 'As a freelancer, I worked on DP360CRM, Bramework, Ledavio, Mailerrize, Zopfind, and Blackstar as a full-stack Developer, OE-Energy, Patiento, and Cogniable as a backend developer, and Nimble and NSPnew as a react developer.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'May 2018 - Present',
  },
  {
    title: 'Python Developer',
    location: 'EnAct eServices, Sahibzada Ajit Singh Nagar, Punjab',
    description: 'Worked as a Senior Python Developer. Successfully Developed and Deployed various projects in Python/Django, MySQL, CSS, HTML, JavaScript.',
    icon: React.createElement(BookIcon),
    date: 'Mar 2018 - May 2018',
  },
  {
    title: 'Software Developer',
    location: 'UcodeSoft Solutions Private Limited, Zirakpur, Punjab',
    description: 'Worked as a Software Developer. Successfully Developed and Deployed various projects in Python/Django, CakePHP, Bootstrap, BackboneJS, MySQL, CSS, HTML, JavaScript.',
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Jun 2014 - Mar 2018',
  },
  {
    title: 'Python Trainee',
    location: 'UcodeSoft Solutions Private Limited, Zirakpur, Punjab',
    description: 'Joined as a Python Trainee. Learned Python / Django, DRF, Bootstrap, BackboneJS, MySQL, CSS, HTML, JavaScript. Developed various projects in Python/Django.',
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Nov 2013 - May 2014',
  },
  {
    title: 'Self-education',
    location: 'Ambala, Haryana',
    description: 'Learned PHP, Codeigniter, HTML, CSS, JavaScript and MySQL and developed a user management project', 
    icon: React.createElement(GraduationCap),
    date: 'Jan 2011 - Jul 2011',
  },
  {
    title: 'B. Tech: (Information Technology)',
    location: 'Mohri, Haryana',
    description: 'Completed my degree in Information Technology from Modern Institute Of Engineering And Technology (KUK).',
    icon: React.createElement(GraduationCap),
    date: 'Sep 2009 - Aug 2013',
  },
]

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
}

export const projectsData = [
  {
    title: 'Bramework',
    description:
      `Provide a platform fot blogger to create blog posts in few minutes using AI tools. Also provide Fact-Based Research,
SEO-Optimized Content, Engaging and Natural Text.`,
    tags: [
      'OpenAI',
      'React',
      'Python 3x',
      'Django',
      'DRF',
      'PostgreSQL',
      'Fire Store',
      'Tailwind CSS',
      'AWS',
      'Docker',
    ],
    imageUrl: brameworkImg,
    link: 'https://app.bramework.com/',
  },
  {
    title: 'DP360 CRM',
    description: `This is a CRM application, that enhance the performance of dealership. dp360cm is a platform to provide a CRM
solutions and training for dealerships of all sizes and sales processes`,
    tags: [
      'AngularJs',
      'Twilio',
      'Git',
      'AWS',
      'Angular Material',
      'PHP',
      'MySQL',
    ],
    imageUrl: dp360CRMImg,
    link: 'https://app.dp360crm.com/',
  },
  {
    title: 'Ledavio',
    description: `Application help the people to visualize ideas quickly and easily by creating hte mood-boards. Target audiences are
graphic artists/graphic designers, product designers, visual artists, photographers, architects or users from
associated fields.`,
    tags: [
      'Django',
      'Python',
      'AngularJs',
      'DRF',
      'PostgreSQL',
      'SCRUM Methodology',
    ],
    imageUrl: ledavioImg,
    link: 'https://ledavio.design/',
  },
  {
    title: 'Blackstart',
    description:
      `Its a web application to create and manage the Campaigns for residents to raise their issues and get the solutions from the
       Legislators and the Government.`,
    tags: ['React', 'Redux', 'Python', 'Django', 'Bulma CSS', 'Twilio', 'Heroku', 'Sendgrid'],
    imageUrl: blackstartImg,
    link: 'https://blackstartnew.herokuapp.com/',
  },
  {
    title: 'Rigor',
    description:
      `This is a SAAS application, used in RIGs industry to manage tasks and processes.
      RIGs related companies can purchase this application and manage their internal processes on it by creating checklists.`,
    tags: [
      'CakePHP',
      'Backbone',
      'VueJS',
      'MySQL',
      'Git',
      'Bootstrap',
    ],
    imageUrl: rigorImg,
    link: 'https://checklistrigor.com/',
  },
  {
    title: 'Coworkify',
    description:
      `Coworkify is a web based coworking management software. It is simply designed application where user can
       book the resources and invoice automatically generate on the basis of the resource usage and user selected plan.`,
    tags: [
      'Python',
      'Pyramid',
      'Redis',
      'Celery',
      'MySql',
      'Nginx Server',
    ],
    imageUrl: coworkifyImg,
    link: 'https://coworkify.com/',
  },
]

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
];

export const allThemesOptions = [
  'light',
  'dark',
  // 'red',
  // 'yellow',
  'blue'
];

export const allThemesOptionMap = [
  {theme: 'light', color: "#fff"},
  {theme: 'dark', color: "#000"},
  // {theme: 'red', color: "#fca6a5"},
  // {theme: 'yellow', color: "#864e0f"},
  {theme: 'blue', color: "#0a28fd"}
];

export const themeClassMap = {
  btnColor: "text-black dark:text-white yellow:text-white red:text-black blue:text-white",
  btn: "bg-[#ffcbb4] yellow:bg-[#de2c94] red:bg-[#2182a9] blue:bg-[#288130] dark:bg-white/10",
  bg: "bg-white dark:bg-black yellow:bg-yellow-800 red:bg-red-200 blue:bg-sky-950",

  border: "border-zinc-200 dark:border-zinc-500 yellow:border-yellow-800 red:border-red-200 blue:border-[#2e7735]",
  text: "text-black dark:text-white yellow:text-white red:text-black blue:text-white",
  hover: "hover:bg-gray-200 dark:hover:bg-gray-600 blue:hover:bg-lime-800",

  projectCard: "bg-white/10 dark:bg-black/20 yellow:bg-yellow-800 red:bg-red-200 blue:bg-sky-950",

  dividerBg: "bg-gray-200 dark:bg-black/20 yellow:bg-yellow-800 red:bg-red-200 blue:bg-sky-950",
}
