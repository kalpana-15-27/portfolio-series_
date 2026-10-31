/**
 * Central portfolio data for Kalpana Mamella — KALPANA — THE SERIES
 * Sourced directly from verified resume and GitHub repositories.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Kalpana Mamella',
  displayName: 'Kalpana Mamella',
  firstName: 'KALPANA',
  seriesTag: 'THE SERIES',
  originalLabel: 'A MAMELLA ORIGINAL',
  role: 'AI/ML Enthusiast | Software Developer',
  tagline: ['AI/ML Engineering', 'Software Development', 'Full-Stack Solutions'],
  intro:
    'I am a Computer Science and Engineering undergraduate passionate about building intelligent, practical software solutions using artificial intelligence, machine learning, and modern web technologies. I enjoy exploring emerging technologies, developing meaningful projects, and solving real-world problems through innovation and continuous learning.',
  location: 'Anantapur, Andhra Pradesh, India',
  email: 'kalpana150906@gmail.com',
  phone: '6300969489',
  links: {
    linkedin: 'https://www.linkedin.com/in/kalpana-mamella-33381925b',
    github: 'https://github.com/kalpana-15-27',
  },
  resumePdf: '/assets/Kalpana_Mamella_Resume.pdf',
  portrait: {
    src: '/assets/portrait.jpg',
    srcSet: '/assets/portrait.jpg 1x',
    alt: 'Portrait of Kalpana Mamella',
  },
  interests: ['Applied AI', 'Healthcare Technology', 'Software Engineering', 'Problem Solving'],
};

export const education = [
  {
    school: 'Madanapalle Institute of Technology & Science (MITS)',
    place: 'Andhra Pradesh, India',
    degree: 'B.Tech, Computer Science & Engineering',
    period: '2024 – 2028',
    score: 'CGPA 9.69/10',
  },
  {
    school: 'Sri Chaitanya Junior College',
    place: 'Anantapur, Andhra Pradesh',
    degree: 'Intermediate (BIEAP) — MPC',
    period: '2022 – 2024',
    score: '97.8%',
  },
  {
    school: 'Jawahar Bharathi English Medium High School',
    place: 'Anantapur, Andhra Pradesh',
    degree: 'Secondary School Certificate (SSC)',
    period: '2021 – 2022',
    score: '91.17%',
  },
];

export const experience = [
  {
    company: 'CODTECH IT Solutions',
    role: 'Web Application Development Intern',
    place: 'Remote',
    period: '03 Jun 2026 – 29 Jul 2026',
    points: [
      'Collaborated on WayFarer Planner, an AI-powered travel-management web application using HTML, CSS, JavaScript, and Firebase.',
      'Contributed to responsive user interfaces and interactive front-end components for traveller workflows.',
      'Engineered structured Gemini AI prompt workflows and client-side map rendering.',
    ],
  },
  {
    company: 'Microsoft Elevate',
    role: 'Project Intern',
    place: 'Virtual / AICTE',
    period: '20 Jan 2026 – 15 Feb 2026',
    points: [
      'Built a Driver Drowsiness Detection Alarm System using Python 3.13, OpenCV, and Haar cascade classifiers.',
      'Used facial and eye cues to identify drowsiness indicators at 30 FPS and trigger an automated audio alert in the prototype within 0.5s.',
      'Integrated active-stop intervention logic that immediately stops the alert once the driver eyes are detected open.',
    ],
  },
  {
    company: 'Prodigy Infotech',
    role: 'Web Development Intern',
    place: 'Remote',
    period: '2025',
    points: [
      'Completed front-end development tasks including responsive landing page development, interactive stopwatch, Tic-Tac-Toe game, personal portfolio, and weather application.',
      'Applied modern responsive UI practices with clean modular JavaScript and semantic styling.',
    ],
  },
  {
    company: 'ApexPlanet',
    role: 'Cybersecurity Intern',
    place: 'Remote',
    period: '2025',
    points: [
      'Explored security auditing, vulnerability assessment techniques, and network defense fundamentals.',
      'Studied secure application development practices and data isolation safeguards.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'wayfarer-planner',
    title: 'Wayfarer: AI Travel Planner',
    year: '2026',
    genre: 'Generative AI • Travel Tech • Full-Stack',
    logline: 'An AI-powered travel itinerary planner transforming trip preferences into day-by-day plans with Leaflet maps and Google Gemini.',
    stack: ['Node.js', 'Express', 'Google Gemini API', 'Leaflet.js', 'Firebase', 'JavaScript'],
    build: [
      'Three-tier architecture with a stateless Express backend securing the Gemini API key and exposing POST /api/generate-itinerary with structured JSON response schema.',
      'Frontend built in Vanilla JavaScript featuring interactive Leaflet.js maps, dynamic daily itineraries, Firebase authentication, and realtime itinerary synchronization.',
    ],
    features: [
      'AI-generated day-by-day travel itineraries with morning, afternoon, and evening activities',
      'Interactive destination mapping with Leaflet.js & OpenStreetMap coordinate markers',
      'Trip duration (1–14 days), budget (Budget, Balanced, Luxury), and travel-style selection',
      'Firebase Authentication & saved itinerary management with local caching',
      'Mark-as-Visited tracking and share itinerary functionality',
    ],
    metrics: [
      { value: '1–14 Days', label: 'trip duration support' },
      { value: '3-Tier', label: 'secure architecture' },
      { value: '100%', label: 'structured JSON response' },
      { value: '0 Key Leaks', label: 'server-secured API' },
    ],
    github: 'https://github.com/kalpana-15-27/wayfarer',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'ai-recruiter-pro',
    title: 'AI Recruiter Pro',
    year: '2026',
    genre: 'AI • NLP • Full-Stack Development',
    logline: 'An intelligent candidate ranking and matching system comparing resumes with job descriptions using semantic similarity and skill analysis.',
    stack: ['Python', 'FastAPI', 'React', 'Sentence Transformers', 'SQLite', 'Chart.js', 'EmailJS'],
    build: [
      'Engineered candidate and admin portals with real-time resume text extraction from PDF/DOCX files, skill matching, and semantic score calculation.',
      'Implemented recruitment analytics dashboard with Chart.js and automated candidate status notifications via EmailJS.',
    ],
    features: [
      'Multi-format resume text extraction (PDF / DOCX / TXT) via client & backend pipelines',
      'Semantic similarity matching & candidate ranking against job requirements',
      'Skill-gap insights & recruiter analytics dashboard with selection statistics',
      'In-app and EmailJS automated notifications on application status changes',
      'Admin portal with candidate management, job postings, and permission controls',
    ],
    metrics: [
      { value: 'Real-time', label: 'semantic matching' },
      { value: 'Dual-Portal', label: 'candidate & admin' },
      { value: 'Multi-Format', label: 'PDF / DOCX / TXT' },
      { value: 'Automated', label: 'EmailJS status alerts' },
    ],
    github: 'https://github.com/kalpana-15-27/ai-recruiter',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'driver-drowsiness-detection',
    title: 'Driver Drowsiness Detection System',
    year: '2026',
    genre: 'Computer Vision • AI • Road Safety',
    logline: 'A real-time safety application built for Microsoft Elevate that monitors driver alertness via OpenCV Haar Cascades and triggers immediate audio intervention.',
    stack: ['Python 3.13', 'OpenCV', 'Haar Cascades', 'Pygame'],
    build: [
      'Real-time video capture at 30 FPS using OpenCV frontal face and eye Haar Cascade Classifiers to detect eye-closure and microsleep events.',
      'Intelligent state machine triggering automated alarm within 0.5s (15 frames) with active-stop logic that immediately halts alert upon recovery.',
    ],
    features: [
      '30 FPS live webcam facial and eye monitoring',
      'Haar Cascade Classifiers for lightweight edge execution without heavy model files',
      'Automated audio alarm within 0.5 seconds of microsleep',
      'Active-stop intervention instantly silencing audio upon eye reopen',
      'Zero heavy model dependencies for instant portable deployment',
    ],
    metrics: [
      { value: '30 FPS', label: 'real-time video capture' },
      { value: '0.5s', label: 'microsleep response threshold' },
      { value: '15 Frames', label: 'drowsiness state verification' },
      { value: 'Instant', label: 'active-stop recovery' },
    ],
    github: 'https://github.com/kalpana-15-27/driver-drowsiness-detection-system',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'smart-hospital-qos',
    title: 'Smart Hospital QoS — MRI Prioritization',
    year: '2026',
    genre: 'Computer Networks • Healthcare Infrastructure',
    logline: 'A network QoS concept prioritizing emergency, urgent, and routine MRI-related traffic using DSCP/DiffServ and VLAN segmentation.',
    stack: ['Computer Networks', 'DSCP/DiffServ', 'VLAN Segmentation', 'QoS Priority Queuing'],
    build: [
      'Designed network traffic prioritization architecture separating routine hospital traffic from mission-critical emergency MRI diagnostics.',
      'Incorporated packet inspection models, traffic benchmarking, and network topology visualization.',
    ],
    features: [
      'DSCP/DiffServ packet classification for diagnostic streams',
      'VLAN-based network segmentation for critical care units',
      'Emergency priority queuing algorithms preventing diagnostic bottlenecks',
      'Network topology visualization and traffic benchmarking under congestion',
    ],
    metrics: [
      { value: '3 Classes', label: 'emergency, urgent, routine' },
      { value: 'Zero Drop', label: 'priority packet policy' },
      { value: 'VLAN', label: 'segmented isolation' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'oncoready-ai',
    title: 'OncoReady AI — Cancer Care Readiness',
    year: '2026',
    genre: 'Healthcare AI • Clinical Workflow Intelligence',
    logline: 'A healthcare workflow concept to identify care gaps, conflicting clinical records, and delays in oncology patient journeys.',
    stack: ['Healthcare AI', 'NLP', 'Clinical Workflow', 'Care Coordination'],
    build: [
      'Conceptualized a care coordination intelligence system to surface missing clinical notes and treatment timeline delays.',
      'Designed multi-role views for healthcare providers and simplified compassionate dashboards for patients and caregivers.',
    ],
    features: [
      'Care gap & timeline conflict identification across patient journeys',
      'Role-specific healthcare provider and patient/caregiver workflow views',
      'Positioned as care-coordination support without replacing clinical judgment',
      'Compassionate patient journey tracking and readiness indicators',
    ],
    metrics: [
      { value: 'Concept', label: 'research & design stage' },
      { value: 'Patient-First', label: 'coordination focus' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'academic-excellence',
    title: 'Academic Excellence Award & Pragati Scholarship',
    org: 'MITS & National Merit',
    detail: 'Consistently high academic standing with CGPA 9.69/10 in B.Tech CSE; recipient of the prestigious Pragati Merit Scholarship.',
    laurel: 'CGPA 9.69/10',
  },
  {
    id: 'gmocs-web',
    title: '1st Position — Web Development Workshop',
    org: 'GMOCS 2025',
    detail: 'Secured 1st position in the competitive web development hack workshop at GMOCS 2025.',
    laurel: '1st Position',
  },
  {
    id: 'ric-2026',
    title: 'Rashtriya Innovation Challenge 2026',
    org: 'RITH Tirupati',
    detail: 'Team selected at institute level for technological problem-solving in civic and applied technology.',
    laurel: 'Institute Selection',
  },
  {
    id: 'sih',
    title: 'Smart India Hackathon',
    org: 'SIH 2025 & 2026',
    detail: 'Selected at institute level for Smart India Hackathon; active participant across SIH 2025 and 2026 rounds.',
    laurel: 'SIH Selection',
  },
  {
    id: 'impactx',
    title: 'ImpactX Hackathon 2025',
    org: 'National Hackathon',
    detail: 'Participated in high-intensity engineering challenge focused on impactful technology prototypes.',
    laurel: 'Hackathon Finalist',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'NPTEL', name: 'The Joy of Computing using Python (84%, Silver Badge)' },
  { issuer: 'IBM', name: 'Fundamentals of AI' },
  { issuer: 'Oracle', name: 'Oracle Certified Foundations Associate' },
  { issuer: 'Microsoft Elevate', name: 'AICTE Project Internship Credential' },
  { issuer: 'CODTECH IT Solutions', name: 'Web Application Development Internship (Wayfarer)' },
  { issuer: 'Prodigy Infotech', name: 'Web Development Internship Credential' },
  { issuer: 'ApexPlanet', name: 'Cybersecurity Internship Credential' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core programming foundations',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Core Java', mono: 'Jv' },
      { name: 'C', mono: 'C' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent systems & vision',
    skills: [
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'NLP & Semantic Similarity', mono: 'Nl' },
      { name: 'Computer Vision', mono: 'Cv' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'Sentence Transformers', mono: 'St' },
      { name: 'Gemini Generative AI', mono: 'Ge' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Frontend',
    subtitle: 'Modern interfaces & workflows',
    skills: [
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
      { name: 'JavaScript (ES6+)', mono: 'Js' },
      { name: 'React fundamentals', mono: 'Re' },
    ],
  },
  {
    id: 'backend_db',
    title: 'Backend & Databases',
    subtitle: 'APIs & persistent storage',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Firebase Realtime DB', mono: 'Fb' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'SQLite', mono: 'Sl' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'tools_networking',
    title: 'Tools & Networking',
    subtitle: 'Engineering environment & protocols',
    skills: [
      { name: 'Git & GitHub', mono: 'Gt' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'VLAN Concepts', mono: 'Vl' },
      { name: 'DSCP/DiffServ QoS', mono: 'Qo' },
      { name: 'Claude Code & Cursor', mono: 'Ai' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Theoretical foundations',
    skills: [
      { name: 'Data Structures', mono: 'Ds' },
      { name: 'Algorithms', mono: 'Al' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Driver Drowsiness Detection System', 'AI Recruiter Pro', 'NPTEL Joy of Computing (84%)'],
  'Core Java': ['Academic Coursework at MITS', 'Object-Oriented Programming'],
  C: ['CS Fundamentals', 'Academic Coursework'],
  JavaScript: ['WayFarer AI Travel Planner', 'Prodigy Infotech Internship', 'GMOCS 1st Place'],
  'Machine Learning': ['AI Recruiter Pro', 'IBM Fundamentals of AI', 'Wayfarer Planner'],
  'NLP & Semantic Similarity': ['AI Recruiter Pro', 'Sentence Transformers (all-MiniLM-L6-v2)'],
  'Computer Vision': ['Driver Drowsiness Detection System (Haar Cascades, 30 FPS)'],
  OpenCV: ['Driver Drowsiness Detection System', 'Microsoft Elevate Internship'],
  FastAPI: ['AI Recruiter Pro backend architecture'],
  'Node.js': ['Wayfarer AI Planner Express backend'],
  'Express.js': ['Wayfarer AI Planner REST API'],
  'Firebase Realtime DB': ['Wayfarer AI Travel Planner authentication & cloud sync'],
  'React fundamentals': ['AI Recruiter Pro candidate & admin portal', 'Portfolio Series'],
  SQL: ['Database Management Systems at MITS', 'AI Recruiter Pro SQLite database'],
  'Git & GitHub': ['All public repositories on github.com/kalpana-15-27'],
  'DSCP/DiffServ QoS': ['Smart Hospital QoS Prioritization Project'],
  'Computer Networks': ['Smart Hospital QoS', 'Core CS curriculum at MITS'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2021 – 2024',
    synopsis: 'Academic excellence through high school and intermediate years at Sri Chaitanya Junior College, Anantapur.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Academic Stepping Stone',
        description: 'Secondary School Certificate at Jawahar Bharathi High School — graduating with 91.17%.',
        tags: ['SSC', '91.17%', 'Anantapur'],
        runtime: '2021 – 2022',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The MPC High Achiever',
        description: 'Board of Intermediate Education (BIEAP), MPC at Sri Chaitanya Junior College, Anantapur — scoring 97.8%.',
        tags: ['Intermediate', '97.8%', 'Sri Chaitanya'],
        runtime: '2022 – 2024',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Computer Science',
    period: '2024 – Present',
    synopsis: 'B.Tech in Computer Science & Engineering at Madanapalle Institute of Technology & Science (MITS).',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Scholar',
        description: 'B.Tech Computer Science & Engineering at MITS — achieving an outstanding CGPA of 9.69/10.',
        tags: ['B.Tech CSE', 'MITS', 'CGPA 9.69'],
        runtime: '2024 – 2028',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Merit Scholar',
        description: 'Recipient of the Academic Excellence Award and Pragati Merit Scholarship for consistent performance.',
        tags: ['Academic Excellence', 'Pragati Scholarship'],
        runtime: 'Honors',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Joy of Computing',
        description: 'Completed NPTEL Joy of Computing using Python with 84% score and Silver Badge recognition.',
        tags: ['NPTEL Silver', 'Python', '84%'],
        runtime: 'NPTEL Certification',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Internships & Prototyping',
    period: '2025 – 2026',
    synopsis: 'Transforming knowledge into production software through internships and engineering prototypes.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The AI Travel Engineer',
        description: 'Web Application Development Intern at CODTECH IT Solutions — collaborating on Wayfarer AI Travel Planner.',
        tags: ['CODTECH', 'Wayfarer', 'Gemini AI', 'Firebase'],
        runtime: 'Jun – Jul 2026',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'The Vision Researcher',
        description: 'Project Intern at Microsoft Elevate — designing a real-time Driver Drowsiness Detection System with OpenCV Haar Cascades.',
        tags: ['Microsoft Elevate', 'OpenCV', 'Computer Vision'],
        runtime: 'Jan – Feb 2026',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'Frontend & Interactive Web',
        description: 'Web Development Intern at Prodigy Infotech — completing responsive applications and landing interfaces.',
        tags: ['Prodigy Infotech', 'Responsive UI', 'JavaScript'],
        runtime: 'Prodigy Infotech',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'The Originals',
    period: '2026',
    synopsis: 'Major engineering productions — Wayfarer AI Planner, AI Recruiter Pro, and real-time vision safety.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Wayfarer: AI Travel Planner',
        description: 'Generative AI trip itinerary generation with Gemini API, interactive Leaflet maps, and Firebase sync.',
        tags: ['Gemini AI', 'Leaflet.js', 'Express', 'Firebase'],
        runtime: 'Production 2026',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'AI Recruiter Pro',
        description: 'Semantic candidate-job matching, resume text extraction, recruiter dashboard, and automated notifications.',
        tags: ['FastAPI', 'Sentence Transformers', 'React'],
        runtime: 'Production 2026',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'Driver Drowsiness Alert System',
        description: 'Real-time eye monitoring, 30 FPS facial tracking, and 0.5s audio alert intervention with active-stop logic.',
        tags: ['Python', 'OpenCV', 'Haar Cascades', 'Pygame'],
        runtime: 'Production 2026',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now Streaming',
    synopsis: 'Applied AI, Smart Hospital QoS networks, and intelligent clinical workflow explorations.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Smart Hospital QoS & OncoReady',
        description: 'Architecting emergency MRI network prioritization and compassionate healthcare care-readiness workflows.',
        tags: ['Healthcare AI', 'Network QoS', 'DiffServ', 'Oncology'],
        runtime: 'In Development',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Academic Standing', title: 'CGPA 9.69/10', detail: 'B.Tech CSE at MITS • Pragati Merit Scholar', palette: crimson },
  { label: 'The Travel Original', title: 'Wayfarer AI', detail: 'Gemini AI • Leaflet Mapping • Express & Firebase', palette: amber },
  { label: 'The Recruitment Engine', title: 'AI Recruiter Pro', detail: 'Semantic matching • Sentence Transformers • FastAPI', palette: violet },
  { label: 'Safety Engineering', title: 'Driver Drowsiness Detection', detail: 'OpenCV • 30 FPS Haar Cascades • Microsoft Elevate', palette: ocean },
  { label: 'First Place', title: 'GMOCS 2025', detail: 'Secured 1st position in Web Development Workshop', palette: jade },
  { label: 'National Hackathon', title: 'Smart India Hackathon', detail: 'Selected at institute level for SIH 2025 & 2026', palette: amber },
  { label: 'Innovation Challenge', title: 'RIC 2026 RITH', detail: 'Rashtriya Innovation Challenge institute selection', palette: ocean },
  { label: 'Silver Credential', title: 'NPTEL Silver Badge', detail: 'The Joy of Computing using Python (84%)', palette: jade },
  { label: 'Primary Language', title: 'Python & JavaScript', detail: 'Full-stack AI applications & computer vision', palette: crimson },
  { label: 'Next Chapter', title: 'Smart Hospital QoS', detail: 'Emergency MRI network traffic prioritization', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Science',
    lines: ['Madanapalle Institute of Technology & Science (MITS)', 'Academic period: 2024 – 2028', 'Pragati Merit Scholarship recipient'],
    chips: ['CGPA 9.69/10'],
  },
  {
    kicker: 'Engineering Focus',
    title: 'AI/ML & Full-Stack',
    lines: ['Python, Core Java, C, JavaScript', 'FastAPI, Node.js, Express, Firebase, React', 'OpenCV, NLP, Sentence Transformers, Gemini AI'],
    chips: ['Python', 'FastAPI', 'Node.js', 'React', 'OpenCV', 'Gemini AI'],
  },
  {
    kicker: 'Internships',
    title: 'Proven Experience',
    lines: [
      'CODTECH IT Solutions — Web Application Development Intern',
      'Microsoft Elevate — Project Intern (Driver Drowsiness System)',
      'Prodigy Infotech — Web Development Intern',
    ],
  },
  {
    kicker: 'Originals',
    title: 'Engineered Productions',
    lines: [
      'Wayfarer — AI travel planner with Gemini & Leaflet maps',
      'AI Recruiter Pro — Semantic candidate matching & analytics',
      'Driver Drowsiness Alert System — 30 FPS OpenCV monitoring',
    ],
  },
  {
    kicker: 'Recognitions',
    title: 'Top Moments',
    lines: ['Academic Excellence Award & Pragati Scholar', '1st Position in GMOCS 2025 Web Dev Workshop', 'Smart India Hackathon & Rashtriya Innovation Challenge'],
  },
  {
    kicker: 'Certifications',
    title: 'Verified Credentials',
    lines: ['NPTEL Python (84%, Silver Badge)', 'IBM Fundamentals of AI', 'Oracle Certified Foundations Associate'],
  },
  {
    kicker: 'Vision',
    title: 'Building What\'s Next',
    lines: ['Applied AI · Healthcare Technology · Intelligent Systems'],
  },
];

export type ProfileId = 'kalpana' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'kalpana',
    name: 'Kalpana',
    blurb: 'The full series, in chronological order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, architecture & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The narrative arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Academic profile & positioning', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Honors • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • Screenplay view & download', palette: violet },
};
