import HeroSection from '../components/HeroSection';
import TechKeyboard from '../components/TechKeyboard';
import ProjectCard from '../components/ProjectCard';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { areasOfInterest, projects, social } from '../data/profile';
import { Mail, Github, Linkedin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function AreaCard({ area, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
        >
            <div className="text-3xl mb-4">{area.icon}</div>
            <h3 className="font-semibold text-text-primary mb-2">{area.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{area.description}</p>
        </motion.div>
    );
}

function SectionHeader({ eyebrow, title, subtitle, inView }) {
    return (
        <div className="text-center mb-14">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
            >
                {eyebrow}
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="section-heading"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="section-subheading max-w-xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}

export default function Home() {
    const projectsRef = useRef(null);
    const interestRef = useRef(null);
    const contactRef = useRef(null);

    const projectsInView = useInView(projectsRef, { once: true, margin: '-80px' });
    const interestInView = useInView(interestRef, { once: true, margin: '-80px' });
    const contactInView = useInView(contactRef, { once: true, margin: '-80px' });

    return (
        <main>
            {/* 1. Hero */}
            <HeroSection />

            {/* 2. 3D Tech Keyboard */}
            <TechKeyboard />

            {/* 3. All Projects */}
            <section ref={projectsRef} className="section-padding bg-primary-bg">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        eyebrow="Portfolio"
                        title="Projects"
                        subtitle="Engineering-first work with real-world problem framing, architecture decisions, and measurable results."
                        inView={projectsInView}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Areas of Interest */}
            <section ref={interestRef} className="section-padding bg-secondary-bg">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        eyebrow="What I Work On"
                        title="Areas of Interest"
                        subtitle="My engineering focus spans multiple problem domains — each requiring a different lens."
                        inView={interestInView}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {areasOfInterest.map((area, i) => (
                            <AreaCard key={area.title} area={area} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Contact */}
            <section ref={contactRef} id="contact" className="section-padding bg-primary-bg">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader
                        eyebrow="Contact"
                        title="Let's Build Something"
                        subtitle="Interested in collaborating, have a project idea, or want to discuss an internship? I'd love to hear from you."
                        inView={contactInView}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-2 space-y-4"
                        >
                            {[
                                { Icon: Mail, label: 'Email', value: social.email.display, href: social.email.url },
                                { Icon: Github, label: 'GitHub', value: social.github.display, href: social.github.url },
                                { Icon: Linkedin, label: 'LinkedIn', value: social.linkedin.display, href: social.linkedin.url },
                            ].map(({ Icon, label, value, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Icon size={18} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted mb-0.5">{label}</p>
                                        <p className="text-text-primary text-sm font-medium">{value}</p>
                                    </div>
                                </a>
                            ))}

                            <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    <span className="text-primary font-semibold">Open to:</span> Internships, freelance projects, open source collaboration, and technical mentorship.
                                </p>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-card border border-border rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-text-primary mb-6">Send a Message</h3>
                                <ContactForm />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}