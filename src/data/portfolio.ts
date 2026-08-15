/**
 * ============================================================
 *  CENTRAL PORTFOLIO DATA FILE
 * ============================================================
 *  Edit ALL your personal information here.
 *  Every section of the website reads from this file,
 *  so you never need to touch the React components.
 *
 *  HOW TO EDIT:
 *  - Replace placeholder text like "Add your email" with real info.
 *  - Replace image paths like "/profile.jpg" with your own images
 *    (place files in the /public folder).
 *  - Replace "/resume.pdf" with your resume PDF (place in /public).
 *  - Add / remove items from the arrays (skills, projects, etc.)
 *    to control what shows on the website.
 * ============================================================
 */

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'instagram';
}

export interface Skill {
  name: string;
  description: string;
  /** Proficiency 0–100 (editable) */
  proficiency: number;
  /** Lucide icon name from lucide-react */
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl: string;
  liveDemoUrl: string;
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  image: string;
  credentialUrl: string;
  verifyUrl: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  year: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface HeroStat {
  label: string;
  value: string;
}

export const personalInfo = {
  name: 'Luvkush Saini',
  role: 'Data Analyst | BCA Student',
  tagline: 'Turning Data Into Meaningful Insights',
  about:
    'I am a BCA student aspiring to build a career in Data Analytics. I enjoy working with data, finding meaningful patterns and transforming raw information into clear business insights. I am developing practical skills in SQL, Excel, Python, Power BI, Power Query, DAX and Tableau.',
  aboutLong:
    'BCA student passionate about Data Analytics, transforming raw data into meaningful insights using SQL, Excel, Python, Power BI and Tableau.',
  careerGoal:
    'To become a skilled Data Analyst who helps businesses make smarter, data-driven decisions by turning complex data into clear, actionable insights.',
  email: 'lovekushsaini033@gmail.com',
phone: '+91 8433107497',
location: 'Modinagar, Ghaziabad, Uttar Pradesh, India',
  profileImage: '/profile.jpg',
  resume: '/Resume.pdf', 
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'Add your GitHub URL', icon: 'github' },
 
