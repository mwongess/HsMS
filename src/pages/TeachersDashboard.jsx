import { Outlet } from "react-router-dom"
import TeachersSideNav from "../components/TeachersSideNav"

const TeachersDashboard = () => {
    return (
        <div>
            <TeachersSideNav />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default TeachersDashboard