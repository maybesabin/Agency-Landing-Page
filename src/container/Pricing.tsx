import AnimatedText from "@/components/AnimatedText"
import PricingCard from "@/components/PricingCard"
import { fade, fadeDown, fadeUp } from "@/utils/animation"
import { motion } from "framer-motion"

const Pricing = () => {
    const plans = [
        {
            title: "Basic",
            price: 445,
            description: "Fully responsive 1 page website, developed in Webflow. Unlimited Sections.",
            features: ["Responsive Website", "Content Upload", "Functional Website"]
        },
        {
            title: "Standard",
            price: 745,
            description: "Responsive 3 page website with animations, built in Webflow. Basic SEO optimization.",
            features: ["Responsive Website", "Content Upload", "Functional Website", "Animations", "Basic SEO"]
        },
        {
            title: "Premium",
            price: 1145,
            description: "Full custom multi-page website, advanced animations, CMS integration, and premium support.",
            features: ["Responsive Website", "Content Upload", "Functional Website", "Advanced Animations", "CMS Integration", "Premium Support"]
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
                PRICING
            </motion.h3>
            <motion.div
                initial={fadeUp.initial}
                transition={{ ...fadeUp.transition, delay: 0.4 }}
                viewport={fadeUp.viewport}
                whileInView={fadeUp.whileInView}
                className="relative flex items-start gap-4 -mt-2"
            >
                <div className="font-medium md:text-5xl text-2xl">
                    <span>One fixed price to get<br /></span>
                    <AnimatedText text="your project done" className="" delay={0.2} />
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
                className="md:text-sm text-xs text-[#aeacb8] mt-1"
            >
                Your custom on-demand team for only a single payment
            </motion.p>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6 w-full">
                {plans.map((item, idx) => (
                    <motion.div
                        initial={fadeUp.initial}
                        transition={{ ...fadeUp.transition, delay: 0.1 * (idx + 1) }}
                        viewport={fadeUp.viewport}
                        whileInView={fadeUp.whileInView}
                        key={idx}
                    >
                        <PricingCard
                            title={item.title}
                            description={item.description}
                            features={item.features}
                            price={item.price}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Pricing