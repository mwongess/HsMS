import { Outlet } from "react-router-dom"
import ParentsSideNav from "../components/ParentsSideNav"

const ParentsDashboard = () => {
    return (
        <div className="flex">
            <ParentsSideNav />
            <div className="w-[85vw] px-12 py-6">
                <Outlet />
            </div>
        </div>
    )
}

export default ParentsDashboard