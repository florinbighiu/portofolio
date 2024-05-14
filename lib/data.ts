import ecommergeImg from "@/public/EcomX.png";
import starWarsImg from "@/public/starWars.png"
import employeesImg from "@/public/employeeMadness.png"
import momentumImg from "@/public/screen.png"
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "EcomX",
    description:
      "E-commerce platform, written in React and Spring Boot to provide a seamless and user-friendly experience.",
    tags: ["React", "Java", "Spring", "Tailwind", "PostgreSQL"],
    imageUrl: ecommergeImg,
    url: "https://github.com/florinbighiu/El-proyecte-grande",
  },
  {
    title: "Momentum",
    description:
      "Simple web application to help you manage your schedule with user authentication and organization switcher. Created using React, Spring, PostgreSQL, Javascript.",
    tags: ["React", "JavaScript", "PostgreSQL", "Java", "Spring"],
    imageUrl: momentumImg,
    url: "https://github.com/florinbighiu/manifest-app",
  },
  {
    title: "SWAPI MERN project",
    description:
      "A dynamic web application using the MERN stack that seamlessly integrates with the SWAPI to provide users with information related to the Star Wars universe.",
    tags: ["React", "JavaScript", "MongoDB", "Express", "Node.js"],
    imageUrl: starWarsImg,
    url: "https://github.com/florinbighiu/free-style-mern-project",
  },
  {
    title: "Employees Madness",
    description:
      "Employee Management System using the MERN stack. It provides a robust platform for HR professionals and administrators to efficiently oversee employee information.",
    tags: ["React", "JavaScript", "MongoDB", "Express", "Node.js"],
    imageUrl: employeesImg,
    url: "https://github.com/florinbighiu/the-employee-madness",
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
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Java",
  "Spring",
  "REST",
  "PostgreSQL",
] as const;
