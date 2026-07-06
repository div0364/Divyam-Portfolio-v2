// ============================================================================
//  RESUME DATA  —  Divyam Sinha
//  All content below is extracted verbatim from the resume (Divyam_resume_v6.pdf).
// ============================================================================

export const profile = {
  name: 'Divyam Sinha',
  location: 'Ranchi, India',
  // Role tagline inferred from resume content (Razorpay SDE + backend/distributed/AI-ML focus)
  roles: ['Software Engineer', 'Backend', 'Distributed Systems', 'AI / ML'],
  tagline: 'Building scalable backend services & distributed systems.',
  pitch:
    'Software Engineer with production experience at Razorpay building scalable backend services and distributed systems in Go and Python — from 550M+ record ETL pipelines to protocol-level gRPC security.',
}

export const contact = {
  email: 'divyamsinha442003@gmail.com',
  phone: '+91-9031787124',
  linkedin: 'https://www.linkedin.com/in/divyam-sinha-628bb924a/',
  github: 'https://github.com/div0364',
  leetcode: 'https://leetcode.com/u/Divyamsinha2003/',
  codeforces: 'https://codeforces.com/profile/BossDevil',
  // Resume PDF served from /public
  resume: '/Divyam_resume_v6.pdf',
}

export const summary =
  'Software Engineer with a strong foundation in systems programming, OS concepts, data structures, and algorithms, backed by production experience at Razorpay building scalable backend services and distributed systems in Go and Python. B.Tech in AI/ML with experience across embedded-adjacent areas including real-time data pipelines, device-level integrations, and platform-level tooling. Strong analytical and problem-solving skills with 900+ competitive programming problems solved (LeetCode Knight).'

export const education = [
  {
    institution: 'Birla Institute of Technology Mesra',
    location: 'Ranchi, Jharkhand',
    degree: 'B.Tech in Artificial Intelligence and Machine Learning',
    grade: 'CGPA: 8.27/10',
    dates: 'Aug 2022 – May 2026',
  },
]

export const experience = [
  {
    company: 'Razorpay',
    location: 'Bengaluru, India',
    title: 'Software Development Engineer Intern',
    dates: 'Jan 2026 – Jun 2026',
    highlights: [
      {
        text:
          'Built an AI-powered developer tool using Claude (Anthropic) that automated data-attribute onboarding — previously a multi-day process requiring manual tagging and coordination with the analytics team — by auto-generating PySpark ETL changes, data-quality gates, and PRs via a Slack-based PostgreSQL approval flow, cutting turnaround time from multiple days to under 2 minutes.',
        metric: { value: '< 2 min', label: 'turnaround (from multiple days)' },
      },
      {
        text:
          'Automated a customer data pipeline that was previously updated manually on a monthly basis — causing stale/incorrect customer targeting and revenue impact — by engineering an ETL pipeline processing 550M+ records with Apache Airflow, PySpark, and AWS EMR, enabling weekly refresh via real-time ingestion, distributed compute orchestration, and zero-downtime atomic cutover into PostgreSQL.',
        metric: { value: '550M+', label: 'records processed' },
      },
      {
        text:
          'Built and shipped a self-serve audience intelligence platform in React — replacing a manual workflow where segment creation required raising requirements to backend engineering via Postman — by designing a recursive AND/OR rule-builder UI with dynamic nested condition trees, a multi-step modal state machine for guided segment creation, and reusable, composable form components, eliminating manual on-call intervention and enabling any team to independently build and target audiences.',
        metric: null,
      },
      {
        text:
          'Designed and shipped 3+ production REST APIs in Go using a layered microservices architecture (repository / service / server), demonstrating strong OOP and protocol-level engineering across live merchant traffic.',
        metric: { value: '3+', label: 'production REST APIs in Go' },
      },
      {
        text:
          'Implemented AuthN/AuthZ via a custom gRPC interceptor and RBAC system, securing service-to-service communication using protocol-layer security and access-control mechanisms.',
        metric: null,
      },
      {
        text:
          'Improved production reliability by building a comprehensive E2E test suite that caught failures before deploying on production, and increased system observability through Prometheus alerting and custom Grafana dashboards.',
        metric: null,
      },
    ],
  },
]

