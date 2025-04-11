import { motion } from 'framer-motion';

const AnimatedText = ({ text, delay = 0, className = "" }: { text: string, delay: number, className: string }) => {
    // Container animation settings
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * i }
        })
    };

    // Letter animation settings
    const child = {
        hidden: {
            opacity: 0,
            y: 50,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            className={`inline-block ${className}`}
        >
            {text.split("").map((char: any, index: number) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default AnimatedText;