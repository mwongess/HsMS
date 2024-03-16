import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex justify-between px-8 py-4">
            <div className="logo">
                <p>Logo</p>
            </div>
            <div>
                <Link>Home</Link>
                <Link>Parent Login</Link>
                <Link>Parent Register</Link>
                <Link>Teacher Login</Link>
                <Link>Teacher Signup</Link>
            </div>
        </div>
    )
}

export default Header