export const projects = [
  {
    name: 'ResuTrackX',
    year: '2025',
    stack: ['FastAPI', 'Python', 'BERT', 'spaCy', 'Gemini', 'RAG', 'MongoDB', 'React'],
    links: { live: 'https://resume-frontend-liard.vercel.app/' },
    highlights: [
      'Built a full-stack AI application with a FastAPI backend serving BERT + TF-IDF ranking and NLP extraction (spaCy + PyMuPDF) at under few seconds PDF — showcasing real-time software design and analytical problem solving.',
      'Implemented a RAG pipeline using sentence-transformer embeddings and cosine-similarity semantic search to ground LLM (Gemini) responses in a knowledge base; achieved enhanced precision on a 200-resume benchmark.',
      'Deployed with JWT auth + RBAC on Hugging Face; integrated MongoDB for persistent storage — demonstrating end-to-end application SW development and UI/backend integration.',
    ],
    metric: { value: '200', label: 'resume benchmark' },
  },
  {
    name: 'Chattrix',
    year: '2025',
    stack: ['MERN', 'Socket.io', 'Zustand', 'Cloudinary'],
    links: { live: 'https://messanger-app-t59f.onrender.com/' },
    highlights: [
      'Engineered a real-time messaging platform using WebSocket (Socket.io) supporting 100+ concurrent users at sub-100ms latency — directly relevant to real-time protocol stack design (WebSocket).',
      'Built a REST API on Express.js + MongoDB with Cloudinary CDN integration, cutting media load time and sustained uptime on Render with global state managed via Zustand.',
    ],
    metric: { value: 'sub-100ms', label: 'latency · 100+ concurrent users' },
  },
]

// Preserves the exact categorization from the resume's Technical Skills section.
export const skills = [
  { category: 'Languages', items: ['C++', 'Go (Golang)', 'Python', 'SQL', 'JavaScript', 'TypeScript'] },
  {
    category: 'CS Fundamentals',
    items: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks'],
  },
  { category: 'Systems & Platform', items: ['gRPC', 'Protocol Buffers', 'REST'] },
  { category: 'Protocols & Networking', items: ['gRPC (Protobuf)', 'REST'] },
  { category: 'Frontend', items: ['React.js', 'Redux', 'Zustand'] },
  { category: 'Backend & APIs', items: ['FastAPI', 'Node.js', 'Express.js', 'Async Programming'] },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (S3, EMR, EC2)', 'Docker', 'Kubernetes', 'Terraform', 'Kong API Gateway', 'CI/CD'],
  },
  { category: 'Data & Storage', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Apache Airflow', 'PySpark'] },
  {
    category: 'Testing & Observability',
    items: ['Unit, Integration & E2E Testing', 'Prometheus', 'Grafana', 'OpenTelemetry'],
  },
  { category: 'Tools', items: ['Git', 'GitHub', 'Postman', 'JWT', 'Agile'] },
]

export const achievements = [
  {
    title: 'Rising Star (MVP Rookie) Award, Razorpay',
    detail:
      'Recognized as best-performing intern by senior engineering leadership for exceptional 3-month impact across platform, backend, and AI delivery.',
    icon: 'Award',
  },
  {
    title: 'Competitive Programming',
    detail:
      '900+ problems solved; LeetCode Knight (1926) and Codeforces Specialist (1427) — top 5% across both platforms, demonstrating strong analytical and problem-solving ability.',
    icon: 'Trophy',
  },
  {
    title: 'Adobe India Hackathon (Team Leader)',
    detail:
      'Led team to top 4% of 2000+ teams nationwide, owning solution architecture and execution.',
    icon: 'Medal',
  },
  {
    title: '2nd Place — INNOVATE-A-THON 2.0, BIT Mesra (Team Leader)',
    detail: 'Beat 180+ teams in a 24-hour build.',
    icon: 'Rocket',
  },
  {
    title: 'Juspay Hackathon Finalist',
    detail:
      'Top national team for an end-to-end fintech payment solution with a fault-tolerant backend.',
    icon: 'Star',
  },
]

// Headline metrics surfaced prominently for skimming recruiters.
export const heroStats = [
  { value: '550M+', label: 'records in production ETL' },
  { value: '< 2 min', label: 'onboarding, down from days' },
  { value: '900+', label: 'DSA problems solved' },
  { value: 'Top 5%', label: 'LeetCode & Codeforces' },
]

export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
