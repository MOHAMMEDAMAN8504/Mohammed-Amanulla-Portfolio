import {
  mobile,
  backend,
  web,
  fullstack,
  github,
  deloitte,
  genai,
  pentagon,
  udemy,
  ash_project,
  hirebridge_project,
  rubiks_project,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
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
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Bachelor of Engineering - Computer Science (Data Science)",
    company_name: "Rao Bahadur Y. Mahabaleswarappa Engineering College, Ballari",
    icon: web,
    iconBg: "#1d1836",
    date: "2022 - Present",
    points: [
      "CGPA - 8.79",
    ],
  },
  {
    title: "Pre-University (PU)",
    company_name: "Narayana PU College, Ballari",
    icon: mobile,
    iconBg: "#1d1836",
    date: "2020 - 2022",
    points: [
      "Percentage - 79.66%",
    ],
  },
  {
    title: "High School",
    company_name: "Vivekananda High School, Ballari",
    icon: backend,
    iconBg: "#1d1836",
    date: "2020",
    points: [
      "Percentage - 84.80%",
    ],
  },
];


const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Pentagon Space Private Limited",
    icon: pentagon,
    iconBg: "#1d1836",
    date: "Feb 2026 – Present",
    points: [
      "Worked with Java programming and object-oriented programming (OOP) concepts to strengthen software development fundamentals and build efficient application logic.",
      "Debugged applications, optimized code performance, and improved program accuracy through structured testing, troubleshooting, and problem-solving techniques.",
      "Gained hands-on exposure to web technologies including HTML while understanding frontend structure, application workflows, and backend integration concepts.",
      "Collaborated on development tasks involving Java, SQL, and software engineering practices while continuously improving coding standards, logical thinking, and development efficiency.",
    ],
  },
  {
    title: "Ash: A Personalized AI Desktop Assistant",
    company_name: "Ash (Academic Project)",
    icon: web,
    iconBg: "#1d1836",
    date: "Academic Project",
    points: [
      "Developed a Windows-based AI desktop assistant integrating voice interaction, desktop automation, real-time search, and intelligent task execution within a fast and interactive chat-style interface.",
      "Implemented features such as application control, browser automation, reminders, customizable assistant behavior, and AI-powered responses to improve productivity and user interaction.",
      "Integrated an AI-powered image generation feature capable of generating images dynamically based on user prompts, enhancing creativity and interactive assistant capabilities.",
      "Optimized runtime performance, command handling, and speech-based interactions while designing a modular architecture for seamless integration between AI functionalities and system operations."
    ],
  },
  {
    title: "HireBridge - Job Portal System",
    company_name: "HireBridge (Internship Project)",
    icon: fullstack,
    iconBg: "#1d1836",
    date: "Internship Project",
    points: [
      "Built a full-stack job portal platform enabling recruiters and job seekers to manage applications, job postings, authentication, and profile workflows through a responsive web-based interface.",
      "Designed and implemented backend functionality using Java and SQL, including database operations, user management, job filtering, and role-based access handling.",
      "Developed responsive frontend interfaces using HTML, CSS, and JavaScript to deliver an intuitive user experience with streamlined navigation and application workflows.",
      "Focused on scalable database design, clean UI interactions, and efficient system integration while improving usability, data handling, and platform reliability across different modules."
    ],
  },
  {
    title: "3D Rubik’s Cube Solver",
    company_name: "Personal Project",
    icon: backend,
    iconBg: "#1d1836",
    date: "Personal Project",
    points: [
      "Developed an interactive 3D Rubik’s Cube Solver application capable of visualizing cube states, processing user inputs, and generating solving sequences using algorithmic cube-solving logic.",
      "Implemented cube manipulation mechanics, color mapping, and interactive 3D visualization to provide an engaging and intuitive experience for understanding cube movements and solving patterns.",
      "Worked on optimizing solving algorithms, improving move accuracy, and handling cube-state validation while ensuring smooth rendering and responsive interactions within the application.",
      "Combined mathematical logic, problem-solving, and interactive UI design to create a functional software project demonstrating algorithmic thinking and software engineering skills."
    ],
  }
];


