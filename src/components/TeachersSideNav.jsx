import { Link } from "react-router-dom"

const TeachersSideNav = () => {
    return (
        <div className="h-screen flex flex-col justify-between p-4 border-r-[3px] border-red-700 w-[15vw] p-4">
            <div className="flex flex-col gap-4">
                <div className="logo"></div>
                <Link>Dashboard</Link>
                <Link>Classes</Link>
                <Link>Attendance</Link>
                <Link>Parents</Link>
                <Link>KidsList</Link>
                <Link>Discipline</Link>
                <Link>Profile</Link>
            </div>
            <div>
                <Link>Logout</Link>
            </div>
        </div>
    )
}

export default TeachersSideNav