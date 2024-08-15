import {languages} from '../data/Data';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import H2 from './H2';
import Container from './Container';
export default function Skills() {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  
  const skill = languages.map((e,x) => 
  (
  <div key={x} className='w-full border border-black my-2 bg-gray-300 rounded-lg px-2 overflow-hidden flex items-center justify-between gap-2'>
    <h3 className='w-1/2 lg:w-1/4 overflow-hidden text-2xl font-bold text-ellipsis'>{e.title}</h3> 
    <div className='w-full bg-gray-400 h-3 rounded-lg overflow-hidden'  > 
      <span className='block h-full' data-aos="fade-right" style={{background: e.color, width: e.width}} ></span>
    </div> 
    <div className='font-bold text-2xl'>{e.width}</div>
  </div>))
  return (
    <Container id="Skills" style={{"flex-direction": "column"}}>
      <H2 title='Skills ' />
      <div className='w-full sm:w-2/3 lg:w-1/2' data-aos="fade-up">
        {skill}
      </div>
    </Container>
  )
}

