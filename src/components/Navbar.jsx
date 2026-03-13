import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { social } from '../data/profile';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Timeline', path: '/timeline' },
    { label: 'About', path: '/about' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <nav className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center">
                                <Code2 size={18} className="text-white" />
                            </div>
                            <span className="font-bold text-text-primary group-hover:text-primary transition-colors">
                                KB<span className="text-primary">.</span>
                            </span>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                                ? 'text-primary bg-primary/10'
                                                : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 btn-secondary text-sm py-2 px-4"
                            >
                                Resume
                            </a>
                        </div>

                        {/* Social icons */}
                        <div className="hidden md:flex items-center gap-3">
                            <a
                                href={social.github.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={social.linkedin.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors rounded-lg hover:bg-white/5"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-0 top-16 z-40 glass border-t border-border md:hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                                ? 'text-primary bg-primary/10'
                                                : 'text-text-secondary hover:text-text-primary'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 text-sm font-medium text-primary border border-primary rounded-lg mt-2 text-center"
                            >
                                Download Resume
                            </a>
                            <div className="flex gap-4 px-4 pt-2 pb-1">
                                <a href={social.github.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors" aria-label="GitHub">
                                    <Github size={20} />
                                </a>
                                <a href={social.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors" aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
