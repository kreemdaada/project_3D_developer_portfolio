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
  meta,
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
    title: "Web Developer",
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
    title: "Content Creator",
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

];

const experiences = [
  {
    title: "MERN Stuck",
    company_name: " Web App",
    icon: meta,
    iconBg: "#E6DEDD",
    //date: "",
    points: ["Als Webentwickler verfüge ich über Kenntnisse in der Entwicklung und Wartung von Webanwendungen unter Verwendung von React.js und anderen verwandten Technologien."
    ,"Obwohl ich noch keine Berufserfahrung vorweisen kann, bin ich hochmotiviert, mich in ein cross-funktionales Team einzubringen und qualitativ hochwertige Produkte zu erstellen."
    ,"Ich beherrsche die Implementierung von reaktionsfähigem Design und sorge für eine optimale Darstellung in verschiedenen Browsern."
    ,". Zusätzlich bin ich bestrebt, durch regelmäßige Code-Reviews mein Wissen zu erweitern und anderen Entwicklern konstruktives Feedback zu geben.."
    ,
      ],
  },
  {
    title: "",
    icon: meta,
    iconBg: "#E6DEDD",
    //date: " 2021 - 2022",
    points: [
      "Ich bin in Deutschland tätig und bereit, meine Fähigkeiten als Webentwickler einzusetzen, um Ihr Unternehmen zu unterstützen und anspruchsvolle Webanwendungen zu entwickeln und zu pflegen"
      ," Auch ohne spezifische Berufserfahrung bin ich flexibel und bereit, mich in neue Technologien und Frameworks einzuarbeiten, um maßgeschneiderte Lösungen zu schaffen."
      ,"Ich freue mich darauf, eng mit Ihrem Team zusammenzuarbeiten, um hochwertige Produkte zu schaffen, die den Anforderungen und Bedürfnissen Ihrer Kunden gerecht werden.",
    ],
  },
  ,
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kareem proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kareem does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kareem optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Codex-chat-Frag-mich",

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
    image: backend,
    source_code_link: "https://github.com/kreemdaada",
  },
  {
    name: "Simple-Api-CURD",

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
    image: creator,
    source_code_link: "https://github.com/kreemdaada",
  },
  {
    name: "Uber-App",

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
    image: web,
    source_code_link: "https://github.com/kreemdaada",
  },
];

export { services, technologies, experiences, testimonials, projects };