  {
  label: 'LinkedIn',
  url: 'https://www.linkedin.com/in/luvkush-saini-750338404',
  icon: 'linkedin'
},
{ 
  label: 'Instagram', 
  url: 'https://www.instagram.com/love14389542/', 
  icon: 'instagram' 
},  
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats: HeroStat[] = [
  { label: 'SQL', value: '85%' },
  { label: 'Python', value: '75%' },
  { label: 'Power BI', value: '80%' },
  { label: 'Excel', value: '90%' },
  { label: 'Tableau', value: '70%' },
];

export const skills: Skill[] = [
  {
    name: 'SQL',
    description: 'Querying databases with filtering, joins, aggregation and subqueries.',
    proficiency: 85,
    icon: 'Database',
  },
  {
    name: 'MySQL',
    description: 'Relational database design and management using MySQL.',
    proficiency: 80,
    icon: 'Database',
  },
  {
    name: 'Python',
    description: 'Data analysis and scripting with Pandas, NumPy and Matplotlib.',
    proficiency: 75,
    icon: 'Code2',
  },
  {
    name: 'Excel',
    description: 'Advanced formulas, pivot tables and interactive dashboards.',
    proficiency: 90,
    icon: 'Table',
  },
  {
    name: 'Power BI',
    description: 'Building interactive business intelligence dashboards and reports.',
    proficiency: 80,
    icon: 'BarChart3',
  },
  {
    name: 'Power Query',
    description: 'Data extraction, transformation and cleaning (ETL) workflows.',
    proficiency: 78,
    icon: 'Filter',
  },
  {
    name: 'DAX',
    description: 'Data Analysis Expressions for custom calculations in Power BI.',
    proficiency: 72,
    icon: 'Calculator',
  },
  {
    name: 'Tableau',
    description: 'Creating visual analytics and interactive data stories.',
    proficiency: 70,
    icon: 'PieChart',
  },
  {
    name: 'Data Visualization',
    description: 'Turning raw data into clear, meaningful visual representations.',
    proficiency: 82,
    icon: 'LineChart',
  },
  {
    name: 'Statistics',
    description: 'Descriptive and inferential statistics for data-driven decisions.',
    proficiency: 70,
    icon: 'Sigma',
  },
  {
    name: 'Data Cleaning',
    description: 'Handling missing values, outliers and inconsistent data formats.',
    proficiency: 80,
    icon: 'Sparkles',
  },
  {
    name: 'Exploratory Data Analysis',
    description: 'Discovering patterns, trends and relationships in datasets.',
    proficiency: 78,
    icon: 'Search',
  },
];

export const projects: Project[] = [
  {
    title: 'Sales Performance Dashboard',
    description:
      'Interactive dashboard for analyzing sales, revenue, orders and business performance.',
    technologies: ['Power BI', 'Excel', 'Power Query', 'DAX'],
    features: ['Revenue trends', 'Order analysis', 'KPI tracking', 'Interactive filters'],
    image: '/projects/project-1.svg',
    githubUrl: 'Add your GitHub URL',
    liveDemoUrl: 'Add your live demo URL',
  },
  {
    title: 'Data Analysis with Python',
    description:
      'Data cleaning, exploration and visualization project using Python.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    features: ['Data cleaning', 'Statistical analysis', 'Visualizations', 'Insights'],
    image: '/projects/project-2.svg',
    githubUrl: 'Add your GitHub URL',
    liveDemoUrl: 'Add your live demo URL',
  },
  {
    title: 'SQL Data Analysis',
    description:
      'SQL-based analysis using filtering, joins, aggregation, subqueries and analytical queries.',
    technologies: ['SQL', 'MySQL'],
    features: ['Complex joins', 'Aggregations', 'Subqueries', 'Analytical queries'],
    image: '/projects/project-3.svg',
    githubUrl: 'Add your GitHub URL',
    liveDemoUrl: 'Add your live demo URL',
  },
  {
    title: 'Excel Analytics Dashboard',
    description:
      'Interactive Excel dashboard for business data analysis.',
    technologies: ['Excel', 'Pivot Tables', 'Power Query'],
    features: ['Pivot tables', 'Charts', 'Slicers', 'KPI summary'],
    image: '/projects/project-4.svg',
    githubUrl: 'Add your GitHub URL',
    liveDemoUrl: 'Add your live demo URL',
  },
];

export const certifications: Certification[] = [
  {
    title: 'SQL Certification',
    organization: 'SQL',
    date: '2026',
    image: '/certificates/Certificate_SC-3520D72FAA.png',
    credentialUrl: '/certificates/Certificate_SC-3520D72FAA.png',
    verifyUrl: '/certificates/Certificate_SC-3520D72FAA.png',
  },
  {
    title: 'Python Certification',
    organization: 'Python',
    date: '2026',
    image: '/certificates/python_certi.png',
    credentialUrl: '/certificates/python_certi.png',
    verifyUrl: '/certificates/python_certi.png',
  },
  {
    title: 'Power BI Certification',
    organization: 'Microsoft Power BI',
    date: '2026',
    image: '/certificates/PowerBI_Certi.png',
    credentialUrl: '/certificates/PowerBI_Certi.png',
    verifyUrl: '/certificates/PowerBI_Certi.png',
  },
  {
    title: 'Certificate',
    organization: 'Professional Certification',
    date: '2026',
    image: '/certificates/Certificate_SC-3520D72FAA.png',
    credentialUrl: '/certificates/Luvkush-Saini-Certificate.pdf',
    verifyUrl: '/certificates/Luvkush-Saini-Certificate.pdf',
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Applications',
    institution: 'Dr. KN Modi Institute of Engineering & Technology — CCS University',
    year: '2024 – 2027',
    description:
      'BCA student focused on programming, databases, data analytics and business intelligence.',
  },
];


export const experience: ExperienceItem[] = [
  {
    role: 'Add your role',
    organization: 'Add organization',
    period: 'Add period',
    description: 'Add a brief description of your experience.',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Add your achievement',
    description: 'Add a brief description of this achievement.',
  },
];
