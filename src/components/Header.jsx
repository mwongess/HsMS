import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex justify-between px-8 py-4">
            <div className="logo">
                <p>Logo</p>
            </div>
            <div className="flex gap-4 bg-[#c000a4] text-white p-2 rounded-sm">
                <Link to="/">Home</Link>
                <Link to="/parents">Parent Login</Link>
                <Link to="">Parent Register</Link>
                <Link to="/teachers">Teacher Login</Link>
                <Link to="">Teacher Signup</Link>
            </div>
        </div>
    )
}

export default Header