const extracurricular = [
  {
    title: "Software Development Internship",
    type: "Pentagon Space Private Limited",
    icon: pentagon,
    iconBg: "#1d1836",
    date: "Feb 2026 - Present",
    points: [
      "Strengthened core software development fundamentals and application logic using Java and OOP.",
      "Gained exposure to web application workflows, database handling, and backend integration concepts."
    ],
    credential: "https://drive.google.com/file/d/1cVNen_z1t1LWnEkZBqM97fNWY8qzj1tV/view?usp=sharing",
  },
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    type: "Forage",
    icon: deloitte,
    iconBg: "#1d1836",
    date: "Jan 2026",
    points: [
      "Completed a virtual experience program simulating realistic data analysis and dashboard tasks.",
      "Gained exposure to corporate data frameworks, logical analysis, and performance optimization."
    ],
    credential: "https://drive.google.com/file/d/1Ur1Q2F9s63oXnuluutj4p_NfA3uPN9mj/view?usp=drive_link",
  },
  {
    title: "Generative AI Workshop",
    type: "Workshop",
    icon: genai,
    iconBg: "#1d1836",
    date: "2026",
    points: [
      "Learned core foundation concepts of Generative AI, Large Language Models (LLMs), and prompt design.",
      "Explored prompt engineering and practical strategies for developing AI-assisted productivity tools."
    ],
    credential: "https://drive.google.com/file/d/12ndyCxfkuC7s4g81LZztDBBd3aNgLskm/view?usp=sharing",
  },
  {
    title: "Java Programming Certificate",
    type: "Udemy",
    icon: udemy,
    iconBg: "#1d1836",
    date: "2026",
    points: [
      "Mastered Java fundamentals, Object-Oriented Programming (OOP) architectures, and data structures.",
      "Implemented clean code logic and modular software development strategies."
    ],
    credential: "https://drive.google.com/file/d/1qyHU7RX-dKV60DWPBnrtHmiBUP-DKClP/view?usp=drive_link",
  },
];

const projects = [
  {
    name: "Ash – A Personalized AI Desktop Assistant",
    description:
      "Developed a Windows-based AI desktop assistant integrating voice interaction, desktop automation, real-time search, and intelligent task execution within a fast and interactive chat-style interface. Implemented features such as application control, browser automation, reminders, customizable assistant behavior, and AI-powered responses to improve productivity and user interaction. Integrated an AI-powered image generation feature capable of generating images dynamically based on user prompts, enhancing creativity and interactive assistant capabilities. Optimized runtime performance, command handling, and speech-based interactions while designing a modular architecture for seamless integration between AI functionalities and system operations.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "Automation",
        color: "pink-text-gradient",
      },
    ],
    image: ash_project,
    source_code_link: "https://github.com/MOHAMMEDAMAN8504",
    live_project_link: "https://github.com/MOHAMMEDAMAN8504",
  },
  {
    name: "HireBridge – Job Portal System",
    description:
      "Built a full-stack job portal platform enabling recruiters and job seekers to manage applications, job postings, authentication, and profile workflows through a responsive web-based interface. Designed and implemented backend functionality using Java and SQL, including database operations, user management, job filtering, and role-based access handling. Developed responsive frontend interfaces using HTML, CSS, and JavaScript to deliver an intuitive user experience with streamlined navigation and application workflows. Focused on scalable database design, clean UI interactions, and efficient system integration while improving usability, data handling, and platform reliability across different modules.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS/JS",
        color: "pink-text-gradient",
      },
    ],
    image: hirebridge_project,
    source_code_link: "https://github.com/MOHAMMEDAMAN8504",
    live_project_link: "https://github.com/MOHAMMEDAMAN8504",
  },
  {
    name: "3D Rubik’s Cube Solver",
    description:
      "Developed an interactive 3D Rubik’s Cube Solver application capable of visualizing cube states, processing user inputs, and generating solving sequences using algorithmic cube-solving logic. Implemented cube manipulation mechanics, color mapping, and interactive 3D visualization to provide an engaging and intuitive experience for understanding cube movements and solving patterns. Worked on optimizing solving algorithms, improving move accuracy, and handling cube-state validation while ensuring smooth rendering and responsive interactions within the application. Combined mathematical logic, problem-solving, and interactive UI design to create a functional software project demonstrating algorithmic thinking and software engineering skills.",
    tags: [
      {
        name: "3D Algorithms",
        color: "blue-text-gradient",
      },
      {
        name: "Interactive UI",
        color: "green-text-gradient",
      },
      {
        name: "Logic Optimization",
        color: "pink-text-gradient",
      },
    ],
    image: rubiks_project,
    source_code_link: "https://github.com/MOHAMMEDAMAN8504",
    live_project_link: "https://github.com/MOHAMMEDAMAN8504",
  },
];
export {
  services,
  experiences,
  extracurricular,
  projects,
  education
};
