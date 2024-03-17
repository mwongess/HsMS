import { Link, NavLink } from "react-router-dom"
import { FaHome, FaList, FaUsers } from "react-icons/fa";

const ParentsSideNav = () => {
    return (
        <div className="nav h-screen flex flex-col justify-between p-4 w-[15vw] bg-[#f3f4f6]">
            <div className="flex flex-col gap-4">
                <div className="logo"></div>
                <NavLink exact to="/parents" ><FaHome /> Dashboard</NavLink>
                <NavLink to="mykids">< FaList /> My kids</NavLink>
                <NavLink to="profile"><FaUsers /> Profile</NavLink>
            </div>
            <div>
                <Link>Logout</Link>
            </div>
        </div>
    )
}

export default ParentsSideNav