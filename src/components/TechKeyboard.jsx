import { useState, useRef, useCallback, useMemo } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// status: 'expert' | 'learning' | 'future'
const rawRows = [
    [
        { id: 'c',    name: 'C',           icon: 'devicon-c-plain',                color: '#A8B9CC', status: 'expert',   tip: 'Systems programming — memory, pointers, low-level algorithms.' },
        { id: 'cpp',  name: 'C++',         icon: 'devicon-cplusplus-plain',        color: '#00599C', status: 'expert',   tip: 'OOP and performance-critical code for competitive programming.' },
        { id: 'py',   name: 'Python',      icon: 'devicon-python-plain',           color: '#3776AB', status: 'expert',   tip: 'Backend APIs, ML pipelines, data scripts, and automation.' },
        { id: 'java', name: 'Java',        icon: 'devicon-java-plain',             color: '#ED8B00', status: 'expert',   tip: 'Object-oriented design patterns and enterprise architecture.' },
        { id: 'js',   name: 'JavaScript',  icon: 'devicon-javascript-plain',       color: '#F7DF1E', status: 'expert',   tip: 'Full-stack JS — React UIs and Node.js server applications.' },
        { id: 'ts',   name: 'TypeScript',  icon: 'devicon-typescript-plain',       color: '#3178C6', status: 'learning', tip: 'Adding type safety to large-scale JavaScript codebases.' },
        { id: 'html', name: 'HTML5',       icon: 'devicon-html5-plain',            color: '#E34F26', status: 'expert',   tip: 'Semantic, accessible markup for modern web apps.' },
        { id: 'css3', name: 'CSS3',        icon: 'devicon-css3-plain',             color: '#1572B6', status: 'expert',   tip: 'Animations, Flexbox, Grid, custom properties, responsive design.' },
        { id: 'sql',  name: 'SQL',         icon: 'devicon-azuresqldatabase-plain', color: '#CC2927', status: 'expert',   tip: 'Querying, schema design, and database performance optimization.' },
        { id: 'bash', name: 'Bash',        icon: 'devicon-bash-plain',             color: '#4EAA25', status: 'expert',   tip: 'Shell scripting, automation, and Linux environment config.' },
    ],
    [
        { id: 'react',    name: 'React',        icon: 'devicon-react-original',        color: '#61DAFB', status: 'expert',   tip: 'Building component-based UIs with hooks and React Router.' },
        { id: 'tailwind', name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original',  color: '#06B6D4', status: 'expert',   tip: 'Utility-first CSS for rapid, consistent UI development.' },
        { id: 'framer',   name: 'Framer Motion',icon: 'devicon-framermotion-original', color: '#BB4BFF', status: 'expert',   tip: 'Production-ready animations and gesture-driven interactions.' },
        { id: 'nodejs',   name: 'Node.js',      icon: 'devicon-nodejs-plain',          color: '#339933', status: 'expert',   tip: 'Server-side JavaScript for REST APIs and real-time apps.' },
        { id: 'express',  name: 'Express.js',   icon: 'devicon-express-original',      color: '#888888', status: 'expert',   tip: 'Minimal and flexible Node.js web framework.' },
        { id: 'fastapi',  name: 'FastAPI',      icon: 'devicon-fastapi-plain',         color: '#009688', status: 'expert',   tip: 'High-performance async Python APIs with auto docs.' },
        { id: 'nextjs',   name: 'Next.js',      icon: 'devicon-nextjs-plain',          color: '#AAAAAA', status: 'learning', tip: 'Full-stack React with SSR, ISR, and the App Router.' },
        { id: 'graphql',  name: 'GraphQL',      icon: 'devicon-graphql-plain',         color: '#E10098', status: 'learning', tip: 'Flexible query language for efficient API data fetching.' },
    ],
    [
        { id: 'mongo',    name: 'MongoDB',    icon: 'devicon-mongodb-plain',           color: '#47A248', status: 'expert',   tip: 'Document-based NoSQL with flexible schemas and aggregation.' },
        { id: 'postgres', name: 'PostgreSQL', icon: 'devicon-postgresql-plain',        color: '#4169E1', status: 'expert',   tip: 'Advanced relational database with full ACID guarantees.' },
        { id: 'redis',    name: 'Redis',      icon: 'devicon-redis-plain',             color: '#DC382D', status: 'expert',   tip: 'In-memory cache and pub/sub for high-throughput systems.' },
        { id: 'docker',   name: 'Docker',     icon: 'devicon-docker-plain',            color: '#2496ED', status: 'expert',   tip: 'Containerizing apps for portable, reproducible deployments.' },
        { id: 'nginx',    name: 'Nginx',      icon: 'devicon-nginx-original',          color: '#009639', status: 'expert',   tip: 'Reverse proxy, load balancing, and static file serving.' },
        { id: 'git',      name: 'Git',        icon: 'devicon-git-plain',               color: '#F05032', status: 'expert',   tip: 'Distributed version control — branching, merging, rebasing.' },
        { id: 'github',   name: 'GitHub',     icon: 'devicon-github-original',         color: '#CCCCCC', status: 'expert',   tip: 'Code hosting, pull requests, and Actions CI/CD pipelines.' },
        { id: 'linux',    name: 'Linux',      icon: 'devicon-linux-plain',             color: '#FCC624', status: 'expert',   tip: 'Dev OS of choice — shell, process management, networking.' },
        { id: 'vscode',   name: 'VS Code',    icon: 'devicon-vscode-plain',            color: '#007ACC', status: 'expert',   tip: 'Primary IDE with extensions for linting, debugging, Git.' },
    ],
    [
        { id: 'tf',    name: 'TensorFlow', icon: 'devicon-tensorflow-original',      color: '#FF6F00', status: 'expert',   tip: 'Deep learning — CNNs, LSTMs, and model deployment.' },
        { id: 'pt',    name: 'PyTorch',    icon: 'devicon-pytorch-original',         color: '#EE4C2C', status: 'learning', tip: 'Dynamic neural network library for research-oriented ML.' },
        { id: 'pd',    name: 'Pandas',     icon: 'devicon-pandas-plain',             color: '#6050DC', status: 'expert',   tip: 'Data analysis, wrangling, and transformation for ML pipelines.' },
        { id: 'aws',   name: 'AWS',        icon: 'devicon-amazonwebservices-plain',  color: '#FF9900', status: 'learning', tip: 'Cloud services — S3, EC2, Lambda, and managed databases.' },
        { id: 'k8s',   name: 'Kubernetes', icon: 'devicon-kubernetes-plain',        color: '#326CE5', status: 'future',   tip: 'Container orchestration at scale — next after Docker Compose.' },
        { id: 'rust',  name: 'Rust',       icon: 'devicon-rust-plain',              color: '#CE422B', status: 'future',   tip: 'Memory-safe systems language — on my learning roadmap.' },
        { id: 'go',    name: 'Go',         icon: 'devicon-go-plain',                color: '#00ADD8', status: 'future',   tip: 'Fast concurrent language for cloud-native microservices.' },
        { id: 'kafka', name: 'Kafka',      icon: 'devicon-apachekafka-plain',       color: '#8B5CF6', status: 'learning', tip: 'Distributed event streaming for high-throughput pipelines.' },
    ],
];

const allSkills = rawRows.flat();

const STATUS_META = {
    expert:   { label: 'Proficient',  dotClass: 'k3d-dot-expert',   badgeColor: '#22d3ee' },
    learning: { label: 'Learning',    dotClass: 'k3d-dot-learning',  badgeColor: '#a78bfa' },
    future:   { label: 'On Roadmap', dotClass: 'k3d-dot-future',   badgeColor: '#64748b' },
};

function TechTile({ k, onHover }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={`tech-tile tech-${k.status}`}
            style={{ '--tile-color': k.color }}
            onMouseEnter={() => {
                onHover(k);
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                onHover(null);
                setIsHovered(false);
            }}
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            aria-label={k.name}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                        exit={{ opacity: 0, y: 10, scale: 0.95, x: '-50%' }}
                        transition={{ duration: 0.15 }}
                        className="tech-tile-tooltip"
                    >
                        <div className="k3d-tooltip-body">
                            <div className="k3d-tooltip-name">{k.name}</div>
                            <div className="k3d-tooltip-tip">"{k.tip}"</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="tech-tile-inner">
                <i className={`${k.icon} tech-tile-icon`} />
                <div className="tech-tile-glow" />
            </div>
        </motion.div>
    );
}

