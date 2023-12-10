import MenuItem from "./MenuItem";
import { IoIosHome } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-2 max-w-6xl sm:mx-auto pt-4 pb-2">
      <div className="">
        <Link href="/" className="flex items-center ">
          <PiTelevision className="text-4xl "/> <h2>Cinemax</h2>
        </Link>
         </div>
      <div className="flex items-center space-x-4">
        <MenuItem title="HOME" address="/" Icon={IoIosHome}/>
      
        <MenuItem title="ABOUT" address="/about" Icon={FaInfoCircle}/>

        <DarkModeSwitch/>
      </div>
    </div>
  )
}
