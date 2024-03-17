import { Outlet } from "react-router-dom"
import TeachersSideNav from "../components/TeachersSideNav"

const TeachersDashboard = () => {
    return (
        <div className="flex">
            <TeachersSideNav />
            <div className="sm:w-[85vw] px-4 sm:px-12 py-4 sm:py-6">
                <Outlet />
            </div>
        </div>
    )
}

export default TeachersDashboard