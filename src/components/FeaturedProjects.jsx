import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../data/profile';

export default function FeaturedProjects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="section-padding bg-primary-bg">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
                    >
                        Selected Work
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="section-heading"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="section-subheading max-w-xl mx-auto"
                    >
                        Engineering-first projects with real-world problem framing, architecture decisions, and measurable results.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* View all */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center mt-12"
                >
                    <Link
                        to="/projects"
                        className="flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors group"
                    >
                        View all projects
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
