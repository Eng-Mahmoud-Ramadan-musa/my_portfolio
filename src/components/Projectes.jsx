import {progects} from '../data/Data.js';
import Container from './Container.jsx';
import H2 from './H2';

export default function Projectes() {
  const Project = progects.map((e,x) => (
  <div data-aos="fade-up" key={x} className='bg-slate-500 w-full h-[50dvh] p-3 rounded-xl shadow-lg shadow-current sm:w-[45%] lg:w-[30%]'>
    <a className='block w-full h-full overflow-hidden' href={e.href}>
      <div className='h-3/4 sm:h-2/3 w-full lg:2/3 mb-5 skew-x-6 hover:skew-x-0 skew-y-6 hover:skew-y-0 p-5 duration-300'>
      <img data-aos="fade-right" className='h-full w-full' src={e.src} alt={e.title}/> 
      </div>
      <h2 data-aos="fade-right" className='text-white text-2xl mb-2'>{e.title}</h2> 
      <p data-aos="fade-right"  className='text-gray-400 text-base text-nowrap overflow-hidden text-ellipsis'>{e.tecnology}</p>
    </a>
  </div>
  )) ;
  return (
    <Container id="Projectes" style={{'flex-direction': "column"}} >
      <H2 title='Projectes' />
      <div className='flex flex-wrap gap-10'>
        {Project}
      </div>

    </Container>
  )
}

