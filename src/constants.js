import profileImage from './assets/Draj.jpeg'
import secondaryImage from './assets/about.jpg'
import { FaCode, FaBrain, FaMobileAlt, FaDatabase, FaTools, FaCertificate, FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi2'

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'work', label: 'Work' },
  { id: 'certificate', label: 'Certificate' },
  { id: 'contact', label: 'Contact' },
]

export const heroStats = [
  { label: 'Experience focus', value: 'AI + Full Stack' },
  { label: 'Core stack', value: 'Python, Java, React' },
  { label: 'Location', value: 'Bengaluru' },
]

export const education = [
  {
    year: '2021 - 2024',
    title: 'B-E in Computer Science',
    place: 'R V College of Engineering, Bengaluru',
    details: 'Focused on advanced algorithms, machine learning, and software engineering foundations.'
  },
  {
    year: '2018 - 2021',
    title: 'Diploma in Computer Science',
    place: 'R V College of Engineering, Bengaluru',
    details: 'Built strong fundamentals in programming, web technologies, and database systems.'
  }
]

export const experience = [
  {
    year: '2025 · 6 months',
    title: 'Python Developer Intern',
    company: 'Iclonis Tech Solutions, Bengaluru',
    details: 'Developed and integrated LLM models and built Django REST APIs for AI-powered applications.',
    tags: ['Python', 'Django', 'LLM', 'REST API', 'AI Integrations']
  },
  {
    year: '2021 - 2022',
    title: 'Junior Software Engineer',
    company: 'Iclonis Tech Solution, Bengaluru',
    details: 'Developed laboratory management software using C, .NET, and SQL Server in WinForms environments.',
    tags: ['C', '.NET', 'SQL Server', 'WinForms']
  }
]

export const skills = [
  { title: 'Languages', icon: FaCode, items: ['Java', 'Python', 'C', 'JavaScript', 'SQL', 'HTML/CSS'] },
  { title: 'Mobile Development', icon: FaMobileAlt, items: ['Android Studio', 'Java', 'Firebase', 'XML', 'Flutter'] },
  { title: 'AI & Data', icon: FaBrain, items: ['LLM Fine-tuning', 'Deep Learning', 'TensorFlow', 'Data Extraction', 'Python Libraries'] },
  { title: 'Backend & Databases', icon: FaDatabase, items: ['Django', 'Flask', '.NET', 'MySQL', 'Firebase', 'MongoDB'] },
  { title: 'Tools & Frameworks', icon: FaTools, items: ['Git', 'Visual Studio', 'React JS', 'Bootstrap', 'MVC'] },
  { title: 'Certifications', icon: FaCertificate, items: ['Java OOP - Udemy', 'Programming in Java - NPTEL', 'LeetCode Profile'] },
]

export const projects = [
  {
    category: 'Android + AI',
    title: 'Mango Fruit Disease Detection',
    description: 'Android application using deep learning to identify mango fruit diseases and support faster diagnosis workflows.',
    image: profileImage,
    stack: ['Android Studio', 'Java', 'Firebase', 'Python', 'Deep Learning'],
  },
  {
    category: 'Android',
    title: 'Learning Management System',
    description: 'A mobile-first learning platform for accessing study materials with Firebase-backed content management.',
    image: secondaryImage,
    stack: ['Android Studio', 'Java', 'Firebase', 'XML'],
  },
  {
    category: 'AI / ML',
    title: 'LLM Integration with PDF Processing',
    description: 'Fine-tuned LLM workflows and processed complex PDFs to improve document understanding and downstream automation.',
    image: profileImage,
    stack: ['Python', 'LLM', 'Django', 'API'],
  },
]

export const workHighlights = [
  {
    icon: HiOutlineSparkles,
    title: 'Product-minded design',
    description: 'A cleaner visual system, stronger spacing, and clearer hierarchy make the portfolio feel more custom and professional.'
  },
  {
    icon: FaCode,
    title: 'Modular React structure',
    description: 'Each section is split into reusable JSX components so the codebase is easier to edit, scale, and maintain.'
  },
  {
    icon: FaExternalLinkAlt,
    title: 'Better presentation',
    description: 'Projects, education, experience, and contact information are arranged to help recruiters scan your strengths quickly.'
  }
]

export const certificates = [
  'Java OOP - Udemy',
  'Programming in Java - NPTEL',
  'Problem Solving Practice - codechef',
]

export const certificateUrls = {
  javaCertificate: 'https://www.udemy.com/certificate/UC-JAVA-OOP',
  pythonCertificate: 'https://nptel.ac.in/certificate/PYTHON',
}

export const contacts = [
  { icon: FaEnvelope, title: 'Email', value: 'devarajnaik098@gmail.com', href: 'mailto:devarajnaik098@gmail.com' },
  { icon: FaPhoneAlt, title: 'Phone', value: '+91 94492 06912', href: 'tel:+91 94492 06912' },
  { icon: FaLinkedinIn, title: 'LinkedIn', value: 'linkedin.com/in/devaraj-naik', href: 'https://www.linkedin.com/in/devaraj-naik-3882b52a8' },
  { icon: FaGithub, title: 'GitHub', value: 'github.com/devaraj2809', href: 'https://github.com/devaraj2809' },
]

export { profileImage, secondaryImage }
