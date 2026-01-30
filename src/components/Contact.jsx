// src/components/Contact.jsx

import React, { useState } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const ContactItem = ({ icon, label, value, href, delay }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-4 bg-secondary/50 backdrop-blur-sm border border-secondary rounded-xl hover:border-accent/50 hover:bg-secondary/80 transition-all duration-300 group"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        whileHover={{ scale: 1.02 }}
    >
        <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center text-accent text-xl shadow-inner mr-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <div>
            <p className="text-sm text-medium-gray font-medium mb-0.5">{label}</p>
            <p className="text-light-gray font-semibold group-hover:text-accent transition-colors truncate max-w-[200px] sm:max-w-xs">{value}</p>
        </div>
    </motion.a>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            console.log('Form Submitted:', formData);
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus(null), 3000);
        }, 1500);
    };

    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Contact Info */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-light-gray mb-4">Let's Connect</h3>
                            <p className="text-medium-gray text-lg mb-8 leading-relaxed">
                                I'm currently looking for new opportunities as a Full Stack Developer.
                                Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
                            </p>
                        </motion.div>

                        <div className="flex flex-col space-y-4">
                            <ContactItem
                                icon="📧"
                                label="Email"
                                value="ychaitanya317@gmail.com"
                                href="mailto:ychaitanya317@gmail.com"
                                delay={0.3}
                            />
                            <ContactItem
                                icon="📞"
                                label="Phone"
                                value="+91-799385693"
                                href="tel:+91799385693"
                                delay={0.4}
                            />
                            <ContactItem
                                icon="💼"
                                label="LinkedIn"
                                value="chaitanya-yelamasetty"
                                href="https://www.linkedin.com/in/chaitanya-yelamasetty"
                                delay={0.5}
                            />
                            <ContactItem
                                icon="💻"
                                label="GitHub"
                                value="Chaitanyachaowdary"
                                href="https://github.com/Chaitanyachaowdary"
                                delay={0.6}
                            />
                            <ContactItem
                                icon="✖️"
                                label="X (Twitter)"
                                value="Chaitanya154975"
                                href="https://x.com/Chaitanya154975"
                                delay={0.7}
                            />
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        className="bg-secondary/30 backdrop-blur-md border border-secondary p-8 rounded-2xl shadow-xl"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-light-gray mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-medium-gray mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-primary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent text-light-gray transition-colors"
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
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-primary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent text-light-gray transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-medium-gray mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-primary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent text-light-gray transition-colors resize-none"
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

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center text-sm font-medium"
                                >
                                    Message sent successfully!
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </Section>
    );
};

export default Contact;
