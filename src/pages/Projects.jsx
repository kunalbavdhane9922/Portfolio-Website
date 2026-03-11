import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { Filter } from 'lucide-react';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered =
        activeCategory === 'All'
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <main className="min-h-screen bg-primary-bg pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
                    <h1 className="section-heading mb-4">All Projects</h1>
                    <p className="section-subheading max-w-xl mx-auto">
                        Every project has a full case study — problem framing, architecture, decisions, trade-offs, and results.
                    </p>
                </motion.div>

                {/* Category filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap gap-2 justify-center mb-12"
                >
                    <Filter size={16} className="text-text-muted self-center mr-1" />
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'bg-card border border-border text-text-secondary hover:text-text-primary hover:border-primary/40'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-text-muted text-lg">No projects in this category yet.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
