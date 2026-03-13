import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { technologies } from '../data/profile';

// Keyboard layout — 4 rows matching a real keyboard shape
// Each row has a different number of keys and offset
const keyboardLayout = [
    { keys: technologies.filter(t => t.category === 'Languages'), offset: 0 },
    { keys: technologies.filter(t => t.category === 'Frontend'), offset: 24 },
    { keys: technologies.filter(t => t.category === 'Backend'), offset: 12 },
    { keys: technologies.filter(t => t.category === 'DevOps'), offset: 36 },
];

function TechKey({ tech, index, rowIndex }) {
    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const totalDelay = rowIndex * 0.12 + index * 0.06;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
                delay: totalDelay,
                duration: 0.5,
                type: 'spring',
                stiffness: 120,
                damping: 14,
            }}
            className="tech-key-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
        >
            {/* The keycap */}
            <div
                className={`tech-keycap ${isPressed ? 'tech-keycap-pressed' : ''}`}
                style={{
                    '--key-color': tech.color,
                    '--key-glow': `${tech.color}40`,
                    boxShadow: isHovered
                        ? `0 0 20px ${tech.color}30, 0 0 40px ${tech.color}15, inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 0 #0f172a, 0 6px 10px rgba(0,0,0,0.4)`
                        : `inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 0 #0f172a, 0 6px 10px rgba(0,0,0,0.3)`,
                }}
            >
                {/* Devicon icon */}
                <i
                    className={`${tech.icon} tech-key-icon`}
                    style={{
                        color: isHovered ? tech.color : '#94A3B8',
                        filter: isHovered ? `drop-shadow(0 0 8px ${tech.color}60)` : 'none',
                    }}
                />

                {/* LED indicator */}
                <div
                    className="tech-key-led"
                    style={{
                        backgroundColor: isHovered ? tech.color : '#334155',
                        boxShadow: isHovered ? `0 0 6px ${tech.color}` : 'none',
                    }}
                />
            </div>

            {/* Tooltip */}
            <div
                className={`tech-key-tooltip ${isHovered ? 'tech-key-tooltip-visible' : ''}`}
                style={{ borderColor: `${tech.color}40` }}
            >
                <span
                    className="text-xs font-semibold"
                    style={{ color: tech.color }}
                >
                    {tech.name}
                </span>
            </div>
        </motion.div>
    );
}

export default function TechKeyboard() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section ref={ref} className="section-padding bg-secondary-bg overflow-hidden">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
                    >
                        Tech Stack
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="section-heading mb-3"
                    >
                        My Keyboard
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="section-subheading max-w-xl mx-auto"
                    >
                        Every key represents a technology I've worked with. Hover to glow. Press to feel the click.
                    </motion.p>
                </div>

                {/* 3D Keyboard */}
                <motion.div
                    initial={{ opacity: 0, rotateX: 15, scale: 0.9 }}
                    animate={inView ? { opacity: 1, rotateX: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="tech-keyboard-container"
                >
                    {/* Keyboard body */}
                    <div className="tech-keyboard-body">
                        {/* Power LED */}
                        <div className="tech-keyboard-power-led" />

                        {/* Key rows */}
                        {keyboardLayout.map((row, rowIdx) => (
                            <div
                                key={rowIdx}
                                className="tech-keyboard-row"
                                style={{ paddingLeft: `${row.offset}px` }}
                            >
                                {row.keys.map((tech, keyIdx) => (
                                    <TechKey
                                        key={tech.id}
                                        tech={tech}
                                        index={keyIdx}
                                        rowIndex={rowIdx}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Reflection / shine lines */}
                    <div className="tech-keyboard-shine" />
                </motion.div>

                {/* Category legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-6 mt-10"
                >
                    {['Languages', 'Frontend', 'Backend', 'DevOps'].map((cat) => (
                        <div key={cat} className="flex items-center gap-2 text-xs text-text-muted">
                            <div className="w-2 h-2 rounded-full bg-primary/60" />
                            <span>{cat}</span>
                            <span className="text-text-muted/50">
                                ({technologies.filter(t => t.category === cat).length})
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
