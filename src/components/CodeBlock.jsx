import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const CodeBlock = () => {
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
      { text: "  name: 'Chaitanya Yelamasetty',", color: "#98c379" },
    ],
    [
      { text: "  role: 'Junior Backend Developer',", color: "#98c379" },
    ],
    [
      { text: "  company: 'CodeSage',", color: "#98c379" },
    ],
    [
      { text: "  skills: ['Python', 'FastAPI', 'React', 'SQL'],", color: "#98c379" },
    ],
    [
      { text: "  hardWorker: true,", color: "#d19a66" },
    ],
    [
      { text: "  problemSolver: true,", color: "#d19a66" },
    ],
    [
      { text: "  hireable() { return true; }", color: "#56b6c2" },
    ],
    [
      { text: "};", color: "#abb2bf" },
    ],
  ];

  const [visibleChars, setVisibleChars] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const totalChars = codeLines.reduce(
    (acc, line) => acc + line.reduce((l, t) => l + t.text.length, 0),
    0
  );

  useEffect(() => {
    if (visibleChars < totalChars) {
      const timeout = setTimeout(
        () => setVisibleChars((prev) => prev + 1),
        30
      );
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [visibleChars, totalChars]);

  let currentCharCount = 0;

  return (
    <Tilt
      tiltMaxAngleX={35}
      tiltMaxAngleY={35}
      perspective={1000}
      scale={1.05}
      transitionSpeed={1000}
      gyroscope={true}
      className="w-full max-w-lg mx-auto"
    >
      <motion.div
        className="bg-[#1e1e1e] rounded-xl shadow-2xl border border-gray-800 overflow-hidden relative"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      >
        {/* Header */}
        <div className="bg-[#2d2d2d] px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <div className="flex-grow text-center text-xs text-gray-400 font-mono">
            developer.js
          </div>
        </div>

        {/* Code */}
        <div className="p-6 font-mono text-sm leading-relaxed min-h-[300px]">
          {codeLines.map((line, lineIndex) => (
            <div key={lineIndex} className="flex">
              <span className="text-gray-500 w-6 text-right pr-4">
                {lineIndex + 1}
              </span>
              <div className="whitespace-pre">
                {line.map((token, tokenIndex) => {
                  const start = currentCharCount;
                  const end = start + token.text.length;
                  currentCharCount += token.text.length;

                  if (visibleChars >= end) {
                    return (
                      <span key={tokenIndex} style={{ color: token.color }}>
                        {token.text}
                      </span>
                    );
                  }
                  if (visibleChars > start) {
                    return (
                      <span key={tokenIndex} style={{ color: token.color }}>
                        {token.text.slice(0, visibleChars - start)}
                      </span>
                    );
                  }
                  return null;
                })}

                {isTyping &&
                  visibleChars === currentCharCount &&
                  lineIndex === codeLines.length - 1 && (
                    <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse" />
                  )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default CodeBlock;
