import { ArrowUpRight, BadgeCheck } from "lucide-react"

const PricingCard = ({
    title,
    description,
    price,
    features
}: {
    title: string,
    description: string,
    price: number,
    features: any
}) => {
    return (
        <div className="border rounded-lg p-4 w-full flex flex-col items-start justify-between gap-4 md:h-[31rem] bg-black">
            <div className="flex flex-col items-start gap-4">
                <h3 className="text-neutral-200 md:text-xl text-base font-medium">{title}</h3>
                <h1 className="font-semibold md:text-5xl text-2xl">
                    ${price}
                </h1>
                <p className="text-neutral-400 md:text-sm text-xs">
                    {description}
                </p>
                <ul className="mt-2 text-neutral-200 md:text-base text-sm flex flex-col items-start gap-3">
                    {features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2">
                            <BadgeCheck color="black" className="fill-[var(--primary-color)]" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button className="cursor-pointer w-full flex items-center justify-center gap-2 md:text-base text-sm mt-2 py-4 rounded-lg border opacity-75 hover:opacity-100 hover:bg-neutral-950 transition-all">
                <span>Get Started</span>
                <ArrowUpRight size={'20px'} color="white" />
            </button>
        </div>
    )
}

export default PricingCard