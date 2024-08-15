import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useState } from 'react';
import {navLinks} from '../data/Data.js'
import { Link } from 'react-scroll'
export default function Nav() {
 
    const [isHidden, setIsHidden] = useState(false);

      const navLink = (
    <div className="absolute left-0 top-12 w-full flex flex-col sm:flex-row sm:relative sm:top-0 sm:right-0 items-center gap-3 py-4 sm:py-0 bg-[#0b0b4b]" style={{ height: isHidden ? ({height: 0}) : ({height:'auto', overflow: 'hidden', "background-color": '#333',transition: "height 2s linear "}) }}>
      <div className="flex flex-col sm:flex-row gap-3">
      {navLinks.map((link) => <Link className='flex flex-nowrap gap-1 items-center text-white font-medium cursor-pointer' offset={-100} duration={200} smooth={true} key={link.id}  to={link.id}>{link.icon}<span>{link.title}</span></Link>)}
      </div>
    </div>
  );
    const slideDown = () => {
        setIsHidden(!isHidden);
      };
  return (
    <nav className="flex text-xl text-white items-center">
        <div className="hidden sm:flex  gap-4">{navLink}</div>
        <div className="sm:hidden">
        <HiMiniBars3CenterLeft onClick={slideDown} className="text-2xl rotate-180 absolute right-10 top-5 cursor-pointer" />
        {isHidden && navLink}
        </div>
    </nav>
  )
};

