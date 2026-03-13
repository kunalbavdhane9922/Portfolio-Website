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
            'Adoped Asynchronous Database Operations using SQLAlchemy\'s async engine (asyncpg) to handle thousands of concurrent I/O operations without blocking.',
            'Containerized the entire stack with Docker Compose for portable, production-like orchestration of the API, DB, and Cache layers.'
        ],
        tradeoffs: [
            'Base62 encoding tied to database auto-increment IDs makes the database the single point of truth but introduces a dependency on sequence availability.',
            'A 1-hour TTL in Redis balances latency and memory but means some "stale" or less frequent URLs may incur a database hit periodically.'
        ],
        results: 'Architected to support 100 Million Daily Active Users (DAU) and 1 Billion reads per day. Successfully benchmarks at ~10,000 requests per second with minimal latency overhead.',
        futureImprovements: [
            'Implement a distributed ID generator (e.g., Snowflake) to remove reliance on a single PostgreSQL sequence.',
            'Add comprehensive link analytics with real-time aggregation using Kafka or Redis streams.',
            'Implement geographic routing at the Nginx level for lower global latency.'
        ],
    },
];

export const featuredProjects = projects.filter(p => p.featured);
