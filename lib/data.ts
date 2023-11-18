import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import three from "@/public/3.png";
import one from "@/public/1.png";
import two from "@/public/2.png";
import four from "@/public/4.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Executive Frontend Developer",
    location: "Agarwal Packers And Movers Ltd, Goregaon",
    description:
      "I currently work as a frontend developer. My stack includes React, Next.js, JavaScript, Bootsrap, Css, Html, Express and MongoDB.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-05 - Present",
  },
  {
    title: "Front-End Developer Internship",
    location: "Agarwal Packers And Movers Ltd, Goregaon",
    description:
      "I worked as a front-end developer Intern for 2 months.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-02 - 2023-05",
  },
  {
    title: "Web Developer Intern",
    location: "V-art Services Pvt Ltd, Andheri",
    description:
      "I'm was here work as a web developer intern.",
    icon: React.createElement(FaReact),
    date: "2022-12 - 2023-02",
  },
  {
    title: "Executive",
    location: "Eternal Jewels, Kandivali",
    description:
      "Order processing & follow up, coordination and excel reports.",
    icon: React.createElement(CgWorkAlt),
    date: "2020-09 - 2022-10",
  },
  {
    title: "Associate",
    location: "Aura Jewels, Kandivali",
    description:
      "Order processing & Quotations, & other reports",
    icon: React.createElement(FaReact),
    date: "2019-07 - 2020-08",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce Store",
    description:
      "This is a role based store admin and user, Admin can create delete update products, orders and users, the other side user can login, buy products, give reviews to products",
    tags: ["React", "Express", "MongoDB", "Html-Css", "Stripe", "Cloudinary"],
    // imageUrl: corpcommentImg,
  },
  {
    title: "Xrypto",
    description:
      "xcrypto  shows us real time data in different currencies, Link: https://cryptonics-rgak3k8wf-shiv-sawant.vercel.app/ ",
    tags: ["React", "Chakra-ui", "Html-Css", "Chart-js", "Coingecko-api", "axios"],
    imageUrl: one,
  },
  {
    title: "Vudio",
    description:
      "Vudio web application is a video player where we can upload and play video. Link: https://videohub-rho.vercel.app/",
    tags: ["React", "Html-Css"],
    imageUrl: three,
  },
  {
    title: "Natours",
    description:
      "Natours is an online tour booking demo website. Link: https://natours-8ugrn4nps-shiv-sawant.vercel.app/",
    tags: ["Html", "Sass",],
    imageUrl: two,
  },
  {
    title: "Omnifood",
    description:
      "Omnifood is a new premium food delivery demo website, Link: https://omnifood-65tzdmjxe-shiv-sawant.vercel.app/",
    tags: ["React", "Html-Css"],
    imageUrl: four,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Github",
  "Bootstrap",
  "Firebase",
  "Dsa",
  "MongoDB",
  "Redux",
  "Express",
  "Vercel",
  "Framer Motion",
  "Postman",
] as const;