import { motion } from 'framer-motion';
import { skillCategories, areasOfInterest } from '../data/skills';
import SkillBadge from '../components/SkillBadge';
import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';

function SkillCategory({ category, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
        >
            <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-semibold text-text-primary">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} size="sm" />
                ))}
            </div>
        </motion.div>
    );
}

export default function About() {
    return (
        <main className="min-h-screen bg-primary-bg pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
                    <h1 className="section-heading mb-4">The Developer Behind the Work</h1>
                </motion.div>

                {/* Bio block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20"
                >
                    {/* Avatar placeholder */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-start">
                        <div className="w-56 h-56 rounded-2xl gradient-border flex items-center justify-center bg-card">
                            <span className="text-6xl">👨‍💻</span>
                        </div>
                    </div>

                    {/* Bio text */}
                    <div className="lg:col-span-3 space-y-5">
                        <h2 className="text-2xl font-bold text-text-primary">Hi, I'm Kunal</h2>
                        <p className="text-text-secondary leading-relaxed">
                            I'm a Computer Engineering student with a strong bias toward building things that work in the real world.
                            My projects start with a clearly defined problem, progress through deliberate architecture decisions,
                            and ship as working software with measurable results.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            I work across the full stack — from data pipelines and ML models to React UIs and distributed backends.
                            I'm most energized when working on systems that combine engineering rigor with practical impact:
                            data tools that reduce analyst toil, AI systems that augment human decision-making, and web apps
                            that people actually want to use.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            When I'm not building, I'm reading about distributed systems, contributing to open source,
                            or working through algorithms problems to keep my fundamentals sharp.
                        </p>

                        {/* Quick facts */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            {[
                                { label: 'Location', value: 'India 🇮🇳' },
                                { label: 'Degree', value: 'B.E. Computer Engineering' },
                                { label: 'Available', value: 'Internships & Projects' },
                            ].map((fact) => (
                                <div key={fact.label} className="bg-card border border-border rounded-lg px-4 py-2">
                                    <p className="text-xs text-text-muted">{fact.label}</p>
                                    <p className="text-sm font-medium text-text-primary">{fact.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm">
                                <Download size={16} />
                                Download Resume
                            </a>
                            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2 text-sm">
                                Let's Talk
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Skills */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-heading mb-3">Technical Skills</h2>
                        <p className="text-text-secondary">Technologies and tools I've worked with across projects.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((cat, i) => (
                            <SkillCategory key={cat.id} category={cat} index={i} />
                        ))}
                    </div>
                </div>

                {/* Areas of Interest */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-heading mb-3">Areas of Interest</h2>
                        <p className="text-text-secondary">Where I focus my energy and depth.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {areasOfInterest.map((area, i) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-card border border-border rounded-xl p-6 flex gap-5 hover:border-primary/30 transition-colors"
                            >
                                <div className="text-3xl flex-shrink-0">{area.icon}</div>
                                <div>
                                    <h3 className="font-semibold text-text-primary mb-1">{area.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{area.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
