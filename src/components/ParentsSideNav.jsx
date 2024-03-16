import { Link } from "react-router-dom"

const ParentsSideNav = () => {
    return (
        <div className="h-screen flex flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
                <div className="logo"></div>
                <Link>Dashboard</Link>
                <Link>My kids</Link>
                <Link>Profile</Link>
            </div>
            <div>
                <Link>Logout</Link>
            </div>
        </div>
    )
}

export default ParentsSideNav