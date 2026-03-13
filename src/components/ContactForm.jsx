import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// Replace YOUR_FORM_ID with the ID from https://formspree.io
// e.g. if your endpoint is https://formspree.io/f/xaybgpkz
// set FORMSPREE_ID = 'xaybgpkz'
// ─────────────────────────────────────────────────────────────
const FORMSPREE_ID = 'YOUR_FORM_ID';
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required';
        if (!form.email.trim()) errs.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
        if (!form.message.trim()) errs.message = 'Message is required';
        return errs;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setStatus('submitting');
        try {
            const res = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const inputClass = (field) =>
        `w-full bg-card border ${errors[field] ? 'border-red-500/60' : 'border-border'} text-text-primary placeholder-text-muted rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:bg-card/80 transition-colors`;

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-border rounded-2xl p-10 text-center"
            >
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-2">Message Sent!</h3>
                <p className="text-text-secondary text-sm">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 btn-secondary text-sm py-2 px-5"
                >
                    Send another
                </button>
            </motion.div>
        );
    }

    if (status === 'error') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-red-500/20 rounded-2xl p-10 text-center"
            >
                <AlertCircle size={48} className="text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-2">Something went wrong</h3>
                <p className="text-text-secondary text-sm">
                    Your message couldn't be sent. Please try emailing me directly instead.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 btn-secondary text-sm py-2 px-5"
                >
                    Try again
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-text-secondary mb-1.5">
                    Name
                </label>
                <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass('name')}
                    autoComplete="name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-text-secondary mb-1.5">
                    Email
                </label>
                <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass('email')}
                    autoComplete="email"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-text-secondary mb-1.5">
                    Message
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass('message')} resize-none`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? (
                    <>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send size={16} />
                        Send Message
                    </>
                )}
            </button>
        </form>
    );
}
