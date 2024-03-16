import { Outlet } from "react-router-dom"
import TeachersSideNav from "../components/TeachersSideNav"

const TeachersDashboard = () => {
    return (
        <div className="flex">
            <TeachersSideNav />
            <div className="w-[85vw">
                <Outlet />
            </div>
        </div>
    )
}

export default TeachersDashboard