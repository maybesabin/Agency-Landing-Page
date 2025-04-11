import { ChevronRight } from "lucide-react"
import HeroContent from "../components/HeroContent"

const Hero = () => {
    return (
        <div className="w-full">
            <button className="mt-24 mb-6 relative group overflow-hidden rounded-full p-[1.2px]">

                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-pink-500 rounded-full bg-[length:200%_100%] animate-gradient-x" />

                <div className="relative flex items-center justify-center bg-neutral-950 rounded-full px-4 py-2 font-medium backdrop-blur-sm md:text-sm text-xs">
                    <span className="mr-2">✨</span>
                    <hr className="-ml-1 h-4 w-[1px] shrink-0 bg-gray-300" />
                    &nbsp;&nbsp;
                    <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-pink-500 bg-[length:200%_100%] animate-gradient-x bg-clip-text text-transparent">
                        Launching Soon
                    </span>
                    <ChevronRight size={15} className="ml-2" />
                </div>
            </button>

            <HeroContent />
        </div>
    )
}

export default Hero