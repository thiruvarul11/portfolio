export interface ProjectItem {
  id: string
  name: string
  category: string
  event?: string
  role?: string
  date?: string
  description: string
  tags?: string[]
  liveUrl?: string
  githubUrl: string
  githubButtonText?: string
}

export interface CertificationItem {
  id: string
  title: string
  issuer?: string
  date?: string
  category: 'cloud' | 'programming' | 'aiml' | 'database' | 'automation' | 'vocational'
  credentialUrl?: string
}

export interface SkillCategory {
  title: string
  description: string
  iconName: 'code' | 'brain' | 'terminal' | 'git' | 'users'
  skills: {
    name: string
    highlight?: boolean
  }[]
}

export interface AchievementItem {
  id: string
  title: string
  category: string
  iconName: 'trophy' | 'folder' | 'brain' | 'award' | 'users' | 'target'
  badge?: string
  role?: string
  bullets: string[]
  link?: {
    text: string
    url: string
    isExternal?: boolean
  }
  projectLinks?: {
    name: string
    url: string
  }[]
}

export interface StrengthItem {
  id: string
  title: string
  iconName: 'lightbulb' | 'users' | 'bookOpen' | 'cpu'
  description: string
}

export interface PortfolioData {
  personal: {
    name: string
    monogram: string
    title: string
    heroHeadline: string
    heroSubheadline: string
    summary: string
    email: string
    phone: string
    location: string
    status: string
    github: string
    linkedin: string
    avatarUrl: string
    resumeUrl: string
    resumeAvailable: boolean
  }
  education: {
    degree: string
    institution: string
    location: string
    interests: string
  }
  skills: SkillCategory[]
  achievements: AchievementItem[]
  strengths: StrengthItem[]
  projects: ProjectItem[]
  certifications: CertificationItem[]
  leadership: {
    role: string
    organization: string
    membership: string
    description: string
  }
  languages: {
    name: string
    proficiency?: string
  }[]
  navLinks: {
    name: string
    href: string
  }[]
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Thiruvarul K",
    monogram: "TK",
    title: "AI & ML Student | Aspiring Software Developer",
    heroHeadline: "Building Intelligent Solutions Through AI & Software Development.",
    heroSubheadline:
      "Building practical software solutions through programming, AI and machine learning.",
    summary:
      "I am an Artificial Intelligence and Machine Learning undergraduate with foundational skills in Python, Java, SQL, AI/ML concepts, and web application development. I am interested in software development and AI/ML internship opportunities, with project experience in backend and full-stack development.",
    email: "thiruvarulkathiresan@gmail.com",
    phone: "+91 6374317136",
    location: "Kumbakonam, Tamil Nadu, India",
    status: "Open to Internship Opportunities",
    github: "https://github.com/thiruvarul11",
    linkedin: "https://www.linkedin.com/in/thiruvarul-k-651375319/",
    avatarUrl: "/avatar.png",
    resumeUrl: "/resume.pdf",
    resumeAvailable: true,
  },
  education: {
    degree: "B.E. Artificial Intelligence and Machine Learning",
    institution: "Rajalakshmi Institute of Technology, Chennai",
    location: "Tamil Nadu, India",
    interests: "Software Development & AI/ML",
  },
  skills: [
    {
      title: "Programming",
      description: "Core languages for building software logic, data operations, and backend services.",
      iconName: "code",
      skills: [
        { name: "Python", highlight: true },
        { name: "Java", highlight: true },
        { name: "SQL Basics", highlight: false },
      ],
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Theoretical frameworks and applied concepts in artificial intelligence.",
      iconName: "brain",
      skills: [
        { name: "Artificial Intelligence Fundamentals", highlight: true },
        { name: "Machine Learning Fundamentals", highlight: true },
      ],
    },
    {
      title: "Development",
      description: "Application development paradigms, server architecture, and full-stack flow.",
      iconName: "terminal",
      skills: [
        { name: "Web Application Development", highlight: true },
        { name: "Backend Development", highlight: true },
        { name: "Full-Stack Development Concepts", highlight: false },
      ],
    },
    {
      title: "Tools & Version Control",
      description: "Essential workflow systems for code collaboration and repository management.",
      iconName: "git",
      skills: [
        { name: "GitHub", highlight: true },
      ],
    },
    {
      title: "Professional Skills",
      description: "Interpersonal engineering disciplines crucial for high-performing software teams.",
      iconName: "users",
      skills: [
        { name: "Problem Solving", highlight: true },
        { name: "Communication", highlight: false },
        { name: "Team Collaboration", highlight: true },
      ],
    },
  ],
  achievements: [
    {
      id: "sih-2025",
      title: "Smart India Hackathon 2025",
      category: "National Hackathon",
      badge: "SIH 2025",
      iconName: "trophy",
      role: "Backend Developer",
      bullets: [
        "Project: Jharkhand Connect",
        "Contributed to backend functionality and server-side logic.",
        "Supported component integration and team collaboration.",
      ],
      link: {
        text: "View SIH Repository",
        url: "https://github.com/thiruvarul11/jharkhand-safari-sparks-65",
        isExternal: true,
      },
    },
    {
      id: "software-projects",
      title: "Software Development Projects",
      category: "Applied Engineering",
      badge: "3 Repositories",
      iconName: "folder",
      bullets: [
        "Jharkhand Connect — tourism web application.",
        "NAYAN-X — Smart India Hackathon project.",
        "Urimai-Kaavalan — software development project.",
      ],
      projectLinks: [
        {
          name: "Jharkhand Connect",
          url: "https://github.com/thiruvarul11/jharkhand-safari-sparks-65",
        },
        {
          name: "NAYAN-X",
          url: "https://github.com/sabari060307/NAYAN-X",
        },
        {
          name: "Urimai-Kaavalan",
          url: "https://github.com/Prem-dsa/Urimai-Kaavalan",
        },
      ],
    },
    {
      id: "aiml-learning",
      title: "AI & ML Learning",
      category: "Academic & Practical Growth",
      badge: "Active Focus",
      iconName: "brain",
      bullets: [
        "Artificial intelligence fundamentals.",
        "Machine learning foundations.",
        "Continued learning through technical courses and projects.",
      ],
    },
    {
      id: "certifications-milestone",
      title: "Certifications & Continuous Learning",
      category: "Credentials & Training",
      badge: "9 Certifications",
      iconName: "award",
      bullets: [
        "AWS Academy Graduate – Machine Learning Foundations.",
        "Java Training – EduPyramids, SINE, IIT Bombay.",
        "Additional networking, MongoDB, ensemble learning, AWS, and UiPath certifications.",
      ],
      link: {
        text: "Explore All Certifications",
        url: "#certifications",
        isExternal: false,
      },
    },
    {
      id: "leadership-collaboration",
      title: "Leadership & Collaboration",
      category: "Extracurricular Stewardship",
      badge: "Campus Leadership",
      iconName: "users",
      bullets: [
        "Editor, NSS Club, Rajalakshmi Institute of Technology.",
        "Active NSS Club Member.",
        "Emphasize collaboration, communication, and contributing to group activities.",
      ],
      link: {
        text: "View Leadership Details",
        url: "#leadership",
        isExternal: false,
      },
    },
    {
      id: "career-objective",
      title: "Career Objective",
      category: "Future Trajectory",
      badge: "Open to Roles",
      iconName: "target",
      bullets: [
        "I am actively seeking AI/ML and Software Development internship opportunities where I can apply my programming foundations, contribute to meaningful projects, and grow through collaboration with experienced engineers.",
      ],
      link: {
        text: "Connect via Email",
        url: "#contact",
        isExternal: false,
      },
    },
  ],
  strengths: [
    {
      id: "problem-solver",
      title: "Problem Solver",
      iconName: "lightbulb",
      description:
        "Interested in breaking down problems, applying logical thinking, and developing practical software solutions.",
    },
    {
      id: "collaborative-team-member",
      title: "Collaborative Team Member",
      iconName: "users",
      description:
        "Experience collaborating with project teammates and contributing to shared development goals.",
    },
    {
      id: "continuous-learner",
      title: "Continuous Learner",
      iconName: "bookOpen",
      description:
        "Building my technical foundation through certifications, programming practice, and AI/ML-related learning.",
    },
    {
      id: "aiml-enthusiast",
      title: "AI & Software Development Enthusiast",
      iconName: "cpu",
      description:
        "Interested in artificial intelligence, machine learning, and creating useful software applications.",
    },
  ],
  projects: [
    {
      id: "jharkhand-connect",
      name: "Jharkhand Connect",
      category: "Tourism Web Application",
      event: "Smart India Hackathon 2025",
      role: "Backend Developer",
      date: "September 2025",
      description:
        "Contributed to a tourism-focused web application through backend development, server-side logic, component integration, and collaborative project work.",
      tags: ["Backend Development", "Server-Side Logic", "Smart India Hackathon 2025", "Team Collaboration"],
      githubUrl: "https://github.com/thiruvarul11/jharkhand-safari-sparks-65",
      githubButtonText: "View Project on GitHub",
      liveUrl: "",
    },
    {
      id: "nayan-x",
      name: "NAYAN-X",
      category: "Smart India Hackathon Project",
      event: "Smart India Hackathon",
      role: "Project Contributor",
      description:
        "An AI-related hackathon project with source code and implementation maintained in the project repository.",
      tags: ["Smart India Hackathon", "Software Engineering", "AI Hackathon", "GitHub"],
      githubUrl: "https://github.com/sabari060307/NAYAN-X",
      githubButtonText: "Explore Repository",
      liveUrl: "",
    },
    {
      id: "urimai-kaavalan",
      name: "Urimai-Kaavalan",
      category: "Software Development Project",
      role: "Developer",
      description:
        "A software development project demonstrating practical programming, problem-solving, and collaborative source-code development.",
      tags: ["Software Development", "Problem Solving", "Version Control", "GitHub"],
      githubUrl: "https://github.com/Prem-dsa/Urimai-Kaavalan",
      githubButtonText: "Explore Repository",
      liveUrl: "",
    },
  ],
  certifications: [
    {
      id: "aws-ml-foundations",
      title: "AWS Academy Graduate – Machine Learning Foundations",
      issuer: "AWS Academy",
      date: "January 2026",
      category: "aiml",
      credentialUrl: "",
    },
    {
      id: "java-edupyramids",
      title: "Java Training – EduPyramids, SINE, IIT Bombay",
      issuer: "EduPyramids, SINE, IIT Bombay",
      date: "February 2026",
      category: "programming",
      credentialUrl: "",
    },
    {
      id: "ensemble-learning",
      title: "Ensemble Learning and Ensemble Learning Techniques",
      date: "April 2026",
      category: "aiml",
      credentialUrl: "",
    },
    {
      id: "computer-networking",
      title: "Master Computer Networking – Scaler Topics",
      issuer: "Scaler Topics",
      date: "August 2026",
      category: "cloud",
      credentialUrl: "",
    },
    {
      id: "mongodb-rag-ai",
      title: "MongoDB: Fundamentals, RAG Applications, AI Agents, Vector Search, and AI Strategy",
      issuer: "MongoDB",
      date: "August 2026",
      category: "database",
      credentialUrl: "",
    },
    {
      id: "aws-cloud-foundations",
      title: "AWS Cloud Foundation",
      issuer: "Amazon Web Services",
      category: "cloud",
      credentialUrl: "",
    },
    {
      id: "uipath-automation-dev",
      title: "UiPath Certified Professional – Automation Developer Associate (2024.10)",
      issuer: "UiPath",
      date: "2024.10",
      category: "automation",
      credentialUrl: "",
    },
    {
      id: "typewriting-junior",
      title: "Typewriting Junior Grade – First Class",
      category: "vocational",
      credentialUrl: "",
    },
    {
      id: "typewriting-senior",
      title: "Typewriting Senior Grade – First Class",
      category: "vocational",
      credentialUrl: "",
    },
  ],
  leadership: {
    role: "Editor, NSS Club",
    organization: "Rajalakshmi Institute of Technology",
    membership: "Active NSS Club Member",
    description:
      "Serving as Editor for the NSS Club at Rajalakshmi Institute of Technology, leading documentation, communications, and editorial responsibilities while actively participating in community service and social welfare initiatives.",
  },
  languages: [
    { name: "Tamil", proficiency: "Native / Fluent" },
    { name: "English", proficiency: "Professional Working Proficiency" },
  ],
  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ],
}