export default function TechKeyboard() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: '-80px' });
    const [hoveredKey, setHoveredKey] = useState(null);
    const handleHover = useCallback((k) => setHoveredKey(k), []);

    // Staggered animation for tiles
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0 }
    };

    return (
        <section ref={sectionRef} className="k3d-section">
            {/* Blurred code background */}
            <div className="k3d-code-bg" aria-hidden="true">
                <pre className="k3d-code-text">
{`const app = express();
app.use(cors());

const router = new Router();
router.get('/api/v1', handler);

import { useState } from 'react';
const [data, setData] = useState([]);

function buildModel(config) {
  return tf.sequential({
    layers: [
      tf.layers.dense({ units: 128 }),
      tf.layers.dropout({ rate: 0.2 }),
    ]
  });
}

async def get_items(db: Session):
    return db.query(Item).all()

const pipeline = [
  { $match: { status: "active" } },
  { $group: { _id: "$category" } }
];

SELECT u.name, COUNT(*)
FROM users u JOIN orders o
ON u.id = o.user_id
GROUP BY u.name;`}
                </pre>
            </div>

            {/* Sparkle decoration */}
            <motion.div
                className="k3d-sparkle"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
            >
                <Sparkles size={32} />
            </motion.div>

            <div className="k3d-wrap">

                {/* Header */}
                <div className="k3d-header">
                    <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                        Tech Stack
                    </motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="section-heading mb-2">
                        My Toolkit
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="section-subheading max-w-xl mx-auto">
                        Technologies I use to build complete digital experiences.
                    </motion.p>
                    <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="k3d-legend">
                        {Object.entries(STATUS_META).map(([key, m]) => (
                            <div key={key} className="k3d-legend-item">
                                <span className={`k3d-legend-dot ${m.dotClass}`} />
                                <span>{m.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="tech-grid-container">
                    {/* Tech Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="tech-grid"
                    >
                        {allSkills.map((k) => (
                            <motion.div key={k.id} variants={itemVariants}>
                                <TechTile k={k} onHover={handleHover} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
