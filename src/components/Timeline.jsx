import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { timelineData } from '../data/profile';
import SkillBadge from './SkillBadge';

export default function Timeline() {
    const [activeYear, setActiveYear] = useState(null);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <div ref={ref} className="w-full">
            {/* Desktop horizontal timeline */}
            <div className="hidden md:block">
                {/* Year nodes row */}
                <div className="relative mb-4">
                    {/* Horizontal line */}
                    <div className="absolute top-8 left-0 right-0 h-px bg-border" />
                    <motion.div
                        className="absolute top-8 left-0 h-px bg-accent-gradient"
                        initial={{ width: 0 }}
                        animate={inView ? { width: '100%' } : { width: 0 }}
                        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
                    />

                    <div className="relative grid grid-cols-3 gap-0">
                        {timelineData.map((item, i) => (
                            <div key={item.year} className="flex flex-col items-center">
                                {/* Node */}
                                <motion.button
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.3 + i * 0.15, duration: 0.4, type: 'spring', stiffness: 200 }}
                                    onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
                                    className={`relative w-14 h-14 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-300 cursor-pointer z-10 ${activeYear === item.year
                                            ? 'border-transparent text-white shadow-lg shadow-primary/30'
                                            : 'border-border text-text-secondary hover:border-primary/50 hover:text-primary bg-primary-bg'
                                        }`}
                                    style={
                                        activeYear === item.year
                                            ? { background: `linear-gradient(135deg, ${item.color}, ${item.color}aa)` }
                                            : {}
                                    }
                                    aria-label={`View ${item.year} timeline`}
                                >
                                    {item.year}
                                </motion.button>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.5 + i * 0.15 }}
                                    className="text-xs text-text-muted mt-3 text-center"
                                >
                                    {item.title}
                                </motion.p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detail card */}
                <AnimatePresence mode="wait">
                    {activeYear && (() => {
                        const item = timelineData.find((d) => d.year === activeYear);
                        return (
                            <motion.div
                                key={activeYear}
                                initial={{ opacity: 0, y: 20, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                exit={{ opacity: 0, y: -10, height: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                            >
                                <div
                                    className="mt-6 bg-card border rounded-2xl p-8"
                                    style={{ borderColor: `${item.color}30` }}
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                        {/* Summary & highlight */}
                                        <div className="lg:col-span-1">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div
                                                    className="w-3 h-3 rounded-full"
                                                    style={{ backgroundColor: item.color }}
                                                />
                                                <span className="text-2xl font-bold text-text-primary">{item.year}</span>
                                            </div>
                                            <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                                            <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.summary}</p>
                                            <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10">
                                                <Star size={14} className="text-primary mt-0.5 flex-shrink-0" />
                                                <p className="text-text-secondary text-xs leading-relaxed">{item.highlight}</p>
                                            </div>
                                        </div>

                                        {/* Skills & technologies */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">Skills Learned</h4>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {item.skills.map((s) => (
                                                    <SkillBadge key={s} label={s} size="sm" />
                                                ))}
                                            </div>
                                            <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {item.technologies.map((t) => (
                                                    <SkillBadge key={t} label={t} size="sm" />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Projects */}
                                        {item.projects && item.projects.length > 0 && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">Projects Built</h4>
                                                <div className="space-y-3">
                                                    {item.projects.map((p) => (
                                                        <div key={p.name} className="flex gap-3 p-3 bg-primary-bg rounded-xl border border-border">
                                                            <ChevronRight size={14} className="text-primary mt-0.5 flex-shrink-0" />
                                                            <div>
                                                                <p className="text-text-primary text-sm font-medium">{p.name}</p>
                                                                <p className="text-text-muted text-xs mt-0.5 leading-relaxed">{p.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })()}
                </AnimatePresence>

                {!activeYear && (
                    <p className="text-center text-text-muted text-sm mt-6">
                        Click a year to explore details →
                    </p>
                )}
            </div>

            {/* Mobile vertical timeline */}
            <div className="md:hidden space-y-4">
                {timelineData.map((item) => (
                    <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <button
                            onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
                            className="w-full text-left"
                        >
                            <div
                                className={`bg-card border rounded-xl p-5 transition-colors ${activeYear === item.year ? 'border-primary/40' : 'border-border'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: item.color }}>
                                            {item.year.slice(2)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-text-primary">{item.year}</div>
                                            <div className="text-xs text-text-muted">{item.title}</div>
                                        </div>
                                    </div>
                                    <ChevronRight
                                        size={16}
                                        className={`text-text-muted transition-transform ${activeYear === item.year ? 'rotate-90' : ''}`}
                                    />
                                </div>
                            </div>
                        </button>

                        <AnimatePresence>
                            {activeYear === item.year && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="bg-card/50 border border-border border-t-0 rounded-b-xl px-5 pb-5 pt-4 space-y-4">
                                        <p className="text-text-secondary text-sm">{item.summary}</p>
                                        <div>
                                            <p className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">Skills</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {item.skills.map((s) => <SkillBadge key={s} label={s} size="sm" />)}
                                            </div>
                                        </div>
                                        {item.projects && item.projects.length > 0 && (
                                            <div>
                                                <p className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">Projects</p>
                                                {item.projects.map((p) => (
                                                    <div key={p.name} className="text-sm text-text-secondary mb-1">
                                                        <span className="text-primary">→ </span>{p.name}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
