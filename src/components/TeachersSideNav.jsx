import { Link, NavLink } from "react-router-dom"
import { FaHome, FaList, FaUsers, FaRegUserCircle, FaUserFriends, FaUserGraduate, FaCalendarWeek, FaBookOpen } from "react-icons/fa";

const TeachersSideNav = () => {
    return (
        <div className="nav h-screen flex flex-col justify-between p-4 border-r-[3px]  w-[15vw] bg-[#f3f4f6]">
            <div className="flex flex-col gap-4">
                <div className="logo"></div>
                <NavLink to=""><FaHome /> Dashboard</NavLink>
                <NavLink to="classes"><FaBookOpen />Classes</NavLink>
                <NavLink to="attendance"><FaCalendarWeek />Attendance</NavLink>
                <NavLink to="parents"><FaUsers /> Parents</NavLink>
                <NavLink to="kidslist"><FaUserFriends /> KidsList</NavLink>
                <NavLink to="discipline"><FaUserGraduate /> Discipline</NavLink>
                <NavLink to="profile"><FaRegUserCircle /> Profile</NavLink>
            </div>
            <div>
                <Link>Logout</Link>
            </div>
        </div>
    )
}

export default TeachersSideNav