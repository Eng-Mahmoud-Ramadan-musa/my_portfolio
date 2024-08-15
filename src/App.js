import "./App.css";
import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import {navLinks} from './data/Data.js'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  const component = navLinks.map((e,x) => <div key={x} className="w-full h-full">{e.element}</div>)
  // console.log(component)
  return (
    <div className="w-full capitalize flex flex-col items-center">
      <Header />
      <section className=" mt-24 flex flex-col gap-20 border-1 border-solid border-black w-full px-[5%] sm:px-[10%]] pb-5">
        {component}
      </section>
      <Footer />
    </div>
  );
}
