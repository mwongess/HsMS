import Footer from "../components/Footer"
import Header from "../components/Header"
import Testimonials from "../components/Testimonials"
import VisMisMotto from "../components/cards/VisMisMotto"
import { FaHome, FaList, FaUsers, FaRegUserCircle, FaUserFriends, FaUserGraduate, FaCalendarWeek, FaBookOpen } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <div>
          <p className="text-center text-[#cb1da8] text-lg font-bold">All board for fun and learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-8">
          <VisMisMotto data={{ icon: "", title: "Our Vision", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam dolore iste dolorem, animi quis laboriosam placeat officia ipsa labore!" }} />
          <VisMisMotto data={{ icon: <FaBookOpen/>, title: "Mission", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam dolore iste dolorem, animi quis laboriosam placeat officia ipsa labore!" }} />
          <VisMisMotto data={{ icon: <FaUserGraduate/>, title: "Motto", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam dolore iste dolorem, animi quis laboriosam placeat officia ipsa labore!" }} />
        </div>
        </div>
       
        <Testimonials />
      </div>

      <Footer />
    </div>
  )
}

export default Homepage

