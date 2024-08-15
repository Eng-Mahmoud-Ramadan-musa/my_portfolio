import React from 'react'
import {  FaFacebook, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Social() {
  return (
    <>
        <span><a href="https://www.facebook.com/profile.php?id=100007283614477"> <FaFacebook className='bg-white rounded-full text-blue-600 hover:scale-110 duration-200 cursor-pointer' /></a></span>
        <span><a href="https://wa.me/+201129780862"> <FaWhatsapp className='bg-green-600 text-white rounded-full hover:scale-110 duration-200 cursor-pointer'/></a></span>
        <span><a href="https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%B1%D9%85%D8%B6%D8%A7%D9%86-177102312"> <FaLinkedin className='rounded-full text-blue-500 bg-white hover:scale-110 duration-200 cursor-pointer'/></a></span>
        <span><a href="https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%B1%D9%85%D8%B6%D8%A7%D9%86-177102312"> <FaGithub className='bg-black text-white hover:text-black hover:bg-white hover:scale-105 duration-200 cursor-pointer'/></a></span>
    </>
  )
}
