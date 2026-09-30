// src/components/Contact.jsx

import React, { useState } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../lib/whatsapp';

// Inline SVGs rather than emoji: the emoji set rendered inconsistently across
// platforms and did not match the icons used elsewhere on the page.
const Icon = {
    mail: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 6-10 7L2 6" />
        </svg>
    ),
    phone: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    ),
    linkedin: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-4.47 6.029 0V24H24V13.869C24 5.989 15.078 6.279 12.982 10.155V8z" />
        </svg>
    ),
    github: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    ),
    whatsapp: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
        </svg>
    ),
    x: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.901 1.144h3.762L14.417 9.87l7.545 11.002h-6.24L11.564 12.012l-6.31 8.864H1.385l8.037-11.196L1.082 1.144h7.828l4.914 6.789L18.901 1.144z" />
        </svg>
    ),
};

const ContactItem = ({ icon, label, value, href, delay }) => {
    const isExternal = /^https?:/i.test(href);
    return (
        <motion.a
            href={href}
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            aria-label={`${label}: ${value}`}
            className="flex items-center gap-4 p-4 bg-secondary/50 backdrop-blur-sm border border-secondary rounded-xl hover:border-accent/50 hover:bg-secondary/80 transition-colors duration-300 group"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
        >
            <span className="w-11 h-11 shrink-0 bg-primary/80 rounded-full flex items-center justify-center text-accent shadow-inner group-hover:scale-110 transition-transform duration-300">
                <span className="w-5 h-5 block">{icon}</span>
            </span>
            <span className="min-w-0">
                <span className="block text-xs text-medium-gray font-medium mb-0.5">{label}</span>
                <span className="block text-light-gray font-semibold group-hover:text-accent transition-colors truncate">{value}</span>
            </span>
        </motion.a>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    const fallbackEmail = 'chaitanyachowdary4e3@gmail.com';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        if (!endpoint) {
            const phoneLine = formData.phone ? `\nPhone: ${formData.phone}` : '';
            const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}${phoneLine}\n\n${formData.message}`);
            window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent('Portfolio contact from ' + formData.name)}&body=${body}`;
            setIsSubmitting(false);
            return;
        }

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error(`Request failed: ${res.status}`);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    // border-slate-500 rather than border-secondary: a form field's boundary is a
    // UI component under WCAG 1.4.11, which needs 3:1 against its background.
    // border-secondary (#161e2e) measured 1.05:1 here — effectively invisible.
    const field = 'w-full px-4 py-3 bg-primary/50 border border-medium-gray rounded-lg text-light-gray placeholder:text-medium-gray transition-colors focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30';

    return (
        <Section
            id="contact"
            title="Get In Touch"
            eyebrow="Contact"
            intro="Have a role, a project, or a question? Message me here or on WhatsApp — I read every one."
        >
            {/* Entrance animations translate on X; clip so they can never widen the page. */}
            <div className="max-w-6xl mx-auto overflow-x-clip">
                <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-8 lg:gap-12 items-stretch">

                    {/* Left Column: Contact Info */}
                    <div className="flex flex-col min-w-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-light-gray mb-4">Let's Connect</h3>
                            <p className="text-medium-gray text-lg mb-8 leading-relaxed">
                                I'm open to <span className="text-accent font-semibold">remote full-stack &amp; DevOps roles</span>{' '}
                                as a Full Stack &amp; DevOps Engineer, and I also take on freelance projects.
                                Have a role in mind, a question, or just want to say hi? Feel free to reach out!
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                            <ContactItem
                                icon={Icon.mail}
                                label="Email"
                                value="chaitanyachowdary4e3@gmail.com"
                                href="mailto:chaitanyachowdary4e3@gmail.com"
                                delay={0.3}
                            />
                            <ContactItem
                                icon={Icon.phone}
                                label="Phone"
                                value="+91 79938 56293"
                                href="tel:+917993856293"
                                delay={0.35}
                            />
                            <ContactItem
                                icon={Icon.whatsapp}
                                label="WhatsApp"
                                value="Message me directly"
                                href={WHATSAPP_URL}
                                delay={0.375}
                            />
                            <ContactItem
                                icon={Icon.linkedin}
                                label="LinkedIn"
                                value="chaitanya-yelamasetty"
                                href="https://www.linkedin.com/in/chaitanya-yelamasetty"
                                delay={0.4}
                            />
                            <ContactItem
                                icon={Icon.github}
                                label="GitHub"
                                value="Chaitanyachaowdary"
                                href="https://github.com/Chaitanyachaowdary"
                                delay={0.45}
                            />
                            <ContactItem
                                icon={Icon.x}
                                label="X (Twitter)"
                                value="chaitanyatarak9"
                                href="https://x.com/chaitanyatarak9"
                                delay={0.5}
                            />
                        </div>
                    </div>

                    {/* Right Column: Contact Form — stretches to match the left column */}
                    <motion.div
                        className="bg-secondary/30 backdrop-blur-md border border-secondary p-6 sm:p-8 rounded-2xl shadow-xl min-w-0 w-full h-full flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold text-light-gray mb-1">Send a Message</h3>
                        <p className="text-sm text-medium-gray mb-1">I usually reply within a day.</p>
                        <p id="form-required-hint" className="text-sm text-medium-gray mb-6">Name, email and message are required.</p>

                        <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-medium-gray mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    autoComplete="name"
                                    aria-describedby="form-required-hint"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={field}
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-medium-gray mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    autoComplete="email"
                                    aria-describedby="form-required-hint"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={field}
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-medium-gray mb-2">
                                    Phone <span className="text-medium-gray font-normal">(optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={field}
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                            <div className="flex flex-col flex-grow min-h-[7rem]">
                                <label htmlFor="message" className="block text-sm font-medium text-medium-gray mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    aria-describedby="form-required-hint"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`${field} flex-grow resize-none`}
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${isSubmitting
                                    ? 'bg-secondary text-medium-gray cursor-not-allowed'
                                    : 'bg-accent text-primary hover:bg-accent-hover shadow-lg hover:shadow-accent/30'
                                    }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {/* Announced to screen readers as soon as it appears. */}
                            <div role="status" aria-live="polite" className="empty:hidden">
                                {submitStatus === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center text-sm font-medium"
                                    >
                                        Message sent successfully!
                                    </motion.p>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center text-sm font-medium"
                                    >
                                        Something went wrong. Please email me directly.
                                    </motion.p>
                                )}
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </Section>
    );
};

export default Contact;
