import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const springX = useSpring(x, { stiffness: 500, damping: 28, mass: 0.5 });
    const springY = useSpring(y, { stiffness: 500, damping: 28, mass: 0.5 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const mouseMove = (e) => {
            x.set(e.clientX - (isHovering ? 32 : 16));
            y.set(e.clientY - (isHovering ? 32 : 16));
        };

        const handleMouseOver = (e) => {
            const interactive = e.target.closest('a, button, [role="button"]');
            setIsHovering(Boolean(interactive));
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isHovering, x, y]);

    return (
        <motion.div
            aria-hidden="true"
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block border-2"
            style={{
                x: springX,
                y: springY,
                width: isHovering ? 64 : 32,
                height: isHovering ? 64 : 32,
                backgroundColor: isHovering ? 'rgba(56, 189, 248, 0.1)' : 'rgba(56, 189, 248, 0.3)',
                borderColor: isHovering ? '#0ea5e9' : '#38bdf8',
            }}
        />
    );
};

export default Cursor;
