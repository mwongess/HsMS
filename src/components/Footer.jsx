import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex justify-between p-8">
      <div className="left">
        <p>Copyright 2024</p>
      </div>
      <div className="right">
        <Link>Terms of service</Link>
        <Link>Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer