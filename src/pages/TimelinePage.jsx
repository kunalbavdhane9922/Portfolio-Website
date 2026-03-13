import { motion } from 'framer-motion';
import Timeline from '../components/Timeline.jsx';
import { timelineStats } from '../data/profile';

export default function TimelinePage() {
    return (
        <main className="min-h-screen bg-primary-bg pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Journey</p>
                    <h1 className="section-heading mb-4">Skills Timeline</h1>
                    <p className="section-subheading max-w-xl mx-auto">
                        Three years of deliberate learning — from fundamentals to full-stack to high performance systems.
                        Click any year to explore what I learned and built.
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Timeline />
                </motion.div>

                {/* Growth stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {timelineStats.map((stat) => (
                        <div key={stat.label} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
                            <div className="text-3xl font-bold gradient-text mb-1">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-text-muted text-sm">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}
