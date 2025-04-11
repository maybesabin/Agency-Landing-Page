import { ArrowUpRight } from "lucide-react"
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { motion } from "framer-motion"
import { fadeDown, fadeUp } from "@/utils/animation"
import AnimatedText from "./AnimatedText"

const HeroContent = () => {
    return (
        <div className="w-full lg:min-h-[70vh] flex flex-col items-start gap-6">
            <motion.h1
                initial={fadeUp.initial}
                animate={fadeUp.animate}
                transition={{ ...fadeUp.transition, delay: 0.5 }}
                className="lg:text-8xl md:text-6xl text-4xl lg:*:leading-[6.5rem] font-semibold relative">
                <AnimatedText text="We develop" delay={0.1} className="" />
                <svg
                    className="lg:top-0 -top-2  left-[68%] rotate-[20deg] absolute fill-[var(--primary-color)] lg:size-[100px] md:size-[75px] size-[50px]"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L14.0357 8.16153C14.2236 8.63799 14.3175 8.87622 14.4614 9.0771C14.5889 9.25516 14.7448 9.41106 14.9229 9.53859C15.1238 9.68245 15.362 9.77641 15.8385 9.96432L21 12L15.8385 14.0357C15.362 14.2236 15.1238 14.3175 14.9229 14.4614C14.7448 14.5889 14.5889 14.7448 14.4614 14.9229C14.3175 15.1238 14.2236 15.362 14.0357 15.8385L12 21L9.96432 15.8385C9.77641 15.362 9.68245 15.1238 9.53859 14.9229C9.41106 14.7448 9.25516 14.5889 9.0771 14.4614C8.87622 14.3175 8.63799 14.2236 8.16153 14.0357L3 12L8.16153 9.96432C8.63799 9.77641 8.87622 9.68245 9.0771 9.53859C9.25516 9.41106 9.41106 9.25516 9.53859 9.0771C9.68245 8.87622 9.77641 8.63799 9.96432 8.16153L12 3Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <br />
                <motion.span
                    initial={fadeUp.initial}
                    animate={fadeUp.animate}
                    transition={{ ...fadeUp.transition, delay: 0.7 }}
                    className="bg-gradient-to-l from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                    amazing&nbsp;
                </motion.span>
                <AnimatedText delay={0.7} text="websites" className="" />
                <br />
                <motion.span
                    initial={fadeUp.initial}
                    animate={fadeUp.animate}
                    transition={{ ...fadeUp.transition, delay: 1 }}
                >
                    for your business
                </motion.span>
                <AnimatedText delay={1} text="." className="text-[var(--primary-color)]" />
            </motion.h1>
            <motion.p
                initial={fadeUp.initial}
                animate={fadeUp.animate}
                transition={{ ...fadeUp.transition, delay: 0.75 }}
                className="lg:w-[55%] w-[85%] lg:text-base md:text-sm text-xs text-neutral-400">
                Discover our seamless workflow as we transform Figma designs into stunning Webflow websites. Explore the synergy between design and development for a pixel-perfect online experience.
            </motion.p>

            <motion.div
                initial={{ ...fadeDown.initial, y: -20 }}
                animate={fadeDown.animate}
                transition={{ ...fadeDown.transition, delay: 1 }}
                className="flex md:flex-row flex-col-reverse md:items-center items-start gap-5"
            >
                <div className="p-[1px] bg-gradient-to-t from-[var(--primary-color)] to-[var(--secondary-color)] rounded-lg">
                    <button className="flex items-center gap-2 cursor-pointer bg-black hover:scale-105 transition-all px-4 py-2 rounded-lg md:text-sm text-xs">
                        View Work
                        <ArrowUpRight size={'17px'} />
                    </button>
                </div>
                <div className="flex items-center">
                    <AnimatedTooltip />
                    <div className="ml-8">
                        <h4 className="md:text-sm text-xs font-medium">1000+</h4>
                        <p className="text-neutral-400 text-xs">Satisfied Clients</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default HeroContent