import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, Github, ExternalLink } from 'lucide-react';
import { personal, social, projects, heroStats } from '../data/profile';

function FloatingBlob({ className, delay = 0 }) {
    return (
        <motion.div
            className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
            animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: 8,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    );
}

export default function HeroSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary-bg"
        >
            {/* Background blobs */}
            <FloatingBlob className="w-96 h-96 bg-primary -top-20 -left-20" delay={0} />
            <FloatingBlob className="w-80 h-80 bg-secondary -bottom-10 -right-10" delay={2} />
            <FloatingBlob className="w-64 h-64 bg-primary top-1/2 right-1/4" delay={4} />

            {/* Dot grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                }}
            />

            {/* Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="relative z-10 max-w-4xl mx-auto px-6 text-center"
            >
                {/* Badge */}
                <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
                        {personal.tagline}
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={item}
                    className="text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-4"
                >
                    {personal.firstName}{' '}
                    <span className="gradient-text">{personal.lastName}</span>
                </motion.h1>

                {/* Title */}
                <motion.p
                    variants={item}
                    className="text-xl md:text-2xl font-medium text-text-secondary mb-6"
                >
                    {personal.title}
                </motion.p>

                {/* Value prop */}
                <motion.p
                    variants={item}
                    className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {personal.bio}
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    variants={item}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                >
                    <Link to="/projects" className="btn-primary inline-flex items-center gap-2 justify-center">
                        View Projects
                        <ExternalLink size={16} />
                    </Link>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2 justify-center"
                    >
                        Download Resume
                    </a>
                </motion.div>

                {/* Quick stats */}
                <motion.div
                    variants={item}
                    className="grid grid-cols-2 gap-6 max-w-xs mx-auto mb-16"
                >
                    {heroStats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                            <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Social links */}
                <motion.div variants={item} className="flex justify-center gap-4">
                    <a
                        href={social.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm"
                    >
                        <Github size={16} />
                        GitHub
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <ArrowDown size={20} className="text-text-muted" />
            </motion.div>
        </section>
    );
}
