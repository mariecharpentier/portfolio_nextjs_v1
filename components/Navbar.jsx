import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg'
import { FaLinkedinIn } from 'react-icons/fa';
// import { useRouter } from 'next-router';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [navBg, setNavBg] = useState('red');
    const [linkColor, setLinkColor] = useState('blue');

    const handleNav = () => {
        setNav(!nav);
    }
    
    return (
        <header className='fixed w-full h-20 z-[1000]'>
            <div id="nav-desktop" className='flex justify-between w-full h-full p-4 backdrop-blur-sm xl:backdrop-blur-none'>
                <p className='text-primary-dark font-bold text-xl'>Marie C.</p>
                <div>
                    <ul className='hidden md:flex mr-2'>
                        <Link href="/#home">
                            <li onClick={()=> setNav(false)} className='text-primary-dark ml-10 uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href="/#about">
                            <li onClick={()=> setNav(false)} className='text-primary-dark ml-10 uppercase hover:border-b'>About Me</li>
                        </Link>
                        <Link href="/#work">
                            <li onClick={()=> setNav(false)} className='text-primary-dark ml-10 uppercase hover:border-b'>Work</li>
                        </Link>
                        <Link href="/#contact">
                            <li onClick={()=> setNav(false)} className='text-primary-dark ml-10 uppercase hover:border-b'>Contact Me</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} className='text-primary'/>
                    </div>
                </div>
            </div>

            <div id='nav-mobile' className={nav ? 'md:hidden fixed left-0 w-full h-screen' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-secondary ease-in duration-500' 
                                    : 'fixed left-[-100%] top-0 p-10 ease-in w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-secondary duration-500'}>
                    
                    <div className='py-2 flex w-full items-center justify-between'>
                        <p className='text-primary font-bold text-xl ml-4 mt-2'>Marie C.</p>
                        <div onClick={handleNav} className='cursor-pointer mr-4 mt-1'>
                            <CgClose size={25} className='text-primary'/>
                        </div>
                    </div>

                    <div className='py-4 px-4'>
                        <ul className='uppercase flex flex-col justify-center'>
                            <Link href="/#home">
                                <li onClick={()=> setNav(false)} className='text-primary py-4 uppercase'>Home</li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={()=> setNav(false)} className='text-primary marker:py-4 uppercase'>About Me</li>
                            </Link>
                            <Link href="/#work">
                                <li onClick={()=> setNav(false)} className='text-primary py-4 uppercase'>Work</li>
                            </Link>
                        </ul>
                    </div>

                    <div className='contact-section px-4 pb-2 absolute bottom-0'>
                        <p className='text-primary font-bold'>Contact Me</p>
                        <div className="flex items-center justify-between my-4">
                            <div className='py-2 w-10 h-10 border border-primary rounded-lg shadow-lg flex justify-center items-center'>
                                <FaLinkedinIn className='text-primary'/>
                            </div>
                            <div className='py-2 w-10 h-10 border border-primary rounded-lg shadow-lg flex justify-center items-center'>
                                <AiOutlineMail className='text-primary'/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </header>
    )
}

export default Navbar