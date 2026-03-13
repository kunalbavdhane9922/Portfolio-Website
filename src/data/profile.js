// ============================================================
// CENTRALIZED PROFILE DATA — Single source of truth
// Change this file to update the entire portfolio website.
// ============================================================

// ── Personal Information ─────────────────────────────────────
export const personal = {
    firstName: 'Kunal',
    lastName: 'Bavdhane',
    title: 'Full Stack Developer & AI Builder',
    tagline: 'Available for opportunities',
    bio: 'Computer Engineering student at VIT Pune building practical software systems at the intersection of AI, data analytics, and scalable web applications. I focus on turning complex ideas into reliable, production-style tools—from intelligent pattern detection systems to full-stack platforms powered by modern backend architectures.',
    aboutBio: [
        "I'm a Computer Engineering student with a strong bias toward building things that work in the real world. My projects start with a clearly defined problem, progress through deliberate architecture decisions, and ship as working software with measurable results.",
        "I work across the full stack — from data pipelines and ML models to React UIs and distributed backends. I'm most energized when working on systems that combine engineering rigor with practical impact: data tools that reduce analyst toil, AI systems that augment human decision-making, and web apps that people actually want to use.",
        "When I'm not building, I'm reading about distributed systems, contributing to open source, or working through algorithms problems to keep my fundamentals sharp.",
    ],
    location: 'India 🇮🇳',
    degree: 'B.E. Computer Engineering',
    availability: 'Internships & Projects',
    openTo: 'Internships, freelance projects, open source collaboration, and technical mentorship.',
    footerTagline: 'Building intelligent systems, data tools, and scalable web applications.',
};

// ── Social & Contact Links ───────────────────────────────────
export const social = {
    github: {
        url: 'https://github.com/kunalbavdhane9922',
        display: 'github.com/kunalbavdhane9922',
    },
    linkedin: {
        url: 'https://linkedin.com/in/kunalbavdhane9922',
        display: 'linkedin.com/in/kunalbavdhane9922',
    },
    email: {
        url: 'mailto:kunalbavdhane9922@gmail.com',
        display: 'kunalbavdhane9922@gmail.com',
        raw: 'kunalbavdhane9922@gmail.com',
    },
    responseTime: 'Usually within 24 hours',
};

// ── Technologies (used by 3D Keyboard & Skills section) ─────
// icon: devicon class name (https://devicon.dev)
// color: brand color for glow effect
export const technologies = [
    // Row 1 — Languages & Core
    { id: 'c',          name: 'C',             icon: 'devicon-c-plain',                  color: '#A8B9CC', category: 'Languages' },
    { id: 'cpp',        name: 'C++',           icon: 'devicon-cplusplus-plain',           color: '#00599C', category: 'Languages' },
    { id: 'python',     name: 'Python',        icon: 'devicon-python-plain',              color: '#3776AB', category: 'Languages' },
    { id: 'java',       name: 'Java',          icon: 'devicon-java-plain',                color: '#ED8B00', category: 'Languages' },
    { id: 'javascript', name: 'JavaScript',    icon: 'devicon-javascript-plain',          color: '#F7DF1E', category: 'Languages' },
    { id: 'html',       name: 'HTML5',         icon: 'devicon-html5-plain',               color: '#E34F26', category: 'Languages' },
    { id: 'css',        name: 'CSS3',          icon: 'devicon-css3-plain',                color: '#1572B6', category: 'Languages' },
    { id: 'sql',        name: 'SQL',           icon: 'devicon-azuresqldatabase-plain',    color: '#CC2927', category: 'Languages' },

    // Row 2 — Frontend
    { id: 'react',      name: 'React',         icon: 'devicon-react-original',            color: '#61DAFB', category: 'Frontend' },
    { id: 'tailwind',   name: 'Tailwind CSS',  icon: 'devicon-tailwindcss-original',      color: '#06B6D4', category: 'Frontend' },
    { id: 'framer',     name: 'Framer Motion', icon: 'devicon-framermotion-original',     color: '#BB4BFF', category: 'Frontend' },

    // Row 3 — Backend & Databases
    { id: 'nodejs',     name: 'Node.js',       icon: 'devicon-nodejs-plain',              color: '#339933', category: 'Backend' },
    { id: 'express',    name: 'Express.js',    icon: 'devicon-express-original',          color: '#FFFFFF', category: 'Backend' },
    { id: 'fastapi',    name: 'FastAPI',       icon: 'devicon-fastapi-plain',             color: '#009688', category: 'Backend' },
    { id: 'mongodb',    name: 'MongoDB',       icon: 'devicon-mongodb-plain',             color: '#47A248', category: 'Backend' },
    { id: 'postgresql',  name: 'PostgreSQL',    icon: 'devicon-postgresql-plain',          color: '#4169E1', category: 'Backend' },
    { id: 'redis',      name: 'Redis',         icon: 'devicon-redis-plain',               color: '#DC382D', category: 'Backend' },

    // Row 4 — DevOps & Tools
    { id: 'docker',     name: 'Docker',        icon: 'devicon-docker-plain',              color: '#2496ED', category: 'DevOps' },
    { id: 'nginx',      name: 'Nginx',         icon: 'devicon-nginx-original',            color: '#009639', category: 'DevOps' },
    { id: 'git',        name: 'Git',           icon: 'devicon-git-plain',                 color: '#F05032', category: 'DevOps' },
    { id: 'github',     name: 'GitHub',        icon: 'devicon-github-original',           color: '#FFFFFF', category: 'DevOps' },
    { id: 'linux',      name: 'Linux',         icon: 'devicon-linux-plain',               color: '#FCC624', category: 'DevOps' },
    { id: 'vscode',     name: 'VS Code',       icon: 'devicon-vscode-plain',              color: '#007ACC', category: 'DevOps' },
];

