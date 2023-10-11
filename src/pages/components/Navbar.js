"use client";
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
  
    const handleNav = () => {
      setNav(!nav);
    };
  
    useEffect(() => {
      const changeColor = () => {
        if (window.scrollY >= 90) {
          setColor('#000000');
          setTextColor('#ffffff');
        } else {
          setColor('#000000');
          setTextColor('#ffffff');
        }
        console.log(window.scrollY);
      };
      window.addEventListener('scroll', changeColor);
    }, []);


  return (
    <div
      style={{ backgroundColor: `${color}`, borderBottom: `1px solid ${textColor}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-30'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
            Crypto Insights
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex align-middle'>
          <li className='p-4 '>
            <Link href='/' className='hover:text-gray-300 duration-150'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/info' className='hover:text-gray-300 duration-150'>Info</Link>
          </li>
          <li className='p-4'>
            <Link href='/analytics' className='hover:text-gray-300 duration-150'>Analytics</Link>
          </li>
          <li className='p-4'>
            <Link href='/learn' className='hover:text-gray-300 duration-150'>Learn</Link>
          </li>
        </ul>


        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/info'>Info</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/analytics'>Analytics</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/learn'>Learn</Link>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


