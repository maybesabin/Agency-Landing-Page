import AnimatedText from "@/components/AnimatedText"
import TestimonialCard from "@/components/TestimonialCard";
import { fade, fadeDown, fadeUp } from "@/utils/animation"
import { motion } from "framer-motion"

const Testimonials = () => {

    const testimonials = [
        {
            name: "Jason Lee",
            rating: 5,
            review: "Absolutely amazing service! Exceeded expectations with clear communication and great results. The team was proactive, offered helpful suggestions, and ensured the project stayed on track throughout.",
            position: "CEO of Zenith Tech",
            image: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            name: "Emily Carter",
            rating: 4,
            review: "Very professional team. Delivered on time with quality that impressed us all. They handled last-minute changes well and remained responsive and helpful during the whole process.",
            position: "Marketing Manager, Bloom Inc.",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            name: "Daniel Ruiz",
            rating: 3,
            review: "Good experience overall. Some issues came up, but they were resolved quickly. The final outcome matched our needs, though it required a few revisions and adjustments.",
            position: "Freelance Consultant",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Sophia Bennett",
            rating: 5,
            review: "Top-notch quality and dedication. The results were better than we expected. They paid close attention to our goals, which made the final product truly exceptional.",
            position: "Client",
            image: "https://randomuser.me/api/portraits/women/22.jpg"
        },
        {
            name: "Michael Young",
            rating: 3,
            review: "Service was average. Some delays and miscommunication impacted our project timeline. Support tried to fix the problems, but we still experienced some unmet expectations in delivery.",
            position: "Founder, QuickStart Solutions",
            image: "https://randomuser.me/api/portraits/men/77.jpg"
        },
        {
            name: "Ava Thompson",
            rating: 4,
            review: "Great communication, solid results, and a team that truly cares. We appreciated their design input and willingness to accommodate feedback throughout the development phase of our project.",
            position: "Product Designer, NeoApps",
            image: "https://randomuser.me/api/portraits/women/12.jpg"
        }
    ];

    return (
        <div className="w-full pt-24 flex flex-col items-start gap-4">
            <motion.h3
                initial={fadeDown.initial}
                transition={fadeDown.transition}
                viewport={fadeDown.viewport}
                whileInView={fadeDown.whileInView}
                className="tracking-[0.5rem] text-[var(--secondary-color)]">
                TESTIMONIALS
            </motion.h3>
            <motion.div
                initial={fadeUp.initial}
                transition={{ ...fadeUp.transition, delay: 0.4 }}
                viewport={fadeUp.viewport}
                whileInView={fadeUp.whileInView}
                className="relative flex items-center gap-4 -mt-5"
            >
                <div className="font-medium md:text-5xl text-2xl">
                    <span>Our Customer</span>&nbsp;
                    <AnimatedText text="Says" className="" delay={0.2} />
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
                Don't take our word for it. Hear it from our happy clients.
            </motion.p>

            {/* For larger screens */}
            <div className="w-full md:grid hidden lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
                {testimonials.map((_, idx) => (
                    <motion.div
                        initial={{ ...fadeUp.initial, filter: "blur(20px)" }}
                        transition={{ ...fadeUp.transition, delay: 0.25 * idx }}
                        viewport={fadeUp.viewport}
                        whileInView={fadeUp.whileInView}
                        className="w-full"
                    >
                        <TestimonialCard
                            key={idx}
                            image={_.image}
                            review={_.review}
                            rating={_.rating}
                            position={_.position}
                            name={_.name}

                        />
                    </motion.div>
                ))}
            </div>

            {/* For smaller screens */}
            <div className="w-full md:hidden grid grid-cols-1 gap-6 mt-6">
                {testimonials.slice(0, 4).map((_, idx) => (
                    <motion.div
                        initial={{ ...fadeUp.initial, filter: "blur(20px)" }}
                        transition={{ ...fadeUp.transition, delay: 0.25 * idx }}
                        viewport={fadeUp.viewport}
                        whileInView={fadeUp.whileInView}
                        className="w-full"
                    >
                        <TestimonialCard
                            key={idx}
                            image={_.image}
                            review={_.review}
                            rating={_.rating}
                            position={_.position}
                            name={_.name}

                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials