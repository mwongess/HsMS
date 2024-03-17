import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex justify-between px-8 py-4 bg-[#c000a4]  text-white">
      <div className="left">
        <p>Copyright 2024</p>
      </div>
      <div className="flex gap-2 right">
        <Link>Terms of service</Link>
        <Link>Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer