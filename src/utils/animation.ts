export const fadeUp = {
    initial: { opacity: 0, y: 50, filter: "blur(10px)" },
    animate: { opacity: 100, y: 0, filter: "blur(0px)" },
    transition: {
        duration: 0.5,
        ease: "easeInOut"
    },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.2 },
}

export const fadeDown = {
    initial: { opacity: 0, y: -50, filter: "blur(10px)" },
    animate: { opacity: 100, y: 0, filter: "blur(0px)" },
    transition: {
        duration: 0.5,
        ease: "easeInOut"
    },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
}

export const fade = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 100, filter: "blur(0px)" },
    transition: {
        duration: 0.5,
        ease: "easeInOut"
    },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
}