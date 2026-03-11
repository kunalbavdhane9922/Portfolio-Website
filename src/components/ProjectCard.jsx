import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import SkillBadge from './SkillBadge';

export default function ProjectCard({ project, index = 0 }) {
    const { id, title, shortDescription, technologies, githubLink, demoLink, category, year } = project;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
        >
            {/* Gradient top accent */}
            <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category & year */}
            <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {category}
                </span>
                <span className="text-xs text-text-muted">{year}</span>
            </div>

            {/* Title & description */}
            <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                {shortDescription}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
                {technologies.slice(0, 5).map((tech) => (
                    <SkillBadge key={tech} label={tech} size="sm" />
                ))}
                {technologies.length > 5 && (
                    <span className="text-xs text-text-muted px-2 py-1">
                        +{technologies.length - 5} more
                    </span>
                )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
                <Link
                    to={`/projects/${id}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium py-2.5 rounded-lg transition-colors"
                >
                    Case Study
                    <ArrowRight size={14} />
                </Link>
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 text-text-muted hover:text-primary border border-border hover:border-primary/40 rounded-lg transition-colors"
                        aria-label="GitHub repository"
                    >
                        <Github size={16} />
                    </a>
                )}
                {demoLink && demoLink !== '#' && (
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 text-text-muted hover:text-primary border border-border hover:border-primary/40 rounded-lg transition-colors"
                        aria-label="Live demo"
                    >
                        <ExternalLink size={16} />
                    </a>
                )}
            </div>
        </motion.div>
    );
}
