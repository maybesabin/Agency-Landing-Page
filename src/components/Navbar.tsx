import { ArrowUpRight, Plus } from "lucide-react"
import { useState } from "react"

const Navbar = () => {

    const [showOffer, setShowOffer] = useState<boolean | true>(true)

    return (
        <div className="w-full">

            {/* Offer Banner */}
            {showOffer &&
                <>
                    <div className="w-full md:flex hidden items-center justify-between xl:pt-4 xl:-mt-0 -mt-4">
                        <div></div>
                        <div className="text-xs flex items-center gap-2">
                            <h3 className="text-neutral-200">
                                <span className="mr-2 rounded-full bg-[#1e1d24] px-4 py-1">
                                    Only 9 coupon left
                                </span>
                                Get 10% off your first order
                            </h3>
                            <div className="p-[1px] bg-gradient-to-t from-[var(--primary-color)] to-[var(--secondary-color)] rounded-lg">
                                <button className="cursor-pointer bg-black hover:scale-105 transition-all px-4 py-2 rounded-lg">
                                    Get it now!!
                                </button>
                            </div>
                        </div>
                        <Plus
                            onClick={() => setShowOffer(!showOffer)}
                            size={'20px'}
                            className="cursor-pointer rotate-[45deg] p-0.5 rounded-full border border-white"
                        />
                    </div>
                    <div className="bg-neutral-900 h-[1px] w-full mt-3 md:flex hidden"></div>
                </>
            }


            {/* Navbar */}
            <nav className="flex items-center justify-between w-full md:pt-4">
                <h3 className="md:text-3xl text-xl font-semibold">
                    Re<span>ʌ</span>ertex<span>.</span>
                </h3>

                <ul className="-ml-4 md:flex hidden items-center gap-6 md:text-sm text-xs">
                    <li>Why Us</li>
                    <li>Case Studies</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>

                <button className="md:text-sm text-xs bg-gradient-to-br from-blue-800 via-[var(--primary-color)] to-[var(--secondary-color)] rounded-lg px-4 py-2 flex items-center gap-2 font-medium">
                    Let's talk
                    <ArrowUpRight size={'17px'} />
                </button>
            </nav>

            <div className="bg-neutral-900 h-[1px] w-full my-4"></div>

        </div >
    )
}

export default Navbar