// ── Skill Categories (About page grid) ──────────────────────
export const skillCategories = [
    {
        id: 'languages',
        name: 'Languages',
        icon: '⌨️',
        color: '#38BDF8',
        skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
    },
    {
        id: 'frontend',
        name: 'Frontend',
        icon: '🎨',
        color: '#6366F1',
        skills: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        id: 'backend',
        name: 'Backend',
        icon: '⚙️',
        color: '#8B5CF6',
        skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
    },
    {
        id: 'data',
        name: 'Databases & Data',
        icon: '🗃️',
        color: '#EC4899',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL'],
    },
    {
        id: 'devops',
        name: 'DevOps & Tools',
        icon: '🚀',
        color: '#10B981',
        skills: ['Docker', 'Git', 'GitHub', 'Nginx', 'Linux', 'VS Code'],
    },
];

// ── Areas of Interest ────────────────────────────────────────
export const areasOfInterest = [
    {
        title: 'Full Stack Development',
        description: 'Building end-to-end web applications with clean architecture, from database design to responsive UIs.',
        icon: '🌐',
    },
    {
        title: 'AI / ML Systems',
        description: 'Designing intelligent systems that learn from data — from classical ML to deep learning and LLM integration.',
        icon: '🧠',
    },
    {
        title: 'Data Engineering',
        description: 'Building robust data pipelines, ETL systems, and real-time streaming architectures.',
        icon: '🔄',
    },
    {
        title: 'Distributed Systems',
        description: 'Solving the hard problems of scale, consistency, and reliability in networked systems.',
        icon: '🔗',
    },
];

