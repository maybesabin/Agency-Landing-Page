import Marquee from "react-fast-marquee";
import nike from "../assets/nike.png"
import stripe from "../assets/stripe.png"
import huawei from "../assets/huawei.png"
import uber from "../assets/uber.png"
import zoom from "../assets/zoom.png"
import { motion } from "framer-motion"
import { fadeUp } from "@/utils/animation";

const TrustedBy = () => {

    const companies = [
        nike, stripe, huawei, uber, zoom
    ]

    return (
        <div className="w-full pb-12">
            <motion.h1
                initial={{ ...fadeUp.initial, y: 20 }}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                viewport={fadeUp.viewport}
                whileInView={fadeUp.whileInView}
                className="w-full text-center md:text-base text-sm text-neutral-200"
            >
                Trusted by 30+ businesses
            </motion.h1>

            <div className="flex items-center gap-2 mt-6">
                <Marquee pauseOnHover gradient gradientColor="black">
                    {companies.map((item, idx) => (
                        <img
                            className="md:h-20 md:w-20 h-16 w-16 object-contain md:mx-12 mx-6 opacity-50 hover:opacity-100 transition-all"
                            key={idx}
                            src={item}
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default TrustedBy