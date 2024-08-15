import { FaCopyright} from 'react-icons/fa'
import Social from '../components/Social'
export default function Footer() {
  return (
    <footer className='px-[5%] sm:px-[10%] w-full h-32 sm:h-10 py-3 bg-[#0b0b4b] flex flex-col-reverse sm:flex-row items-center justify-end sm:justify-between '>
        <p className='text-white flex items-center gap-1 flex-nowrap text-nowrap font-medium'>copyright <FaCopyright /> <span className="text-red-600 capitalize font-bold text-xl">mahmoud ramadan</span></p>
        <div className='flex gap-5 text-2xl'>
        <Social />
        </div>
    </footer>
  )
}
