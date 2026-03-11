import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

function Section({ title, icon, children, delay = 0 }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
        >
            <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{icon}</span>
                <h2 className="text-xl font-bold text-text-primary">{title}</h2>
            </div>
            <div className="pl-9">{children}</div>
        </motion.section>
    );
}

export default function CaseStudyLayout({ project }) {
    if (!project) return null;

    const {
        title, shortDescription, technologies, githubLink, demoLink,
        problem, whyItMatters, architecture, decisions, tradeoffs, results, futureImprovements,
        category, year,
    } = project;

    return (
        <div className="min-h-screen bg-primary-bg pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-10"
                >
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm"
                    >
                        <ArrowLeft size={16} />
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Hero */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{category}</span>
                        <span className="text-xs text-text-muted">{year}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
                        {title}
                    </h1>
                    <p className="text-text-secondary text-lg leading-relaxed mb-7">
                        {shortDescription}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-7">
                        {technologies.map((t) => (
                            <SkillBadge key={t} label={t} size="md" />
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary inline-flex items-center gap-2 text-sm py-2 px-4"
                            >
                                <Github size={16} />
                                View on GitHub
                            </a>
                        )}
                        {demoLink && demoLink !== '#' && (
                            <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2 text-sm py-2 px-4"
                            >
                                <ExternalLink size={16} />
                                Live Demo
                            </a>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="mt-10 h-px bg-gradient-to-r from-primary/40 via-secondary/40 to-transparent" />
                </motion.header>

                {/* Problem */}
                <Section title="The Problem" icon="🎯" delay={0}>
                    <p className="text-text-secondary leading-relaxed">{problem}</p>
                </Section>

                {/* Why It Matters */}
                <Section title="Why It Matters" icon="💡" delay={0.05}>
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                        <p className="text-text-secondary leading-relaxed">{whyItMatters}</p>
                    </div>
                </Section>

                {/* Architecture */}
                <Section title="System Architecture" icon="🏗️" delay={0.1}>
                    <p className="text-text-secondary leading-relaxed mb-6">{architecture}</p>
                    {/* Architecture diagram placeholder */}
                    <div className="bg-card border border-border rounded-xl p-8 text-center">
                        <div className="text-4xl mb-3">📐</div>
                        <p className="text-text-muted text-sm">Architecture diagram</p>
                        <p className="text-text-muted text-xs mt-1">
                            (Add via diagrams.net or Excalidraw and embed here)
                        </p>
                    </div>
                </Section>

                {/* Engineering Decisions */}
                <Section title="Engineering Decisions" icon="⚙️" delay={0.15}>
                    <ul className="space-y-3">
                        {decisions.map((d, i) => (
                            <li key={i} className="flex gap-3 text-text-secondary">
                                <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">{d}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* Trade-offs */}
                <Section title="Trade-offs & Limitations" icon="⚖️" delay={0.2}>
                    <ul className="space-y-3">
                        {tradeoffs.map((t, i) => (
                            <li key={i} className="flex gap-3 text-text-secondary">
                                <span className="text-amber-400 mt-0.5 flex-shrink-0">•</span>
                                <span className="leading-relaxed">{t}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* Results */}
                <Section title="Results" icon="📊" delay={0.25}>
                    <div className="bg-card border border-border rounded-xl p-6">
                        <p className="text-text-secondary leading-relaxed">{results}</p>
                    </div>
                </Section>

                {/* Future Improvements */}
                <Section title="Future Improvements" icon="🚀" delay={0.3}>
                    <ul className="space-y-3">
                        {futureImprovements.map((f, i) => (
                            <li key={i} className="flex gap-3 text-text-secondary">
                                <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                                <span className="leading-relaxed">{f}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            </div>
        </div>
    );
}
