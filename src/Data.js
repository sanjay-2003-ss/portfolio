import {
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiRedux, 
  SiGithub, SiPostman, SiNodedotjs, SiExpress, SiMongodb, SiMongoose, 
  SiNpm, SiGit, SiVercel, SiVite, SiSass, SiRender, SiMysql
} from 'react-icons/si'

// Skill Categories for better organization
export const skillCategories = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  language: "Language",
  tool: "Tool",
  deployment: "Deployment"
}

export const skillData = [
  {
    icons: SiReact,
    skill: "REACT",
    desc: "Frontend",
    color: '#61DAFB',
    level: "Advanced",
    yearsOfExperience: 2
  },
  {
    icons: SiNodedotjs,
    skill: "Node.JS",
    desc: "Backend",
    color: '#339933',
    level: "Intermediate",
    yearsOfExperience: 2
  },
  {
    icons: SiExpress,
    skill: "Express",
    desc: "Backend",
    color: "#fff",
    level: "Intermediate",
    yearsOfExperience: 2
  },
  {
    icons: SiMongodb,
    skill: "MongoDB",
    desc: "Database",
    color: "#47A248",
    level: "Intermediate",
    yearsOfExperience: 1
  },
  {
    icons: SiMongoose,
    skill: "Mongoose",
    desc: "Database",
    color: "#880000",
    level: "Intermediate",
    yearsOfExperience: 1
  },
  {
    icons: SiMysql,
    skill: "SQL",
    desc: "Database",
    color: "#4479A1",
    level: "Beginner",
    yearsOfExperience: 1
  },
  {
    icons: SiHtml5,
    skill: "HTML",
    desc: "Frontend",
    color: "#E34F26",
    level: "Advanced",
    yearsOfExperience: 3
  },
  {
    icons: SiCss3,
    skill: "CSS",
    desc: "Frontend",
    color: "#1572B6",
    level: "Advanced",
    yearsOfExperience: 3
  },
  {
    icons: SiTailwindcss,
    skill: "TailwindCSS",
    desc: "Frontend",
    color: "#06B6D4",
    level: "Advanced",
    yearsOfExperience: 2
  },
  {
    icons: SiJavascript,
    skill: "JavaScript",
    desc: "Language",
    color: "#F7DF1E",
    level: "Advanced",
    yearsOfExperience: 3
  },
  {
    icons: SiRedux,
    skill: "REDUX",
    desc: "Frontend",
    color: "#764ABC",
    level: "Intermediate",
    yearsOfExperience: 1
  },
  {
    icons: SiGit,
    skill: "Git",
    desc: "Tool",
    color: "#F05032",
    level: "Intermediate",
    yearsOfExperience: 2
  },
  {
    icons: SiGithub,
    skill: "GitHub",
    desc: "Tool",
    color: "#fff",
    level: "Intermediate",
    yearsOfExperience: 2
  },
  {
    icons: SiNpm,
    skill: "NPM",
    desc: "Tool",
    color: "#CB3837",
    level: "Intermediate",
    yearsOfExperience: 2
  },
  {
    icons: SiVite,
    skill: "VITE",
    desc: "Tool",
    color: "#646CFF",
    level: "Intermediate",
    yearsOfExperience: 1
  },
  {
    icons: SiPostman,
    skill: "Postman",
    desc: "Tool",
    color: "#FF6C37",
    level: "Intermediate",
    yearsOfExperience: 2
  },
  {
    icons: SiVercel,
    skill: "Vercel",
    desc: "Deployment",
    color: "#fff",
    level: "Intermediate",
    yearsOfExperience: 1
  },
  {
    icons: SiRender,
    skill: "Render",
    desc: "Deployment",
    color: "#46E3B7",
    level: "Beginner",
    yearsOfExperience: 1
  },
]

