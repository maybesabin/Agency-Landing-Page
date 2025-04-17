import { ArrowUpRight } from "lucide-react"
import React, { JSX } from "react"

const Card = ({
    icon,
    title,
    description
}: {
    icon: JSX.Element,
    title: string,
    description: string
}) => {

    const styledIcon = React.cloneElement(icon, {
        className: "text-neutral-200 h-8 w-8"
    })

    return (
        <div className="w-full bg-neutral-950 rounded-xl px-4 py-8 flex flex-col items-start gap-4">
            <div className="bg-[#383546] h-16 w-16 rounded-md flex items-center justify-center">
                {styledIcon}
            </div>
            <h4 className="md:text-xl text-base font-medium">{title}</h4>
            <p className="md:text-sm text-xs text-[#aeacb8]">
                {description}
            </p>
            <div className="mt-2 flex items-center gap-2 border rounded-md md:text-sm text-xs text-neutral-300 cursor-pointer opacity-75 hover:opacity-100 transition-all px-4 py-2">
                <span>Learn More</span>
                <ArrowUpRight size={'17px'} />
            </div>
        </div>
    )
}

export default Card