/**
 * Portfolio Data Configuration
 * Centralized data store for Utkarsh Bhojak
 */

export interface Project {
  id: string;
  title: string;
  shortPitch: string;
  category: 'Machine Learning' | 'FinTech' | 'Web & Systems';
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  metrics: { label: string; value: string }[];
  overview: string;
  keyFeatures: string[];
  impact: string;
}

export interface Certification {
  title: string;
  issuer: string;
  type: string;
}

export interface Milestone {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'Internship' | 'Training' | 'Hackathon';
  tags: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Utkarsh Bhojak",
    title: "Data Science & Computer Science Engineering Student",
    university: "JECRC University",
    tagline: "Building practical solutions in data science, AI, and software development.",
    shortBio: "Student at JECRC University specializing in data science and analytics. Experienced in machine learning models, competitive hackathons, and cloud deployments. Passionate about applying statistical analysis and coding to solve real-world problems, and actively seeking to grow through hands-on technical challenges.",
    email: "utkarsh.bhojak@gmail.com",
    location: "Jaipur / India",
    statusBadge: "Actively seeking Data Science & Software Engineering internships",
    socials: {
      github: "https://github.com/utkarshbhojak",
      githubAlt: "https://github.com/utkarshbhojak-max",
      linkedin: "https://linkedin.com/in/utkarshbhojak",
    },
    heroStats: [
      { label: "Core Specialization", value: "Data Science" },
      { label: "Hackathons Completed", value: "Clash of Coders & INNOVAT" },
      { label: "Cloud Platforms", value: "Railway & Vercel" },
      { label: "Primary Language", value: "Python & SQL" },
    ],
  },

  about: {
    headline: "Transforming raw data into actionable intelligence and production-ready applications.",
    paragraphs: [
      "I am a Computer Science & Data Science engineering student at JECRC University. My focus lies at the crossroads of applied machine learning, statistical modeling, and practical software engineering.",
      "From engineering discrete-event simulations for hospital bed routing to building conditional algorithmic trading systems and optimizing digital analytics for local enterprises, I prioritize building functional, deployed projects over theoretical exercises.",
    ],
    highlights: [
      {
        title: "Applied Machine Learning & Stats",
        description: "Hands-on experience with predictive analytics, data cleaning, feature engineering, and model evaluation.",
      },
      {
        title: "Cloud & Deployment Savvy",
        description: "Deploying production-ready frontends and backends on modern platforms like Vercel, Railway, and GitHub Pages.",
      },
      {
        title: "Competitive Problem Solving",
        description: "Active hackathon competitor (Clash of Coders 3.0, INNOVAT) thriving in high-intensity collaborative environments.",
      },
    ],
  },

  skillsCategories: [
    {
      title: "Core Languages & Systems",
      skills: ["Python", "SQL", "Git / GitHub", "Cloud Deployment (Railway, Vercel)", "Linux / Bash"],
    },
    {
      title: "Data Science & Analytics",
      skills: ["Machine Learning", "Statistical Modeling", "Data Visualization", "Predictive Analytics", "Exploratory Data Analysis (EDA)"],
    },
    {
      title: "Frameworks, Libraries & APIs",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Jupyter Notebooks", "Zerodha Kite API"],
    },
  ],

  projects: [
    {
      id: "hospital-bed-allocation",
      title: "Hospital Bed Allocation Engine",
      shortPitch: "Real-time discrete-event simulation dashboard designed to optimize patient routing based on acuity levels.",
      category: "Machine Learning" as const,
      techStack: ["Python", "NumPy", "Discrete Event Simulation", "Vercel"],
      githubUrl: "https://github.com/utkarshbhojak-max/Hospital-Bed-Allocation-system_01",
      liveUrl: "https://hospital-bed-allocation-system01.vercel.app/",
      metrics: [
        { label: "Constraint Logic", value: "Acuity-based Routing" },
        { label: "Simulation Model", value: "Discrete-Event" },
        { label: "Deployment", value: "Live on Vercel" },
      ],
      overview: "An algorithmic healthcare resource optimization system that simulates acute patient arrival surges and computes optimal patient-to-bed allocation in real time.",
      keyFeatures: [
        "Priority queuing engine based on patient acuity scores",
        "Dynamic overflow routing to minimize wait times under bed scarcity constraints",
        "Interactive web dashboard hosted on Vercel with live capacity metrics",
      ],
      impact: "Enhanced capacity planning efficiency through dynamic overflow routing and priority queuing under strict clinical constraints.",
    },
    {
      id: "automated-trading-bot",
      title: "Automated Algorithmic Trading Bot",
      shortPitch: "Cloud-hosted algorithmic trading system designed to execute conditional market strategies with sub-second execution.",
      category: "FinTech" as const,
      techStack: ["Python", "Zerodha Kite API", "Telegram Bot API", "Railway"],
      githubUrl: "https://github.com/utkarshbhojak-max",
      liveUrl: "https://utkarshbhojak-max.github.io/telegram-bot/",
      metrics: [
        { label: "Order Execution", value: "Continuous GTT" },
        { label: "Broker API", value: "Zerodha Kite" },
        { label: "Cloud Hosting", value: "Railway" },
      ],
      overview: "An automated trading bot integrated with the Zerodha Kite Connect API, monitoring market conditions and placing conditional Good-Till-Triggered (GTT) orders automatically.",
      keyFeatures: [
        "Continuous market price scanning and condition evaluation",
        "Instant push notifications via Telegram Bot integration",
        "Automated stop-loss and target order placement without manual intervention",
      ],
      impact: "Successfully automated low-latency trade execution using continuous GTT conditional orders, eliminating manual chart monitoring.",
    },
    {
      id: "mount-abu-real-estate",
      title: "Local Enterprise Digital Management",
      shortPitch: "Optimized the digital footprint, location data mapping, and local SEO for Mount Abu Real Estate.",
      category: "Web & Systems" as const,
      techStack: ["Google Business Profile", "Local SEO", "Digital Analytics", "Web Architecture"],
      githubUrl: "https://github.com/utkarshbhojak-max",
      liveUrl: "https://utkarshbhojak-max.github.io/MOUNT-ABU-REAL-ESTATE/",
      metrics: [
        { label: "Online Presence", value: "Rank #1 Local Search" },
        { label: "Mapping", value: "Geo-Verified" },
        { label: "Status", value: "Live Production" },
      ],
      overview: "An end-to-end digital optimization project for a regional real estate firm, structuring geographic location data, web portal assets, and business search signals.",
      keyFeatures: [
        "Structured geographic citation and geo-tag mapping",
        "Optimized digital portal with direct property inquiry pathways",
        "Local search engine optimization to capture high-intent inbound clients",
      ],
      impact: "Streamlined online visibility and structured local business location mapping, driving consistent direct inquiries.",
    },
  ] as Project[],

  experience: [
    {
      title: "Data Science Intern",
      organization: "Saiket Systems",
      period: "Internship",
      type: "Internship" as const,
      description: "Completed hands-on data science tasks, focused on model building, data cleaning, exploratory data analysis, and analytical submissions.",
      tags: ["Python", "Data Cleaning", "Machine Learning", "EDA"],
    },
    {
      title: "Trainee",
      organization: "Cognifyz Technologies",
      period: "Training",
      type: "Training" as const,
      description: "Engaged in structured professional training to strengthen foundational programming, statistical analysis, and practical data science workflows.",
      tags: ["Python", "Data Science", "Problem Solving"],
    },
    {
      title: "Hackathon Participant",
      organization: "Clash of Coders 3.0",
      period: "2026",
      type: "Hackathon" as const,
      description: "Collaborated under competitive time pressure to design and develop practical software solutions evaluated on innovation, technical depth, and execution.",
      tags: ["Competitive Coding", "Rapid Prototyping", "Teamwork"],
    },
    {
      title: "Hackathon Participant",
      organization: "INNOVAT",
      period: "2025",
      type: "Hackathon" as const,
      description: "Developed innovative technical concepts addressing real-world problem statements, delivering functional project prototypes and technical presentations.",
      tags: ["Hackathon", "Innovation", "Data-Driven Solutions"],
    },
  ] as Milestone[],

  certifications: [
    {
      title: "AI for Research and Insights",
      issuer: "Coursera",
      type: "Artificial Intelligence",
    },
    {
      title: "Learn NumPy Fundamentals",
      issuer: "Udemy",
      type: "Data Science & Numerical Computing",
    },
    {
      title: "Psychology of Learning",
      issuer: "NPTEL (SWAYAM)",
      type: "Cognitive Science & Pedagogy",
    },
    {
      title: "Leadership and Team Effectiveness",
      issuer: "NPTEL (SWAYAM)",
      type: "Professional Leadership",
    },
    {
      title: "Artificial Intelligence Beginners Guide",
      issuer: "Simplilearn",
      type: "Machine Learning & AI",
    },
    {
      title: "Basics of Python",
      issuer: "UniAthena",
      type: "Core Programming",
    },
  ] as Certification[],
};
