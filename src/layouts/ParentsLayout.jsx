import { Outlet } from "react-router-dom"
import ParentsSideNav from "../components/ParentsSideNav"

const ParentsDashboard = () => {
    return (
        <div className="flex flex-col sm:flex-row">
            <ParentsSideNav />
            <div className="sm:w-[85vw] px-4 sm:px-12 sm:py-6 py-4">
                <Outlet />
            </div>
        </div>
    )
}

export default ParentsDashboard