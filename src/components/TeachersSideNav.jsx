import { Link } from "react-router-dom"

const TeachersSideNav = () => {
    return (
        <div>
            <div className="logo"></div>
            <Link>Dashboard</Link>
            <Link>Classes</Link>
            <Link>Attendance</Link>
            <Link>Parents</Link>
            <Link>KidsList</Link>
            <Link>Discipline</Link>
            <Link>Profile</Link>
            <div>
                <Link>Logout</Link>
            </div>
        </div>
    )
}

export default TeachersSideNav