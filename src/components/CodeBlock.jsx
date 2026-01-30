import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const CodeBlock = () => {
    const defaultOptions = {
        reverse: false,
        max: 35,
        perspective: 1000,
        scale: 1.05,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    };

    const codeLines = [
        [
            { text: "const", color: "#c678dd" },
            { text: " ", color: "#abb2bf" },
            { text: "developer", color: "#e5c07b" },
            { text: " ", color: "#abb2bf" },
            { text: "=", color: "#56b6c2" },
            { text: " ", color: "#abb2bf" },
            { text: "{", color: "#abb2bf" },
        ],
        [
            { text: "  ", color: "#abb2bf" },
            { text: "name", color: "#e06c75" },
            { text: ":", color: "#abb2bf" },
            { text: " ", color: "#abb2bf" },
            { text: "'Chaitanya Yelamasetty'", color: "#98c379" },
            { text: ",", color: "#abb2bf" },
        ],
        [
            { text: "  ", color: "#abb2bf" },
            { text: "role", color: "#e06c75" },
            { text: ":", color: "#abb2bf" },
            { text: " ", color: "#abb2bf" },
            { text: "'Junior Backend Developer'", color: "#98c379" },
            { text: ",", color: "#abb2bf" },
        ],
        [
            { text: "  ", color: "#abb2bf" },
            { text: "company", color: "#e06c75" },
            { text: ":", color: "#abb2bf" },
            { text: " ", color: "#abb2bf" },
            { text: "'CodeSage'", color: "#98c379" },
            { text: ",", color: "#abb2bf" },
        ],
        [
            { text: "  ", color: "#abb2bf" },
            { text: "skills", color: "#e06c75" },
            { text: ":", color: "#abb2bf" },
            { text: " ", color: "#abb2bf" },
            { text: "[", color: "#abb2bf" },
        ],
        [
            { text: "    ", color: "#abb2bf" },
            { text: "'Python'", color: "#98c379" },
            { text: ",", color: "#abb2bf" },
            { text: " ", color: "#abb2bf" },
            { text: "'FastAPI'", color: "#98c379" },
            { text: ",", color: "#abb2bf" },
        ],
        [
            { text: "    ", color: "#abb2bf" },
            { text: "'React'", color: "#98c379" },
            { text: ",", color: "#abb2bf" },
            { text: " ", color: "#abb2bf" },
            { text: "'SQL'", color: "#98c379" },
        ],
        [
            { text: "  ", color: "#abb2bf" },
            { text: "]", color: "#abb2bf" },
            { text: ",", color: "#abb2bf" },
        ],
        [
            { text: "  ", color: "#abb2bf" },
            { text: "hardWorker", color: "#e06c75" },
            { text: ":", color: "#abb2bf" },
            { text: " ", color: "#abb2bf" },
            { text: "true", color: "#d19a66" },
            { text: ",", color: "#abb2bf" },
        ],
        [
            { text: "  ", color: "#abb2bf" },
            { text: "problemSolver", color: "#e06c75" },
            { text: ":", color: "#abb2bf" },
            { text: " ", color: "#abb2bf" },
            { text: "true", color: "#d19a66" },
            { text: ",", color: "#abb2bf" },
        ],
        [
            { text: "  ", color: "#abb2bf" },
            { text: "hireable", color: "#61afef" },
            { text: ":", color: "#abb2bf" },
            { text: " ", color: "#abb2bf" },
            { text: "function", color: "#56b6c2" },
            { text: "()", color: "#abb2bf" },
            { text: " ", color: "#abb2bf" },
            { text: "{", color: "#abb2bf" },
        ],
        [
            { text: "    ", color: "#abb2bf" },
            { text: "return", color: "#c678dd" },
            { text: " ", color: "#abb2bf" },
            { text: "true", color: "#d19a66" },
            { text: ";", color: "#abb2bf" },
        ],
        [
            { text: "  ", color: "#abb2bf" },
            { text: "}", color: "#abb2bf" },
        ],
        [
            { text: "}", color: "#abb2bf" },
        ],
    ];

    const [visibleChars, setVisibleChars] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    // Calculate total characters
    const totalChars = codeLines.reduce((acc, line) => {
        return acc + line.reduce((lineAcc, token) => lineAcc + token.text.length, 0);
    }, 0);

    useEffect(() => {
        if (visibleChars < totalChars) {
            const timeout = setTimeout(() => {
                setVisibleChars(prev => prev + 1);
            }, 30); // Typing speed
            return () => clearTimeout(timeout);
        } else {
            setIsTyping(false);
        }
    }, [visibleChars, totalChars]);

    // Render logic helper
    let currentCharCount = 0;

    return (
        <Tilt options={defaultOptions} className="w-full max-w-lg mx-auto">
            <motion.div
                className="bg-[#1e1e1e] rounded-xl shadow-2xl border border-gray-800 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 relative"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
                {/* Window Header */}
                <div className="bg-[#2d2d2d] px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <div className="flex-grow text-center text-xs text-gray-400 font-mono">
                        developer.js
                    </div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto min-h-[350px]">
                    {codeLines.map((line, lineIndex) => {
                        return (
                            <div key={lineIndex} className="flex">
                                <span className="text-gray-500 w-6 select-none flex-shrink-0 text-right pr-4">{lineIndex + 1}</span>
                                <div className="whitespace-pre">
                                    {line.map((token, tokenIndex) => {
                                        const tokenStart = currentCharCount;
                                        const tokenEnd = tokenStart + token.text.length;
                                        currentCharCount += token.text.length;

                                        if (visibleChars >= tokenEnd) {
                                            // Fully visible
                                            return <span key={tokenIndex} style={{ color: token.color }}>{token.text}</span>;
                                        } else if (visibleChars > tokenStart) {
                                            // Partially visible
                                            return <span key={tokenIndex} style={{ color: token.color }}>{token.text.slice(0, visibleChars - tokenStart)}</span>;
                                        } else {
                                            // Not visible
                                            return null;
                                        }
                                    })}
                                    {/* Cursor Logic tied to line */}
                                    {visibleChars >= currentCharCount - line.reduce((a, b) => a + b.text.length, 0) && visibleChars < currentCharCount && (
                                        <span className="inline-block w-2.5 h-4 bg-accent align-middle animate-pulse ml-0.5"></span>
                                    )}
                                    {/* Cursor at the very end when active */}
                                    {isTyping && lineIndex === codeLines.length - 1 && visibleChars >= totalChars && (
                                        <span className="inline-block w-2.5 h-4 bg-accent align-middle animate-pulse ml-0.5"></span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Clean Reflection/Glow Effect */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-accent/20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 rounded-full bg-primary/20 blur-3xl"></div>
            </motion.div>
        </Tilt>
    );
};

export default CodeBlock;
