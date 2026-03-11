import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'kunal.bavdhane@email.com',
        href: 'mailto:kunal.bavdhane@email.com',
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'github.com/kunalbavdhane',
        href: 'https://github.com/kunalbavdhane',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/kunalbavdhane',
        href: 'https://linkedin.com/in/kunalbavdhane',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'India',
        href: null,
    },
    {
        icon: Clock,
        label: 'Response Time',
        value: 'Usually within 24 hours',
        href: null,
    },
];

export default function Contact() {
    return (
        <main className="min-h-screen bg-primary-bg pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
                    <h1 className="section-heading mb-4">Let's Build Something</h1>
                    <p className="section-subheading max-w-xl mx-auto">
                        Interested in collaborating, have a project idea, or want to discuss an internship?
                        I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <h2 className="text-lg font-bold text-text-primary mb-6">Get in Touch</h2>
                        {contactInfo.map((item) => {
                            const Icon = item.icon;
                            const content = (
                                <div
                                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Icon size={18} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted mb-0.5">{item.label}</p>
                                        <p className="text-text-primary text-sm font-medium">{item.value}</p>
                                    </div>
                                </div>
                            );

                            return item.href ? (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="block"
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={item.label}>{content}</div>
                            );
                        })}

                        {/* Open to opportunities note */}
                        <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl mt-4">
                            <p className="text-text-secondary text-sm leading-relaxed">
                                <span className="text-primary font-semibold">Open to:</span> Internships, freelance projects,
                                open source collaboration, and technical mentorship opportunities.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-card border border-border rounded-2xl p-8">
                            <h2 className="text-lg font-bold text-text-primary mb-6">Send a Message</h2>
                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
