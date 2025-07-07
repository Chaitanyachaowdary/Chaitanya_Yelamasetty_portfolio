// src/components/Contact.jsx

import React from 'react';
import Section from './Section';

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-4xl mx-auto px-6 transition">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-light-gray">Direct Contact</h3>
                    <p className="text-medium-gray leading-relaxed">
                        I'm always open to new opportunities, collaborations, or just a chat! Feel free to reach out directly via these channels:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
                        <div>
                            <p className="font-semibold text-white">📧 Email</p>
                            <a href="mailto:yalamasettychaitanyachowdary@gmail.com" className="text-accent hover:underline block mt-1">
                                yalamasettychaitanyachowdary@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold text-white">📞 Phone</p>
                            <span className="text-medium-gray block mt-1">+91-799385693</span>
                        </div>
                        <div>
                            <p className="font-semibold text-white">💼 LinkedIn</p>
                            <a
                                href="https://www.linkedin.com/in/chaitanya-yelamasetty-a1487b2a5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:underline block mt-1"
                            >
                                linkedin.com/in/chaitanya-yelamasetty-a1487b2a5
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold text-white">💻 GitHub</p>
                            <a
                                href="https://github.com/Chaitanyachaowdary"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:underline block mt-1"
                            >
                                github.com/Chaitanyachaowdary
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
