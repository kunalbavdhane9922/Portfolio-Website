import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Code2, ArrowUpRight } from 'lucide-react';
import { personal, social } from '../data/profile';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Timeline', path: '/timeline' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

export default function Footer() {
    return (
        <footer className="bg-secondary-bg border-t border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center">
                                <Code2 size={18} className="text-white" />
                            </div>
                            <span className="font-bold text-text-primary">
                                KB<span className="text-primary">.</span>
                            </span>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                            {personal.footerTagline}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-text-muted hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
                        <div className="space-y-3">
                            <a
                                href={social.email.url}
                                className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors text-sm"
                            >
                                <Mail size={16} />
                                {social.email.display}
                            </a>
                            <a
                                href={social.github.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors text-sm"
                            >
                                <Github size={16} />
                                {social.github.display}
                            </a>
                            <a
                                href={social.linkedin.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors text-sm"
                            >
                                <Linkedin size={16} />
                                {social.linkedin.display}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-text-muted text-xs">
                        © {new Date().getFullYear()} {personal.firstName} {personal.lastName}. Built with React & Tailwind CSS.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href={social.github.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors" aria-label="GitHub">
                            <Github size={18} />
                        </a>
                        <a href={social.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                        <a href={social.email.url} className="text-text-muted hover:text-primary transition-colors" aria-label="Email">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
