import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Button from '../button/Button';
const Navbar = () => {
  const navbar = {
    link1: 'home',
    link2: 'work',
    link3: 'skills',
    link4: 'About',
    link5: 'Contact',
  };

  const [nav, setNave] = useState(false);
  const clickHndler = () => {
    setNave(!nav);
  };
  return (
    <div className="fixed w-full z-50">
      <nav
        className="
            w-full h-[80px] flex justify-between items-center px-4 text-whith capitalize bg-[#4c2da2] "
      >
        <div className="n-left flex grow items-center gap-4">
          <div
            data-aos="zoom-in-right"
            className="logo font-bold text-4xl ml-4 text-rose-400 "
          >
            <h1>Enas</h1>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="n-right hidden md:flex grow text-xl items-center justify-center font-semibold	 "
        >
          <div className="n-list grow-4 ">
            <ul className="hidden md:flex gap-4 mr-8 cursor-pointer	">
              <li className="">
                <Link to="home" smooth={true} duration={500}>
                  {navbar.link1}
                </Link>
              </li>

              <li className="">
                <Link to="Projects" smooth={true} duration={500}>
                  {navbar.link2}
                </Link>
              </li>

              <li className="">
                <Link to="skills" smooth={true} duration={500}>
                  {navbar.link3}
                </Link>
              </li>
              {/* <li className="">
                <Link to="About" smooth={true} duration={500}>
                  {navbar.link4}
                </Link>
              </li> */}
              <li className="">
                <Button />
              </li>
            </ul>
          </div>
          {/* <button className='Resume drop-shadow-lg'>Resume</button> */}
        </div>
        {/* hamburger menu */}
        <div className="md:hidden z-20" onClick={clickHndler}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute z-10 bg-[#5031a9] bg-opacity-70 font-bold top-0 left-0 w-full  h-screen flex flex-col justify-center items-center cursor-pointer	'
          }
        >
          <li className=" py-6 text-4xl">
            <Link onClick={clickHndler} to="home" smooth={true} duration={500}>
              {navbar.link1}
            </Link>
          </li>
          <li className=" py-6 text-4xl">
            <Link
              onClick={clickHndler}
              to="Projects"
              smooth={true}
              duration={500}
            >
              {navbar.link2}
            </Link>
          </li>
          <li className=" py-6 text-4xl ">
            <Link
              onClick={clickHndler}
              to="skills"
              smooth={true}
              duration={500}
            >
              {navbar.link3}
            </Link>
          </li>
          {/* <li onClick={clickHndler} className=" py-6 text-4xl">
            <Link onClick={clickHndler} to="About" smooth={true} duration={500}>
              {navbar.link4}
            </Link>
          </li> */}
          <Button />
          {/* <li onClick={clickHndler} className=" py-6 text-4xl">
           <Link onClick={clickHndler} to="skills" smooth={true} duration={500}>
             {navbar.link5}
           </Link>
         </li> */}
          {/* <li className=" py-6 text-4xl">{contact}</li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
