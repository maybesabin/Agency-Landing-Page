import { Quote, Star } from "lucide-react";

interface PropsType {
    rating: number;
    review: string;
    position: string;
    image: string;
    name: string;
}

const TestimonialCard = ({
    rating,
    review,
    position,
    image,
    name
}:
    PropsType
) => {
    return (
        <div className="w-full border rounded-md flex flex-col items-start gap-6 p-4 bg-black">
            <div className="flex items-center gap-2">
                {Array.from({ length: rating }, (_, idx) => (
                    <Star
                        key={idx}
                        className="text-yellow-400 fill-yellow-400 size-[14px]"
                    />
                ))}
            </div>
            <p className="md:text-sm text-xs text-neutral-400">{review}</p>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <img
                        className="h-14 w-14 rounded-full object-cover brightness-75"
                        src={image}
                        alt=""
                    />
                    <div className="flex flex-col items-start">
                        <h3 className="md:text-base text-sm font-medium">{name}</h3>
                        <p className="text-xs text-neutral-400">{position}</p>
                    </div>
                </div>
                <Quote className="text-[var(--primary-color)] fill-[var(--primary-color)]" />
            </div>
        </div>
    )
}

export default TestimonialCard