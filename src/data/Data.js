import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import Home from "../components/Home.jsx";
import Skills from "../components/Skills.jsx";
import Projectes from "../components/Projectes.jsx";
import Contact from "../components/Contact.jsx";
import website from "../assets/Screenshot 2024-01-17 214755.png";
import twitter from "../assets/Screenshot 2024-01-17 215559.png";
import youtube from "../assets/Screenshot 2024-01-20 080354.png";
import record from "../assets/reg data.png";
import portfolio from "../assets/Screenshot 2024-01-17 223035.png";
import elevators from "../assets/bandicam 2024-08-09 10-47-03-669.jpg";
import E_store from "../assets/bandicam 2024-08-09 10-51-00-310.jpg";
import to_do_list from "../assets/bandicam 2024-08-09 10-51-56-700.jpg";

export const navLinks = [
  {
    title: "Home",
    id: "#",
    element: <Home />,
    icon: <FaHome />,
  },
  {
    title: "Projectes",
    id: "Projectes",
    element: <Projectes />,
    icon: <GrProjects />,
  },
  {
    title: "Skills",
    id: "Skills",
    element: <Skills />,
    icon: <GiSkills />,
  },
  {
    title: "Contact",
    id: "Contact",
    element: <Contact />,
    icon: <IoMdContacts />,
  },
];

export const progects = [
  {
    title: "my-website",
    src: website,
    tecnology: "tailwindCss , js , fontawesome",
    href: "https://my-website-gilt-eta.vercel.app/",
  },
  {
    title: "twitter",
    src: twitter,
    tecnology: "tailwindCss , js , fontawesome",
    href: "https://my-website-gilt-eta.vercel.app/projects/twitter/index.html",
  },
  {
    title: "portfolio",
    src: portfolio,
    tecnology: "css , js , fontawesome , AOS",
    href: "https://my-website-gilt-eta.vercel.app/projects/portfolio-css/index.html",
  },
  {
    title: "youtube",
    src: youtube,
    tecnology: "tailwindCss , js , material-icons",
    href: "https://my-website-gilt-eta.vercel.app/projects/youtube/src/index.html",
  },
  {
    title: "Recording",
    src: record,
    tecnology: "css , js ",
    href: "https://my-website-gilt-eta.vercel.app/projects/Recording%20data/index.html",
  },
  {
    title: "elevators",
    src: elevators,
    tecnology: "css , js , AOS , fontawesome",
    href: "https://elevators-mu.vercel.app/",
  },
  {
    title: "E-store",
    src: E_store,
    tecnology: "bootstrap , vue , vueX , fontawesome",
    href: "https://the-store-drab.vercel.app/desc",
  },
  {
    title: "to do list",
    src: to_do_list,
    tecnology: "tailwindCss , jQuery",
    href: "https://todo-list-jquery-alpha.vercel.app/",
  },
];

export const languages = [
  {
    title: "html",
    width: "95%",
    color: "#f22",
  },
  {
    title: "css",
    width: "95%",
    color: "#22f",
  },
  {
    title: "tailwind",
    width: "95%",
    color: "cyan",
  },
  {
    title: "bootstrap",
    width: "85%",
    color: "purple",
  },
  {
    title: "sass",
    width: "90%",
    color: "#f59",
  },
  {
    title: "js",
    width: "90%",
    color: "#f92",
  },
  {
    title: "jQuery",
    width: "85%",
    color:
      "repeating-linear-gradient(115deg, #1301FE, #1301FE 4px, #FEEEEC 8px)",
  },
  {
    title: "vue",
    width: "95%",
    color: "#07bc46",
  },
  {
    title: "react",
    width: "80%",
    color: "#09f",
  },
  {
    title: "git",
    width: "70%",
    color: "red",
  },
  {
    title: "gitHub",
    width: "75%",
    color: "#333",
  },
];
