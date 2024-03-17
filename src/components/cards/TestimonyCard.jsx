import { FaQuoteRight } from "react-icons/fa";
const TestimonyCard = ({ data }) => {
    const { testimony, name, career } = data
    return (
        <div className="bg-[#f3f4f6] p-4">
            <div className="quote text-[#cb1da8] mb-3"><FaQuoteRight/></div>
            <p>{testimony}</p>
            <div className="proffesion ml-4 mt-2">
                <p className="text-[#cb1da8]">{name}</p>
                <p>{career}</p>
            </div>
        </div>
    )
}

export default TestimonyCard