export const projects = [
    {
        id: 'ai-data-pipeline',
        title: 'AI Data Pipeline',
        shortDescription: 'An intelligent ETL pipeline with ML-based anomaly detection that processes 50K+ records/day from heterogeneous data sources.',
        technologies: ['Python', 'Apache Kafka', 'PostgreSQL', 'Scikit-learn', 'FastAPI', 'Docker'],
        githubLink: 'https://github.com/kunalbavdhane',
        demoLink: '#',
        featured: true,
        category: 'AI / Data Engineering',
        year: '2024',
        problem: 'Enterprise data teams spend 80% of their time cleaning and transforming data before any analysis can happen. Legacy ETL systems fail silently, are not adaptive to schema changes, and offer no anomaly intelligence — resulting in corrupted downstream analytics.',
        whyItMatters: 'Bad data costs businesses an estimated $3.1 trillion annually (IBM). A self-healing pipeline with built-in anomaly detection dramatically reduces engineering overhead, catches data quality regressions early, and unlocks reliable real-time analytics.',
        architecture: 'Data ingested via Kafka producers from REST APIs and CSV uploads. A Python-based consumer cluster applies transformation rules, then passes records through a Scikit-learn Isolation Forest model for anomaly scoring. Clean records land in PostgreSQL; flagged records route to a quarantine table. FastAPI exposes a dashboard and manual review endpoints. Everything containerized via Docker Compose.',
        architectureDiagram: null,
        decisions: [
            'Chose Kafka over RabbitMQ for horizontal scalability and replay ability — critical for debugging historical anomalies.',
            'Used Isolation Forest over supervised models because labeled anomaly data was unavailable at the start.',
            'PostgreSQL over a columnar store (Redshift) to keep the stack light for the prototype phase.',
            'FastAPI for async throughput without the overhead of Django.'
        ],
        tradeoffs: [
            'Isolation Forest has a fixed contamination hyperparameter that requires periodic manual tuning as data distribution shifts.',
            'Kafka adds operational complexity — Zookeeper management is non-trivial in production.',
            'No streaming ML retraining yet; the model is batch-retrained weekly.'
        ],
        results: 'Processes 50,000+ records per day with a p95 latency of under 200ms. Anomaly detection catches ~94% of injected test faults. Reduced manual data QA time by 65% in team testing.',
        futureImprovements: [
            'Add online learning so the model adapts in real-time to drift.',
            'Replace Zookeeper with KRaft for simpler Kafka management.',
            'Build a Grafana dashboard for live pipeline observability.',
            'Implement schema registry with automatic schema evolution handling.'
        ],
    },
    {
        id: 'healthtrack-webapp',
        title: 'HealthTrack Web App',
        shortDescription: 'Full-stack health monitoring dashboard with real-time vitals tracking, trend analysis, and AI-powered health insights.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'JWT', 'Tailwind CSS'],
        githubLink: 'https://github.com/kunalbavdhane',
        demoLink: '#',
        featured: true,
        category: 'Full Stack',
        year: '2024',
        problem: 'Patients with chronic conditions (hypertension, diabetes) lack a unified tool to log health metrics, spot trends over time, and share accurate data with their doctors. Existing apps are siloed, cluttered, or don\'t offer actionable insights.',
        whyItMatters: 'Early detection of adverse trends (rising blood pressure, HbA1c drift) can prevent hospitalizations. A well-designed tracking tool bridges the gap between patient self-monitoring and clinical decision-making.',
        architecture: 'React SPA with Chart.js for visualizations. Node.js/Express REST API with JWT authentication. MongoDB stores time-series health logs per user. A lightweight rule-based insight engine on the backend flags abnormal readings. Designed as a PWA for mobile use.',
        architectureDiagram: null,
        decisions: [
            'MongoDB chosen for flexible document schema — health metrics vary widely across conditions.',
            'JWT over sessions for stateless scalability across multiple API instances.',
            'Chart.js over D3 to reduce bundle size while meeting visualization requirements.',
            'PWA approach to avoid native app development cost while enabling mobile access.'
        ],
        tradeoffs: [
            'Rule-based insights lack the nuance of an ML model — misses complex multi-metric patterns.',
            'No HIPAA compliance in current form — not production-ready for clinical settings.',
            'MongoDB time-series queries at scale require additional indexing strategy.'
        ],
        results: 'Supports 5+ health metric types (BP, glucose, weight, sleep, steps). Interactive 30/90-day trend charts. Insight engine triggers alerts for 12 clinical thresholds. Auth flow with refresh tokens. Fully responsive and PWA-installable.',
        futureImprovements: [
            'Replace rule engine with an ML regression model trained on MIMIC-III dataset.',
            'Add HL7 FHIR export for EHR interoperability.',
            'Implement end-to-end encryption for HIPAA compliance.',
            'Add doctor/patient shared view with annotation capability.'
        ],
    },
    {
        id: 'distributed-chat',
        title: 'Distributed Chat System',
        shortDescription: 'WebSocket-based real-time chat with room management, message persistence, and horizontal scaling via Redis pub/sub.',
        technologies: ['Node.js', 'Socket.io', 'Redis', 'PostgreSQL', 'React', 'Docker', 'Nginx'],
        githubLink: 'https://github.com/kunalbavdhane',
        demoLink: '#',
        featured: true,
        category: 'Systems / Backend',
        year: '2023',
        problem: 'Building a chat system that works correctly under horizontal scaling is non-trivial. Naive WebSocket servers fail when multiple instances run behind a load balancer — messages only reach users connected to the same server instance.',
        whyItMatters: 'Understanding distributed systems patterns (pub/sub, message brokers, stateless services) is foundational for any backend engineer. This project was built to deeply learn and demonstrate these patterns in a realistic context.',
        architecture: 'React frontend connects via Socket.io to one of N Node.js instances behind Nginx. Each server instance subscribes to Redis pub/sub channels. When a user sends a message, the handling instance publishes to Redis; all other instances receive it and broadcast to relevant WebSocket connections. PostgreSQL stores message history.',
        architectureDiagram: null,
        decisions: [
            'Redis pub/sub over Kafka for this scale — simpler ops with lower latency for chat workloads.',
            'Socket.io over raw WebSockets for built-in reconnection, rooms, and fallback polling.',
            'Nginx sticky sessions disabled intentionally to test the Redis fan-out pattern under true distribution.',
            'PostgreSQL for message storage to leverage ACID guarantees for message ordering.'
        ],
        tradeoffs: [
            'Redis pub/sub has no message persistence — if a subscriber is down during a publish, the message is lost.',
            'Socket.io adds ~30KB to client bundle compared to raw WebSockets.',
            'Current design doesn\'t handle read receipts or typing indicators at scale.'
        ],
        results: 'Supports 3 horizontally scaled Node.js instances. Messages fan out correctly across all instances with sub-50ms delivery. Room-based routing, username auth, and 30-day message history. Load tested with 200 concurrent simulated users.',
        futureImprovements: [
            'Replace Redis pub/sub with Kafka for durable message fan-out.',
            'Add end-to-end encryption using the Signal Protocol.',
            'Implement read receipts and typing indicators with throttled pub/sub.',
            'Add Kubernetes-based auto-scaling and health checks.'
        ],
    },
    {
        id: 'portfolio-os',
        title: 'Portfolio OS',
        shortDescription: 'A desktop OS-inspired personal portfolio with draggable windows, a terminal emulator, and a virtual filesystem.',
        technologies: ['React', 'TypeScript', 'Framer Motion', 'Zustand', 'Tailwind CSS'],
        githubLink: 'https://github.com/kunalbavdhane',
        demoLink: '#',
        featured: false,
        category: 'Creative / Frontend',
        year: '2024',
        problem: 'Traditional portfolio sites are static and forgettable. Standing out to recruiters requires showing creativity and depth, not just listing projects.',
        whyItMatters: 'A unique interactive experience creates a strong first impression and demonstrates frontend engineering depth beyond typical CRUD applications.',
        architecture: 'React with Zustand for window state management (position, z-index, minimized/maximized). Framer Motion for drag and resize. A virtual filesystem in memory powers the terminal emulator. Each "app" (Projects, Terminal, About) is a separate component rendered inside a draggable window frame.',
        architectureDiagram: null,
        decisions: [
            'Zustand over Redux for lightweight global state without boilerplate.',
            'TypeScript for type-safe window state management.',
            'Virtual filesystem as a plain JS object tree — no backend needed.'
        ],
        tradeoffs: [
            'Heavy JS bundle — not optimized for slow connections.',
            'Keyboard navigation and accessibility are limited in the current version.'
        ],
        results: 'Functional draggable window system. Terminal with 15+ commands. Works on desktop browsers.',
        futureImprovements: [
            'Add mobile touch drag support.',
            'Full ARIA accessibility audit.',
            'Add a retro boot screen animation.'
        ],
    },
    {
        id: 'ml-stock-predictor',
        title: 'ML Stock Predictor',
        shortDescription: 'LSTM-based time series model for short-term stock price movement prediction with a Streamlit analysis dashboard.',
        technologies: ['Python', 'TensorFlow', 'Pandas', 'Streamlit', 'yfinance', 'Plotly'],
        githubLink: 'https://github.com/kunalbavdhane',
        demoLink: '#',
        featured: false,
        category: 'AI / ML',
        year: '2023',
        problem: 'Retail investors lack accessible tools to understand technical trend patterns. Most ML stock prediction papers are not reproducible or require expensive data subscriptions.',
        whyItMatters: 'Demonstrates applied deep learning on real-world time series data — a canonical ML engineering challenge with clear evaluation metrics.',
        architecture: 'yfinance fetches OHLCV data. Pandas pipeline normalizes, sequences (60-day sliding window), and splits data. A 3-layer LSTM model in TensorFlow trains on historical data. Streamlit app visualizes actual vs predicted prices and key technical indicators.',
        architectureDiagram: null,
        decisions: [
            'LSTM over ARIMA to capture non-linear temporal dependencies.',
            'Streamlit over Flask for zero-frontend-code deployment.',
            '60-day lookback window chosen after hyperparameter sweep.'
        ],
        tradeoffs: [
            'Model does not account for news sentiment or macroeconomic events.',
            'Overfits on low-volume stocks — only reliable on high-liquidity tickers.',
            'Not suitable for live trading without a more robust backtesting framework.'
        ],
        results: 'RMSE of 2.3% on test set for large-cap stocks (AAPL, MSFT). Dashboard shows 1/5/30-day predictions with confidence bands.',
        futureImprovements: [
            'Integrate NLP sentiment analysis from news headlines.',
            'Add a Backtrader integration for strategy backtesting.',
            'Replace LSTM with a Transformer (Temporal Fusion Transformer).'
        ],
    },
    {
        id: 'devops-ci-cd',
        title: 'DevOps CI/CD Platform',
        shortDescription: 'A self-hosted CI/CD pipeline with GitHub webhooks, Docker-based build agents, and a live deployment dashboard.',
        technologies: ['Python', 'Docker', 'GitHub Webhooks', 'SQLite', 'FastAPI', 'React'],
        githubLink: 'https://github.com/kunalbavdhane',
        demoLink: '#',
        featured: false,
        category: 'DevOps',
        year: '2025',
        problem: 'Learning DevOps concepts from documentation alone is insufficient. Building a CI/CD system from scratch forces deep understanding of webhooks, build isolation, artifact management, and deployment orchestration.',
        whyItMatters: 'DevOps tooling is critical infrastructure. Understanding how it works internally makes engineers better consumers and contributors of tools like GitHub Actions and Jenkins.',
        architecture: 'FastAPI server receives GitHub push webhooks. A job queue dispatches builds to Docker containers (each build gets a fresh container). Build logs stream via Server-Sent Events to a React dashboard. Successful builds trigger a configurable deployment script. SQLite stores run history.',
        architectureDiagram: null,
        decisions: [
            'Docker build isolation to prevent cross-build environment contamination.',
            'SSE over WebSockets for one-directional log streaming — simpler to implement.',
            'SQLite for simplicity — this is a learning project, not multi-tenant SaaS.'
        ],
        tradeoffs: [
            'No parallel build workers yet — builds queue sequentially.',
            'No artifact caching — each build re-downloads dependencies.'
        ],
        results: 'End-to-end push-to-deploy in under 90 seconds for a Node.js project. Live log streaming. 7-day build history with status tracking.',
        futureImprovements: [
            'Add parallel build workers with a proper job queue (Celery + Redis).',
            'Layer caching for Docker builds.',
            'Kubernetes deployment target support.'
        ],
    },
];

export const featuredProjects = projects.filter(p => p.featured);
