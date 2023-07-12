// Enter all your detials in this file

// Profile Image
import yogesh from "./assets/yogesh.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/e_commerce2.png";
import projectImage2 from "./assets/projects/portfolio.png";
import projectImage3 from "./assets/projects/project3.jpg";

// Enter your Personal Details here
export const personalDetails = {
  name: "Yogesh Kendhale",
  tagline: "I Am A Web Developer",
  img: yogesh,
  about: `Hello , I am Yogesh Kendhale I Have  6+ months experienced in Front End Development and little bit Experience in Backend-Developent also with hands-on experience in identifying web-based user interactions along with designing and implementing highly-responsive user interface components by deploying React concepts. Proficient in translating designs and wireframes into high-quality code, and writing application interface code via JavaScript and React JS workflows. Adept at monitoring and maintaining frontend performance and troubleshooting and debugging the same to bolster overall performance`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/yogesh-kendhale-92449823b/",
  github: "https://github.com/yogi-18",
  twitter: "https://twitter.com/yogesh_kendhale",
  instagram: "https://www.instagram.com/yogesh_kendhale_patil/",
};

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "React Js Developer",
    Company: "Skillhub IT Solutions",
    Location: "Auranagabad",
    Duration: "July 2022 - Present",
  },
  {
    Position: "BCA (Bachelors's in Computer Application)",
    Company: `Apex College Of Computer And Management`,
    Univercity: "Dr. Babasaheb Ambedkar Marathwada University",

    Duration: "2022 - 2025",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "React E-Commerce",
    image: projectImage1,
    description: `The React e-commerce project fetches product data, enables adding and removing items from the cart, and ensures the updated cart is saved in local storage, providing a seamless shopping experience with persistent cart data`,
    techstack: "TailWindCss, React , Fetch API , localStorage",
    previewLink: "http://eccomercereact.netlify.app",
    githubLink: "https://github.com/yogi-18/react_eccomerce",
  },
  {
    title: "Project title 2",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Pesonal Portfolio",
    image: projectImage2,
    description: `I utilized a GitHub template to develop a customized React portfolio, incorporating my preferred modifications. The final version was then hosted on Netlify, enabling easy accessibility and showcasing my work to potential visitors.`,
    techstack: "React, Tailwind , Javascript , Css, Github",
    previewLink: "https://personal-portfoli-three.vercel.app/",
    githubLink: "https://github.com/yogi-18/personal_portfolio",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "yogeshkendhale55@gmail.com",
  phone: "+91 8767441186",
};
