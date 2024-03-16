import { Outlet } from "react-router-dom"
import ParentsSideNav from "../components/ParentsSideNav"

const ParentsDashboard = () => {
    return (
        <div>
            <ParentsSideNav />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default ParentsDashboard