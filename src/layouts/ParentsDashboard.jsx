import { Outlet } from "react-router-dom"
import ParentsSideNav from "../components/ParentsSideNav"

const ParentsDashboard = () => {
    return (
        <div className="flex">
            <ParentsSideNav />
            <div className="w-[80vw]">
                <Outlet />
            </div>
        </div>
    )
}

export default ParentsDashboard