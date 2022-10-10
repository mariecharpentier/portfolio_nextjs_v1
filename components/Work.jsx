import React from 'react';
import Image from 'next/image';
import BgImg1 from '../public/assets/work/elearning.svg'
import BgImg2 from '../public/assets/work/mktg.svg'
import BgImg3 from '../public/assets/work/dev.svg'
import BgImg4 from '../public/assets/work/anim.svg'

import { motion } from 'framer-motion'

const Work = () => {


  const containerVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      transition: {
        type: 'spring',
        damping: 8,
        duration: 0.1, 
        when: "beforeChildren",
        staggerChildren: "0.1"
      },
      opacity: 1,
    }
  }

  const childVariant = {
    initial: {
      opacity: 0,
    },
    visible: {
      transition: {
        duration: 0.1, 
      },
      opacity: 1,
    }
  }


    return (
          <section id="work" className='bg-primary-light w-full flex flex-col items-center justify-between py-6 md:py-16'>
            <div className='w-full max-w-[880px] p-6'>
              <h2 className='max-w-[820px] p-0 lg:p-4 w-full text-primary'>Work</h2>
            </div>
              
            <motion.div 
              variants={containerVariants}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true }} 
              className='max-w-[820px] p-6 lg:px-4 w-full md:grid grid-cols-3 gap-4'>

                <motion.div 
                  variants={childVariant} 
                  className='hidden md:block col-span-1 p-12 md:bg-primary/20 rounded-md'>
                    <div className='max-w-[180px] md:max-w-full m-auto'>
                      <Image src={BgImg3} alt='/'/>
                    </div>
                </motion.div>
                <motion.div 
                  variants={childVariant}
                  className='col-span-2 text-justify bg-primary/20 rounded-md p-4 flex flex-col justify-start'>
                    <h3 className='font-semibold text-primary pb-2'>Web Development</h3>
                    <p className='text-sm text-primary-dark'>Developed and maintained code for in-house and client websites: WordPress websites, or interfaces implemented on external websites.</p>
                    <p className='text-sm text-primary-dark pt-2 mt-auto'><span className='font-semibold'>Languages: </span>
                    HTML, CSS, Sass, Bootstrap, Tailwind, JavaScript, jQuery, WordPress, PHP, SQL.</p>
                    <p className='text-sm text-primary-dark'><span className='font-semibold'>Tools: </span>
                    Gulp, GitHub, Figma, Photoshop, Adobe XD.</p>
                </motion.div>

                <motion.div 
                  variants={childVariant} 
                  className='col-span-1 px-8 py-4 md:py-8 md:px-3 md:bg-primary/20 rounded-md flex items-center'>
                    <div className='hidden md:block max-w-[300px] md:max-w-full m-auto'>
                      <Image src={BgImg1} alt='/'/>
                    </div>
                </motion.div>

                <motion.div 
                  variants={childVariant}
                  className='col-span-2 text-justify bg-primary/20 rounded-md px-4 py-4'>
                    <h3 className='font-semibold text-primary pb-2'>E-Learning</h3>
                    <p className='text-sm text-primary-dark'>I built the interfaces of eLearning modules, with <span className='font-semibold'>CSS Animations and jQuery UI</span>. The modules were created by Instructional Designers, mostly for an adult audience in a corporate environment. Compliant to SCORM (Shareable Content Object Reference Model), these modules were then uploaded on LMS.</p>
                    <p className='text-sm text-primary-dark pt-2 mt-auto'><span className='font-semibold'>Languages: </span>HTML, CSS, jQuery.</p>
                    <p className='text-sm text-primary-dark'><span className='font-semibold'>Tools: </span>Gulp, Subversion, Moodle.</p>
                </motion.div>
              
                <motion.div 
                  variants={childVariant} 
                  className='col-span-1 px-6 py-4 md:p-4 md:bg-primary/20 rounded-md w-full flex items-center'>
                    <div className='hidden md:block max-w-[220px] md:max-w-[180px] m-auto'>
                      <Image src={BgImg2} alt='/'/>
                    </div>
                </motion.div>
                <motion.div 
                  variants={childVariant}  
                  className='col-span-2 text-justify bg-primary/20 rounded-md p-4 flex flex-col justify-start'>
                    <h3 className='font-semibold leading-8 text-primary pb-2'>Digital Marketing</h3>
                    <p className='text-sm text-primary-dark'>For the purpose of marketing campaigns, I coded <span className='font-semibold'>animated landing pages from scratch</span>, emailings and banners.</p>
                    <p className='text-sm text-primary-dark pt-2 mt-auto'><span className='font-semibold'>Languages: </span>
                    HTML, CSS, Sass, Bootstrap, Tailwind, JavaScript, jQuery.</p>
                    <p className='text-sm text-primary-dark'><span className='font-semibold'>Tools: </span>
                  Gulp, Photoshop, Google Web Designer, MJML.</p>
                </motion.div>

                <motion.div 
                  variants={childVariant} 
                  className='col-span-1 px-6 py-4 md:p-4 md:bg-primary/20 rounded-md w-full flex items-center'>
                    <div className='hidden md:block max-w-[220px] md:max-w-[180px] m-auto'>
                      <Image src={BgImg4} alt='/'/>
                    </div>
                </motion.div>
                <motion.div 
                  variants={childVariant}  
                  className='col-span-2 text-justify bg-primary/20 rounded-md p-4 flex flex-col justify-start'>
                    <h3 className='font-semibold leading-8 text-primary pb-2'>UI Animation</h3>
                    <p className='text-sm text-primary-dark'>Animations are essential for enhancing <span className='font-semibold'>user experience</span>, whether on landing pages, banners, or even apps.</p>
                    <p className='text-sm text-primary-dark mt-3'>From pure CSS to complex js animations, there is an abundance of great tools and libraries that suit every needs. Here is my latest personal experiment, made in CSS only on <a href="https://codepen.io/mariecharpentier" target="_blank" class="font-semibold underline">CodePen</a>.</p>
                    <p className='text-sm text-primary-dark pt-2 mt-auto'><span className='font-semibold'>Languages: </span>
                    CSS Animations, Keyframes, JavaScript, Framer, etc.</p>
                    <p className='text-sm text-primary-dark'><span className='font-semibold'>Tools: </span>
                  Photoshop, Google Web Designer, etc.</p>
                </motion.div>             
            </motion.div>
          </section>
    )
}

export default Work