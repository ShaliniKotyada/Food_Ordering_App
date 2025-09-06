
import logo from "./logo.webp"
import { FaSearch } from "react-icons/fa";



export default function Home() {
  
  
  return (
    <div className="w-full bg-white text-black py-0 mt-0">
      <div className="w-full flex justify-between items-center px-6 shadow-lg">
        
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-[150px] object-contain" />
        </div>

        {/* Navigation */}
        <div className="flex items-center">
          <ul className="flex items-center">
            <li className="mx-6 cursor-pointer flex items-center"><FaSearch/> Search</li>
            <li className="mx-6 cursor-pointer">Home</li>
            <li className="mx-6 cursor-pointer">About Us</li>
            <li className="mx-6 cursor-pointer">Contact Us</li>
            <li className="mx-6 cursor-pointer">Cart</li>
          </ul>

          {/* Sign In Button */}
          <button className="ml-6 mr-0 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
            Sign In
          </button>
        </div>
      </div>
    </div>
    
  )
}
