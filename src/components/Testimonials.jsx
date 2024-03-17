import TestimonyCard from "./cards/TestimonyCard"

const Testimonials = () => {
    return (
        <div className="p-8">
            <p className="text-sm font-bold text-[#cb1da8] text-center mb-4">Testimonials</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TestimonyCard data={{ testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, minima!", name: "Peterson", career: "Software Engineer" }} />
                <TestimonyCard data={{ testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, minima!", name: "Ronald", career: "Designer" }} />
            </div>
        </div>
    )
}

export default Testimonials

