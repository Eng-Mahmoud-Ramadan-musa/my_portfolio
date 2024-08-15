import {default as Nav} from '../components/Nav';
export default function Header() {
    
  return (
    <>
      <div className="bg-[#0b0b4b] py-3 flex text-xl justify-between px-[5%] sm:px-[10%] fixed top-0 left-0 w-full z-50">
        <a className="text-red-600 capitalize font-bold text-2xl" href="/#">my portfolio</a>
        <Nav />
      </div>
    </>
  )
}
