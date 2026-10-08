// TODO: Add portfolio projects data.
export const projects = [
  {
    id: "conversational-library-manager",
    title: "Conversational Library Manager",
    description:
      "An AI-powered conversational library management system that allows users to interact with the application in English and Hindi.",
    category: "Full Stack",
    technologies: ["Python", "Groq Llama3 API", "MySQL", "JavaScript"],
    features: [
      "English and Hindi conversational interactions",
      "AI-powered chatbot interface",
      "Book inventory management",
      "Member management",
      "Transaction tracking",
      "Optimized SQL queries",
    ],
    image: `${import.meta.env.BASE_URL}images/library-management-system-project-card.png`,
    github: "https://github.com/Ahesanali20/library-management-system",
    live: "",
    featured: true,
  },

  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    description:
      "A modern responsive e-commerce application built with React, featuring product listing, state management, cart functionality, and a scalable component architecture.",
    category: "React",
    technologies: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Tailwind CSS",
    ],
    features: [
      "Product listing",
      "Product details",
      "Cart management",
      "Global state management",
      "API integration",
      "Responsive UI",
    ],
    image: `${import.meta.env.BASE_URL}images/ecommerce-store-hero-banner.png`,
    github: "https://github.com/Ahesanali20/E-Commerce-Redux-Toolkit.git",
    live: "https://celadon-granita-aa2af4.netlify.app/",
    featured: true,
  },

  {
    id: "developer-portfolio",
    title: "Developer Portfolio",
    description:
      "A modern developer portfolio built with React to showcase projects, technical skills, experience, education, and professional information.",
    category: "React",
    technologies: [
      "React",
      "React Router",
      "Redux Toolkit",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "Motion",
    ],
    features: [
      "Responsive design",
      "Dark and light theme",
      "Project filtering",
      "Dynamic project details",
      "GitHub repository integration",
      "Contact form validation",
      "Reusable component architecture",
      "Motion animations",
    ],
    image: `${import.meta.env.BASE_URL}images/developer-portfolio-preview.png`,
    github: "https://github.com/Ahesanali20/Ahesanali-portfolio.git",
    live: "https://ahesanali-kadiwala-portfolio.netlify.app",
    featured: true,
  },
];
