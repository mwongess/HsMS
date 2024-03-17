import { FaUser } from "react-icons/fa"

const TeachersHome = () => {
    return (
        <div>
            <p className="text-center font-bold text-[#c000a4] mb-3 text-xl">Teachers Dashboard</p>
            <div className="flex justify-between items-center bg-[#c000a4] text-white p-8 rounded">
                <div>
                    <p>_ Management Portal</p>
                    <h1 className="text-3xl">Welcome Teacher</h1>
                    <p>Hello Admin</p>
                </div>
                <p className="flex items-center justify-center p-6 bg-white text-[#c000a4] h-6 w-6 rounded-full">
                    <span>
                        <FaUser className="" />
                    </span>
                </p>
            </div>
        </div>
    )
}

export default TeachersHome