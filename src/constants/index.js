// src/constants/index.js

// Import general assets directly from src/assets (if they are here)
import {
  backend,
  frontend,
  web,
  html,
  javascript,
  typescript,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  fluttertech,
  AWS,
  mysql,
  python,
  androidstudio,
  tableau,
  threejs,
  figma,
  wizztech,
  tp,
  technoindiauniversity,
  skiva,
  flutter,
  globe,
  whizbee,
  github,
  fallbacktech,
} from "../assets";

// Import the 'flashalgo' asset separately to avoid conflicts
import flashalgo from "../assets/flashalgo.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Frontend Developer", icon: frontend },
  { title: "Backend Developer", icon: backend },
  { title: "MERN Stack Developer", icon: web },
  { title: "Flutter Developer", icon: flutter },
];

const technologies = [
  { name: "HTML 5", icon: html?.default || html || fallbacktech },
  { name: "CSS 3", icon: css?.default || css || fallbacktech },
  { name: "JavaScript", icon: javascript?.default || javascript || fallbacktech },
  { name: "TypeScript", icon: typescript?.default || typescript || fallbacktech },
  { name: "React JS", icon: reactjs?.default || reactjs || fallbacktech },
  { name: "Tailwind CSS", icon: tailwind?.default || tailwind || fallbacktech },
  { name: "Node JS", icon: nodejs?.default || nodejs || fallbacktech },
  { name: "MongoDB", icon: mongodb?.default || mongodb || fallbacktech },
  { name: "Flutter", icon: fluttertech?.default || fluttertech || fallbacktech },
  { name: "AWS", icon: AWS?.default || AWS || fallbacktech },
  { name: "MySQL", icon: mysql?.default || mysql || fallbacktech },
  { name: "Python", icon: python?.default || python || fallbacktech },
  { name: "Android Studio", icon: androidstudio?.default || androidstudio || fallbacktech },
  { name: "Tableau", icon: tableau?.default || tableau || fallbacktech },
];

