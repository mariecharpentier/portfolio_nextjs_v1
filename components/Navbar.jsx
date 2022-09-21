import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/assets/logo.svg'
import LogoSM from '../public/assets/logoSM.svg'
import { AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg'
import { FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    
    return (
        <header className='fixed w-full h-16 z-[2000]'>
            <div id="nav-desktop" className='relative flex justify-between w-full h-full p-4 backdrop-blur-sm xl:backdrop-blur-none'>
                <Link href="/#home">
                    <a>
                        <Image 
                            src={Logo}
                            alt="Logo"
                            width="36px"
                            height="36px"
                        />
                    </a>
                </Link>
                <div>
                    <ul className='hidden md:flex mr-2'>
                        <Link href="/#home">
                            <li onClick={()=> setNav(false)} className='text-primary-dark ml-10 uppercase hover:font-bold focus:text-red'>Home</li>
                        </Link>
                        <Link href="/#about">
                            <li onClick={()=> setNav(false)} className='text-primary-dark ml-10 uppercase hover:font-bold transition-200'>About</li>
                        </Link>
                        <Link href="/#work">
                            <li onClick={()=> setNav(false)} className='text-primary-dark ml-10 uppercase hover:font-bold transition-200'>Work</li>
                        </Link>
                        <Link href="/#contact">
                            <li onClick={()=> setNav(false)} className='text-primary-dark ml-10 uppercase hover:font-bold transition-200'>Contact</li>
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
                    
                    <div className='flex w-full items-center justify-between'>
                        <Link href="/#home">
                            <a className='p-4'>
                                <Image 
                                    src={LogoSM}
                                    alt="Logo"
                                    width="36px"
                                    height="36px"
                                />
                            </a>
                        </Link>
                        <div onClick={handleNav} className='cursor-pointer px-4 pb-4'>
                            <CgClose size={25} className='text-primary'/>
                        </div>
                    </div>

                    <div className='py-4 px-4'>
                        <ul className='uppercase flex flex-col justify-center'>
                            <Link href="/#home">
                                <li onClick={()=> setNav(false)} className='text-primary py-4 uppercase'>Home</li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={()=> setNav(false)} className='text-primary marker:py-4 uppercase'>About</li>
                            </Link>
                            <Link href="/#work">
                                <li onClick={()=> setNav(false)} className='text-primary py-4 uppercase'>Work</li>
                            </Link>
                        </ul>
                    </div>

                    <div className='contact-section px-4 pb-2 absolute bottom-0'>
                        <p className='text-primary font-bold'>Contact</p>
                        <div className="flex items-center justify-between my-4">
                            <div className='py-2 mr-2 w-10 h-10 bg-primary rounded-lg shadow-lg flex justify-center items-center'>
                                <a href="https://www.linkedin.com/in/marie-charpentier/"><FaLinkedinIn className='text-secondary'/></a>
                            </div>
                            <div className='py-2 w-10 h-10 bg-primary rounded-lg shadow-lg flex justify-center items-center'>
                                <a href="mailto:charpentier.marie@hotmail.fr"><AiOutlineMail className='text-secondary'/></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </header>
    )
}

export default Navbar