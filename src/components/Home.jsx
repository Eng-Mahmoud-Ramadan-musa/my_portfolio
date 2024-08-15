import img from '../assets/user1.png';
import Social from './Social';
import TypedComponent from './TypedComponent';


export default function Home() {

  return (
    <div id="#" data-aos='zoom-in' className=" relative flex flex-col-reverse sm:flex-row justify-between text-5xl items-center h-[80dvh] bg-[#073b4c33] font-bold border rounded-xl border-solid border-black overflow-hidden">
        <div className='h-1/2 sm:h-4/5 w-[90%] pt-[20%] sm:pt-[10%] lg:pt[10%] px-5  bg-[#118ab2] text-white'>
          <p className="text-xl">hello i'm</p>
          <div className='h-1/3 sm:h-1/4'>
          <TypedComponent />
          </div>
          <h3 className="text-2xl text-nowrap text-ellipsis overflow-hidden ">i'm <span className="font-bold text-3xl text-red-600">front end</span> developer</h3>
        </div>
        <div className='h-1/2 sm:h-4/5 w-[90%] p-10  bg-[#118ab2] rounded-t-full sm:rounded-r-full sm:rounded-tl-none'>
          <img src={img} className='m-auto w-[250px] h-[250px] p-5 rounded-full bg-white' alt="" />
        </div>
        <div className='flex flex-col absolute top-1/2 -translate-y-1/2 right-[7%] sm:right-[3%] lg:right-[6%] text-2xl gap-8 sm:gap-4 lg:gap-6' >
        <Social />
        </div>
    </div>
  )
}