const experiences = [
  {
    title: "B.Tech in Computer Science",
    company_name: "Techno India University",
    icon: technoindiauniversity,
    iconBg: "#E6DEDD",
    date: "May 2022 - April 2025",
    type: "education",
    points: [
      "Graduated with an 8.0 CGPA.",
      "Specialized in Database Management, Web Development, Computer Networks, Artificial Intelligence (AI), Machine Learning (ML), Natural Language Processing (NLP), and SAP.",
      "Achieved AWS CL2 CO2 Certification and participated in the Techno India Hackathon.",
      "Authored a research paper on a College Management System, acknowledged by the HOD and Dean.",
      "Built cross-platform mobile apps using React Native with REST API & native module integrations.",
    ],
  },
  {
    title: "Diploma in Computer Science",
    company_name: "Techno India University",
    icon: technoindiauniversity,
    iconBg: "#E6DEDD",
    date: "May 2019 - May 2022",
    type: "education",
    points: [
      "Achieved an 8.0 CGPA.",
      "Developed practical skills in software development methodologies.",
      "Explored principles of operating systems and computer architecture.",
      "Participated in various practical lab sessions, enhancing problem-solving abilities.",
      "Developed an AI-powered Travel Booking System (NLP integration) that won the Best Project Award.",
      "Created multiple case studies demonstrating practical application of theoretical concepts.",
    ],
  },
  {
    title: "Business Analyst Intern (Remote)",
    company_name: "Globe Private Limited",
    icon: globe,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Feb 2023 (remote)",
    type: "work",
    points: [
      "Performed in-depth data analysis using Excel to derive actionable business insights within a petrochemical operations context.",
      "Assisted in streamlining workflows by integrating Azure-based solutions to support remote collaboration and data management.",
      "Developed interactive dashboards and web interfaces using React.js to visualize performance KPIs for internal stakeholders.",
      "Collaborated with cross-functional teams including product managers and engineers to gather and refine business requirements.",
      "Prepared analytical reports and presented findings to senior management to support strategic planning and decision-making."
    ],
  },
  {
    title: "Chatbot Development Intern",
    company_name: "Teleperformance",
    icon: tp,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - June 2023",
    type: "work",
    points: [
      "Designed and built intelligent chatbots integrated with CRM systems to automate customer service workflows.",
      "Applied NLP techniques and Python-based AI models to enhance the chatbot's contextual understanding and response accuracy.",
      "Reduced average customer response time by 42% through optimization of chatbot logic and conversation flows.",
      "Conducted A/B testing to evaluate user engagement and iteratively improved chatbot performance based on real-time data.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "WizzTech",
    icon: wizztech,
    iconBg: "#E6DEDD",
    date: "April 2024 - Feb 2025 (Remote)",
    type: "work",
    points: [
      "Operated as a freelance Full Stack Developer for 11 months, focusing on the EduTech and Medical sectors.",
      "Led development of internal dashboards using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Optimized back-end APIs and database queries to enhance application performance.",
      "Successfully completed 8+ projects, significantly enhancing team productivity.",
      "Gave clear presentations to 3 clients, successfully selling project ideas.",
      "Personally handled 4 end-to-end projects and was a key part of the front-end team for 4+ additional projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Anamitra's dedication to academic excellence and her innovative approach to problem-solving truly set her apart. Her research contributions were consistently insightful and well-articulated.",
    name: "Dr. Rituparna Bhattacharya",
    designation: "HOD",
    company: "Techno India University",
    image: "https://placehold.co/128x128/FF00FF/FFFFFF?text=RB", // Placeholder for Dr. Rituparna Bhattacharya
  },
  {
    testimonial:
      "Working with Anamitra at WizzTech was a pleasure. Her full-stack development skills are robust, and she consistently delivered high-quality solutions that significantly contributed to our project successes.",
    name: "Mr. Ramendu Karmakar",
    designation: "Co-founder",
    company: "WizzTech",
    image: "https://placehold.co/128x128/00FFFF/000000?text=RK", // Placeholder for Mr. Ramendu Karmakar
  },
  {
    testimonial:
      "Anamitra's work on our chatbot development project at Teleperformance was exceptional. Her ability to integrate NLP and improve response accuracy directly impacted our customer service efficiency.",
    name: "Ms. Sonam Gupta",
    designation: "Assistant Manager",
    company: "Teleperformance",
    image: "https://placehold.co/128x128/FFFF00/000000?text=SG", // Placeholder for Sonam Gupta
  },
];
const projects = [
  {
    name: "FlashAlgo",
    description:
      "FlashAlgo is a cutting-edge AI-powered crypto trading landing page built with modern web technologies. It showcases the vision of automating cryptocurrency investments using artificial intelligence.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: flashalgo,
    source_code_link: "https://github.com/Anamitraroy22/FlashAlgo",
    live_demo_link: "https://flashalgo-ai.netlify.app",
  },
  {
    name: "WhizBee",
    description:
      "Micro learning website for kids. Todays Knowledge builds rulers of tommorow ",
    tags: [
      { name: "Next.js, #Framer Motion", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "Formspree", color: "blue-text-gradient" },
      { name: "Figma, #netlify", color: "pink-text-gradient" },
    ],
    image: whizbee,
    source_code_link: "https://github.com/Anamitraroy22/WhizBee.git",
    live_demo_link: "https://whizzbee.netlify.app/",
  },
  {
    name: "Skiva",
    description:
      "Skiva - Your Gateway to Extraordinary Journeys.Welcome to Skiva, where the pursuit of travel transcends the ordinary.",
    tags: [
      { name: "React.js,#Vite,#Versal", color: "blue-text-gradient" },
      { name: "TypeScript,#Swiper.js", color: "green-text-gradient" },
      { name: "Tailwind CSS,#Framer Motion", color: "pink-text-gradient" },
    ],
    image: skiva,
    source_code_link: "https://github.com/Anamitraroy22/Skiva.git",
    live_demo_link: "https://skiva.vercel.app/",
  },
];

// New array for research papers
const researchPapers = [
  {
    title: "College Management System Research Report",
    authors: "Anamitra Roy",
    publication: "Final Year Project Report, Techno India University",
    abstract: "This research report details the development and implementation of a comprehensive college management system. It covers the system architecture, key features for administration and student management, and the underlying technologies used to enhance operational efficiency.",
    link: "https://github.com/Anamitraroy22/College-Management-System-Research-Report-.git", // Your GitHub link
    // image: "https://placehold.co/128x128/000000/FFFFFF?text=Paper1" // Removed image as it's not directly provided
  },
  {
    title: "Optimizing Travel Booking Systems with NLP and Predictive Analytics",
    authors: "Anamitra Roy",
    publication: "Techno India University Research Symposium 2022",
    abstract: "An in-depth study on integrating Natural Language Processing (NLP) and predictive analytics to revolutionize travel booking platforms. This research explores intelligent recommendation engines and dynamic pricing models to enhance user experience and operational efficiency.",
    link: "https://example.com/your-paper-2.pdf",
    image: "https://placehold.co/128x128/000000/FFFFFF?text=Paper2"
  },
  {
    title: "Secure Data Transmission in IoT Networks using Blockchain",
    authors: "Anamitra Roy, A. Sharma",
    publication: "Journal of Network Security (JNS)",
    abstract: "This paper investigates the application of blockchain technology to enhance the security and integrity of data transmission in Internet of Things (IoT) environments. It proposes a decentralized framework to mitigate common vulnerabilities and ensure data authenticity.",
    link: "https://example.com/your-paper-3.pdf",
    image: "https://placehold.co/128x128/000000/FFFFFF?text=Paper3"
  }
];


export { services, technologies, experiences, testimonials, projects, researchPapers };