// ── Projects ─────────────────────────────────────────────────
export const projects = [
    {
        id: 'url-redirection-platform',
        title: 'Scalable URL Redirection Platform',
        shortDescription: 'High-performance URL shortener built to handle extreme throughput with minimal latency using FastAPI, PostgreSQL, and Redis.',
        technologies: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'SQLAlchemy', 'Nginx', 'Docker', 'Docker Compose'],
        githubLink: 'https://github.com/kunalbavdhane9922/Scalable-URL-Redirection-Platform',
        demoLink: '#',
        featured: true,
        category: 'Systems / Backend',
        year: '2026',
        problem: 'Designing a platform intended for massive scale (1B reads/day, 10,000 RPS) requires a different approach than typical local applications. Redirection latency must be kept minimal (sub-ms) while ensuring absolute uniqueness across billions of records.',
        whyItMatters: 'URL shortening is a canonical system design problem. This project demonstrates proficiency in horizontal scaling, high-throughput caching strategies, and mathematical uniqueness guarantees—essential for production-grade backend engineering.',
        architecture: 'Client traffic routes through an Nginx reverse proxy to FastAPI workers. The application implements a cache-aside pattern where short codes are first looked up in Redis. Hits result in instant 302 redirects; misses fall back to PostgreSQL (via async SQLAlchemy) before updating the cache.',
        architectureDiagram: null,
        decisions: [
            'Utilized Base62 encoding to map database auto-increment IDs to unique short codes, mathematically guaranteeing uniqueness without collision checks.',
            'Implemented a strict Cache-Aside pattern in Redis with a 1-hour TTL to maximize read performance while managing memory usage.',
            'Adopted Asynchronous Database Operations using SQLAlchemy\'s async engine (asyncpg) to handle thousands of concurrent I/O operations without blocking.',
            'Containerized the entire stack with Docker Compose for portable, production-like orchestration of the API, DB, and Cache layers.',
        ],
        tradeoffs: [
            'Base62 encoding tied to database auto-increment IDs makes the database the single point of truth but introduces a dependency on sequence availability.',
            'A 1-hour TTL in Redis balances latency and memory but means some "stale" or less frequent URLs may incur a database hit periodically.',
        ],
        results: 'Architected to support 100 Million Daily Active Users (DAU) and 1 Billion reads per day. Successfully benchmarks at ~10,000 requests per second with minimal latency overhead.',
        futureImprovements: [
            'Implement a distributed ID generator (e.g., Snowflake) to remove reliance on a single PostgreSQL sequence.',
            'Add comprehensive link analytics with real-time aggregation using Kafka or Redis streams.',
            'Implement geographic routing at the Nginx level for lower global latency.',
        ],
    },
];

export const featuredProjects = projects.filter((p) => p.featured);

// ── Timeline ─────────────────────────────────────────────────
export const timelineData = [
    {
        year: '2024',
        title: 'Foundation & Web Development',
        summary: 'Built strong fundamentals in programming and web technologies.',
        skills: ['C', 'Python', 'Java', 'DSA', 'HTML', 'CSS', 'Javascript', 'React', 'Git'],
        technologies: ['React', 'VS Code', 'Git', 'GitHub'],
        highlight: 'Developed a solid understanding of core computer science concepts and frontend development.',
        color: '#8B5CF6',
    },
    {
        year: '2025',
        title: 'Advanced Backend & Databases',
        summary: 'Focused on complex backend architectures and database management systems.',
        skills: ['C++', 'SQL', 'DBMS', 'OOP', 'Nodejs', 'MongoDB', 'Express.js'],
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker'],
        highlight: 'Deepened expertise in backend systems, database design, and object-oriented programming.',
        color: '#EC4899',
    },
    {
        year: '2026',
        title: 'High Performance Systems',
        summary: 'Currently specializing in high-performance architectures, advanced data structures, and emerging technologies.',
        skills: ['Operating Systems', 'Advanced Data Structures', 'PostgreSQL', 'Computer Vision'],
        technologies: ['FastAPI', 'Redis', 'Python', 'PyTorch', 'Nginx'],
        projects: [
            { name: 'Scalable URL Redirection Platform', description: 'High-performance URL shortener built to handle 10,000 RPS with Redis and Base62 encoding.' },
        ],
        highlight: 'Building production-grade systems with extreme throughput and learning low-level system internals.',
        color: '#10B981',
    },
];

// ── Stats ────────────────────────────────────────────────────
export const heroStats = [
    { label: 'Technologies', value: `${technologies.length}+` },
    { label: 'Years Coding', value: '3+' },
];

export const timelineStats = [
    { value: '3', label: 'Years of Learning', suffix: '' },
    { value: `${technologies.length}`, label: 'Technologies Used', suffix: '+' },
    { value: `${projects.length}`, label: 'Projects Shipped', suffix: '+' },
    { value: '500', label: 'Problems Solved', suffix: '+' },
];
