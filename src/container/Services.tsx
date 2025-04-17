import Card from "@/components/Card"
import { ChevronDown, ChevronUp, Clock, Layers, SearchCheck, ShieldCheck, Sparkles, UserCheck } from "lucide-react"
import { motion } from "framer-motion"
import { fade, fadeDown, fadeUp } from "@/utils/animation";
import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";

const Services = () => {

    const [showMore, setShowMore] = useState(false);
    const cards = [
        {
            icon: <Layers />,
            title: "Expertise in Figma-to-Webflow",
            description: "From pixel-perfect Figma designs to seamless Webflow builds — we bring your vision to life, flawlessly and responsively."
        },
        {
            icon: <SearchCheck />,
            title: "On-page SEO Excellence",
            description: "Optimized structure, tags, and content to boost visibility, performance, and ranking — all handled with precision and care."
        },
        {
            icon: <Sparkles />,
            title: "Interactive Magic",
            description: "Crafting smooth, delightful interactions that engage users and elevate your site’s user experience beyond the ordinary."
        },
        {
            icon: <UserCheck />,
            title: "Dedicated Project Manager",
            description: "One point of contact, fully aligned with your goals — ensuring clarity, communication, and consistent project progress."
        },
        {
            icon: <ShieldCheck />,
            title: "Comprehensive Testing",
            description: "Rigorous cross-device and cross-browser testing to ensure your website works flawlessly, everywhere."
        },
        {
            icon: <Clock />,
            title: "Timely Delivery",
            description: "We meet deadlines without compromise — delivering high-quality work on time, every time."
        }
    ];

    return (
        <div className="flex flex-col items-start gap-4 pt-24 w-full">
            <motion.h3
                initial={fadeDown.initial}
                transition={fadeDown.transition}
                viewport={fadeDown.viewport}
                whileInView={fadeDown.whileInView}
                className="tracking-[0.5rem] text-[var(--secondary-color)]">
                SERVICE
            </motion.h3>
            <motion.div
                initial={fadeUp.initial}
                transition={{ ...fadeUp.transition, delay: 0.4 }}
                viewport={fadeUp.viewport}
                whileInView={fadeUp.whileInView}
                className="relative flex items-center gap-4 -mt-5"
            >
                <div className="font-medium md:text-5xl text-2xl">
                    <span>Exceeding</span>&nbsp;
                    <AnimatedText text="Expectations" className="" delay={0.2} />
                </div>
                <motion.svg
                    initial={fade.initial}
                    transition={{ ...fade.transition, delay: 1 }}
                    viewport={fade.viewport}
                    whileInView={fade.whileInView}
                    className="rotate-[25deg] fill-[var(--primary-color)] lg:size-[75px] size-[50px]"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L14.0357 8.16153C14.2236 8.63799 14.3175 8.87622 14.4614 9.0771C14.5889 9.25516 14.7448 9.41106 14.9229 9.53859C15.1238 9.68245 15.362 9.77641 15.8385 9.96432L21 12L15.8385 14.0357C15.362 14.2236 15.1238 14.3175 14.9229 14.4614C14.7448 14.5889 14.5889 14.7448 14.4614 14.9229C14.3175 15.1238 14.2236 15.362 14.0357 15.8385L12 21L9.96432 15.8385C9.77641 15.362 9.68245 15.1238 9.53859 14.9229C9.41106 14.7448 9.25516 14.5889 9.0771 14.4614C8.87622 14.3175 8.63799 14.2236 8.16153 14.0357L3 12L8.16153 9.96432C8.63799 9.77641 8.87622 9.68245 9.0771 9.53859C9.25516 9.41106 9.41106 9.25516 9.53859 9.0771C9.68245 8.87622 9.77641 8.63799 9.96432 8.16153L12 3Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
            </motion.div>
            <motion.p
                initial={fade.initial}
                transition={{ ...fade.transition, delay: 0.5 }}
                viewport={fade.viewport}
                whileInView={fade.whileInView}
                className="md:text-sm text-xs text-[#aeacb8] -mt-4"
            >
                We're not just another agency; we're your path to exceptional web projects.
            </motion.p>

            {/* Cards for larger screens*/}
            <div className="lg:grid xl:grid-cols-3 lg:grid-cols-2 hidden gap-6 mt-6 w-full">
                {cards.map((item, idx) => (
                    <motion.div
                        initial={{ ...fadeUp.initial, filter: "blur(20px)" }}
                        transition={{ ...fadeUp.transition, delay: 0.25 * idx }}
                        viewport={fadeUp.viewport}
                        whileInView={fadeUp.whileInView}
                        key={idx}
                        className="w-full"
                    >
                        <Card
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Cards for smaller screens*/}
            <div className="lg:hidden flex flex-wrap gap-6 mt-6">
                {cards.slice(0, showMore ? cards.length : 3).map((item, idx) => (
                    <motion.div
                        initial={{ ...fadeUp.initial, filter: "blur(20px)" }}
                        transition={{ ...fadeUp.transition, delay: 0.25 * idx }}
                        viewport={fadeUp.viewport}
                        whileInView={fadeUp.whileInView}
                        key={idx}
                        className="w-full"
                    >
                        <Card
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={fadeUp.initial}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                viewport={fadeUp.viewport}
                whileInView={fadeUp.whileInView}
                onClick={() => setShowMore(!showMore)}
                className="w-full lg:hidden flex justify-center">
                <button className="flex items-center gap-1 text-xs mt-6 rounded-full bg-gradient-to-tr from-[var(--primary-color)] via-[var(--primary-color)] px-3 py-1.5">
                    {!showMore ?
                        <>
                            <span>
                                Show More
                            </span>
                            <ChevronDown size={'15px'} />
                        </>
                        :
                        <>
                            <span>
                                Show Less
                            </span>
                            <ChevronUp size={'15px'} />
                        </>
                    }
                </button>
            </motion.div>
        </div>
    )
}

export default Services