export const projectData = [
  {
    image: "/images/bulkmail.png",
    title: "Bulk Mail",
    desc: "A full-stack email automation platform that enables users to send personalized bulk emails efficiently with SendGrid integration.",
    skills: ["React.js", "TailwindCSS", "Node.js", "Express", "MongoDB", "Mongoose", "SendGrid", "API Integration", "REST APIs", "UI Development"],
    github:"https://github.com/sanjay-2003-ss/bulkmail-frontend",
    link: "https://bulkmail-frontend-lemon-five.vercel.app",
    featured: true,
    status: "Live",
    date: "2024",
    category: "Full-Stack",
    highlights: [
      "SendGrid API integration for reliable email delivery",
      "Bulk email management with MongoDB",
      "Responsive and modern UI with TailwindCSS"
    ]
  },
  {
    image: "/images/netflix.png",
    title: "Netflix Login Clone",
    desc: "A pixel-perfect Netflix login page clone focusing on UI accuracy, responsiveness, and modern styling techniques.",
    skills: ["React.js", "TailwindCSS", "Node.js", "Express", "API Integration", "REST APIs", "UI Development"],
    github: "https://github.com/sanjay-2003-ss/Netflix-login-F-B",
    link: "https://netflix-login-f-b.vercel.app",
    featured: true,
    status: "Live",
    date: "2024",
    category: "Frontend",
    highlights: [
      "Pixel-perfect design replication",
      "Fully responsive across all devices",
      "Modern authentication UI patterns"
    ]
  },
  {
    image: "/images/weatherapp.png",
    title: "Weather Report",
    desc: "A real-time weather forecasting application that displays current weather conditions, forecasts, and climate data for any searched location.",
    skills: ["React.js", "TailwindCSS", "API Integration", "REST APIs", "UI Development"],
    github: "https://github.com/sanjay-2003-ss/Weather-Report",
    link: "https://weather-report-beryl.vercel.app",
    featured: true,
    status: "Live",
    date: "2024",
    category: "Frontend",
    highlights: [
      "Real-time weather data integration",
      "Location-based weather search",
      "Clean and intuitive user interface"
    ]
  },
  {
    image: "/images/movieapp.png",
    title: "Movie App",
    desc: "A comprehensive movie discovery application that fetches and displays movie data with posters, ratings, and detailed information using TMDB API.",
    skills: ["HTML", "TailwindCSS", "React.js", "API Integration", "UI Development"],
    github: "https://github.com/sanjay-2003-ss/Movie-Card",
    link: "https://movie-card-lemon.vercel.app",
    featured: false,
    status: "Live",
    date: "2024",
    category: "Frontend",
    highlights: [
      "TMDB API integration",
      "Dynamic movie search and filtering",
      "Responsive card-based layout"
    ]
  },
  {
    image: "/images/task.png",
    title: "Task Management",
    desc: "A productivity-focused task management application featuring CRUD operations to create, update, delete, and organize daily tasks efficiently.",
    skills: ["HTML", "TailwindCSS", "React.js", "JSX", "UI Development", "Local Storage"],
    github: "https://github.com/sanjay-2003-ss/Task-Management",
    link: "https://task-management-git-main-sanjay-ss-projects-7cec4c36.vercel.app",
    featured: false,
    status: "Live",
    date: "2024",
    category: "Frontend",
    highlights: [
      "Full CRUD functionality",
      "Persistent data storage",
      "Task prioritization and organization"
    ]
  },
  {
    image: "/images/Apple.png",
    title: "Apple Clone",
    desc: "A responsive clone of Apple's website homepage showcasing premium design principles, smooth animations, and attention to typography details.",
    skills: ["HTML", "TailwindCSS", "React.js", "JSX", "UI Development"],
    github: "https://github.com/sanjay-2003-ss/Apple-Clone-Website",
    link: "https://apple-clone-website-mu.vercel.app/",
    featured: false,
    status: "Live",
    date: "2023",
    category: "Frontend",
    highlights: [
      "Premium UI/UX design",
      "Smooth scroll animations",
      "Typography-focused layout"
    ]
  },
  {
    image: "/images/nostra.png",
    title: "Nostra",
    desc: "A modern corporate-style website featuring professional layouts, smooth navigation, and engaging content sections for business services.",
    skills: ["HTML", "TailwindCSS", "UI Development", "JavaScript", "DOM Manipulation"],
    github: "https://github.com/sanjay-2003-ss/Nostra_E-Commerce_Website",
    link: " https://sanjay-2003-ss.github.io/Nostra_E-Commerce_Website/",
    featured: false,
    status: "Live",
    date: "2023",
    category: "Frontend",
    highlights: [
      "Corporate-grade design",
      "Interactive UI elements",
      "Smooth navigation experience"
    ]
  },
  {
    image: "/images/greenden.png",
    title: "Greenden",
    desc: "A nature-inspired landing page for a plant and gardening brand featuring clean design, product showcases, and eco-friendly aesthetics.",
    skills: ["HTML", "TailwindCSS", "UI Development", "JavaScript"],
    github: "https://github.com/sanjay-2003-ss/Greenden-tailwind",
    link: "https://sanjay-2003-ss.github.io/Greenden-tailwind/",
    featured: false,
    status: "Live",
    date: "2023",
    category: "Frontend",
    highlights: [
      "Nature-inspired design theme",
      "Product catalog layout",
      "Eco-friendly color palette"
    ]
  },
  {
    image: "/images/trip.png",
    title: "TriAdvisor",
    desc: "A travel review platform UI allowing users to explore destinations, hotels, and attractions with comprehensive ratings and user reviews.",
    skills: ["HTML", "CSS", "UI Development", "JavaScript"],
    github: "https://github.com/sanjay-2003-ss/Tripadvisor-Clone",
    link: " https://sanjay-2003-ss.github.io/Tripadvisor-Clone/",
    featured: false,
    status: "Live",
    date: "2023",
    category: "Frontend",
    highlights: [
      "Review and rating system UI",
      "Destination browsing interface",
      "User-friendly navigation"
    ]
  },
  {
    image: "/images/udemy.png",
    title: "Udemy Clone",
    desc: "A responsive clone of Udemy's online course platform featuring course listings, ratings, and an intuitive learning interface.",
    skills: ["HTML", "CSS", "UI Development"],
    github: "https://github.com/sanjay-2003-ss/Udemy",
    link: " https://sanjay-2003-ss.github.io/Udemy/",
    featured: false,
    status: "Live",
    date: "2023",
    category: "Frontend",
    highlights: [
      "Course catalog layout",
      "Rating and review display",
      "Responsive grid system"
    ]
  }
]

// Utility functions for filtering and sorting
export const getProjectsByCategory = (category) => {
  return projectData.filter(project => project.category === category)
}

export const getFeaturedProjects = () => {
  return projectData.filter(project => project.featured)
}

export const getSkillsByCategory = (category) => {
  return skillData.filter(skill => skill.desc === category)
}

export const getProjectsBySkill = (skillName) => {
  return projectData.filter(project => 
    project.skills.some(skill => 
      skill.toLowerCase().includes(skillName.toLowerCase())
    )
  )
}

// Stats calculator
export const getPortfolioStats = () => {
  return {
    totalProjects: projectData.length,
    featuredProjects: projectData.filter(p => p.featured).length,
    totalSkills: skillData.length,
    liveProjects: projectData.filter(p => p.status === "Live").length,
    categories: [...new Set(projectData.map(p => p.category))],
    skillCategories: [...new Set(skillData.map(s => s.desc))]
  }
}