import { FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface Template {
  title: string;
  description: string;
  icon: IconType;
}

const templates: Template[] = [
  {
    title: "HTML/CSS",
    description: "Vanilla HTML/CSS playground",
    icon: FaHtml5,
  },
  {
    title: "React",
    description: "React playground using Vite",
    icon: FaReact,
  },
  {
    title: "Node.js",
    description: "Node.js 14 playground",
    icon: FaNodeJs,
  },
  {
    title: "Python",
    description: "Python 3 playground",
    icon: FaPython,
  },
];

export default templates;
