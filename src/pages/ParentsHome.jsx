import { FaUser } from "react-icons/fa"

const ParentsHome = () => {
    return (
        <div>
            <p className="text-center font-bold text-[#c000a4] mb-3 text-xl">Parents Dashboard</p>
            <div className="flex justify-between items-center bg-[#c000a4] text-white p-8 rounded">
                <div>
                    <p>_ Management Portal</p>
                    <h1 className="text-3xl">Welcome Parent</h1>
                    <p>Hello Parent</p>
                </div>
                <p className="flex items-center justify-center p-6 bg-white text-[#c000a4] h-6 w-6 rounded-full">
                    <span>
                        <FaUser className="" />
                    </span>
                </p>
            </div>
            <div className="flex items-center justify-center mt-4">
                <img className="w-[90%]" src="/home.webp" alt="" />
            </div>
        </div>
    )
}

export default ParentsHome