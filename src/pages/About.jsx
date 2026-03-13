import { motion } from 'framer-motion';
import { personal, skillCategories, areasOfInterest } from '../data/profile';
import SkillBadge from '../components/SkillBadge';
import { Download, Coffee, BookOpen, Heart, Sparkles } from 'lucide-react';

function SkillCategory({ category, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 100, delay: index * 0.07 }}
            className="cozy-card cozy-noise group relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles size={40} className="text-cozy-amber" />
            </div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl shadow-inner">
                    {category.icon}
                </div>
                <h3 className="font-bold text-xl text-text-primary tracking-tight">{category.name}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} size="sm" className="bg-white/5 border-white/10" />
                ))}
            </div>
        </motion.div>
    );
}

export default function About() {
    return (
        <main className="min-h-screen bg-primary-bg pt-28 pb-32 overflow-hidden relative">
            {/* Decorative Blobs */}
            <div className="cozy-blob w-[500px] h-[500px] bg-primary top-[-10%] right-[-10%]" />
            <div className="cozy-blob w-[400px] h-[400px] bg-purple-500 bottom-[20%] left-[-5%]" />
            <div className="cozy-blob w-[300px] h-[300px] bg-amber-500 top-[40%] left-[10%] opacity-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        The Human Element
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-black text-text-primary tracking-tight leading-tight">
                        Crafting software with <br />
                        <span className="gradient-text">curiosity & care.</span>
                    </h1>
                </motion.div>

                {/* Bio block */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">
                    {/* Avatar blob */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 60, damping: 15 }}
                        className="lg:col-span-5 flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-colors" />
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-[40%_60%_70%_30%/40%_50%_60%_40%] bg-gradient-to-br from-primary to-purple-600 p-1 animate-cozy-blob overflow-hidden relative z-10 shadow-2xl">
                                <div className="w-full h-full bg-card rounded-inherit flex items-center justify-center relative overflow-hidden">
                                    <span className="text-8xl md:text-9xl select-none">👨‍💻</span>
                                    <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="cozy-card cozy-noise space-y-6 border-l-4 border-l-primary/30">
                            <h2 className="text-3xl font-bold text-text-primary">Hi, I'm Kunal. 👋</h2>
                            <div className="space-y-4">
                                {personal.aboutBio.map((paragraph, i) => (
                                    <p key={i} className="text-text-secondary text-lg leading-relaxed font-light">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-5 pt-4">
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3">
                                    <Download size={18} />
                                    <span>Grab my CV</span>
                                </a>
                                <div className="flex items-center gap-3 text-text-muted text-sm px-2">
                                    <Coffee size={18} className="text-cozy-amber" />
                                    <span>Always down for a virtual coffee</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Beyond the Desk */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { 
                                icon: BookOpen, 
                                title: "Current Read", 
                                value: "Designing Data-Intensive Applications",
                                desc: "Diving deep into the 'why' of distributed systems.",
                                color: "text-blue-400"
                            },
                            { 
                                icon: Coffee, 
                                title: "Fuel of Choice", 
                                value: "AeroPress Black",
                                desc: "Precision-brewed for high-octane debugging sessions.",
                                color: "text-cozy-amber"
                            },
                            { 
                                icon: Heart, 
                                title: "Non-Code Joys", 
                                value: "Open Source & Mentoring",
                                desc: "Empowering fellow builders and learning in public.",
                                color: "text-cozy-rose"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                            >
                                <item.icon size={28} className={`${item.color} mb-4 group-hover:scale-110 transition-transform`} />
                                <p className="text-xs uppercase tracking-widest text-text-muted mb-1">{item.title}</p>
                                <h4 className="text-lg font-bold text-text-primary mb-2">{item.value}</h4>
                                <p className="text-sm text-text-secondary font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-32 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 relative z-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4 tracking-tight">Toolkit & Expertise</h2>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto font-light italic">
                            "The best tools are the ones that disappear when you work."
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {skillCategories.map((cat, i) => (
                            <SkillCategory key={cat.id} category={cat} index={i} />
                        ))}
                    </div>
                </div>

                {/* Quick facts / Interests */}
                <div className="cozy-card cozy-noise bg-primary/5 border-primary/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-black text-text-primary mb-6">A bit more about me...</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { label: 'Location', value: personal.location, sub: 'Remote Friendly' },
                                    { label: 'Education', value: personal.degree, sub: 'VIT Pune' },
                                    { label: 'Focus', value: 'Scalable Systems', sub: 'Performance first' },
                                    { label: 'Status', value: personal.availability, sub: 'Let\'s collaborate' },
                                ].map((fact) => (
                                    <div key={fact.label} className="space-y-1">
                                        <p className="text-xs text-primary font-bold uppercase tracking-widest">{fact.label}</p>
                                        <p className="text-lg font-bold text-text-primary">{fact.value}</p>
                                        <p className="text-sm text-text-muted">{fact.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <p className="text-text-secondary text-lg leading-relaxed italic border-l-2 border-primary/20 pl-6 py-2">
                                "I believe great software isn't just about clean code—it's about empathy for the person at the other side of the screen."
                            </p>
                            <div className="h-px bg-white/10 w-full" />
                            <p className="text-text-muted text-sm flex items-center gap-2">
                                <Sparkles size={16} className="text-cozy-rose" />
                                Currently exploring LLM-based autonomous agents and data orchestration patterns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
