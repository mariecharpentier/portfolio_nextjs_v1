import React from 'react';
import Image from 'next/image';
import BgImg1 from '../public/assets/work/elearning.svg'
import BgImg2 from '../public/assets/work/mktg.svg'
import BgImg3 from '../public/assets/work/dev.svg'
import { motion } from 'framer-motion'

const Work = () => {
    return (
      <motion.div 
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0}}>
          <section id="work" className='bg-primary-light w-full flex flex-col items-center justify-between py-6 md:py-16'>
            <div className='max-w-[820px] py-4 px-6 lg:px-4 md:grid grid-cols-3 gap-6'>
              
              <div className='col-start-1 col-span-3 row-start-1'>
                <h2 className='pb-4 text-white'>Work</h2>
              </div>
           
              <div className='col-start-1 col-span-2 row-start-2 row-span-1 group flex flex-col place-content-start place-items-center pb-4 md:pb-0'>
                <div className='py-4 px-6 border-2 border-white rounded-t-md'>
                  <Image src={BgImg1} alt='/' className=''/>
                </div>
                <div className='text-primary p-4 bg-white h-full rounded-b-md'>
                  <h3 className='font-semibold text-primary pb-2'>ELearning Frontend Development</h3>
                  <p className='text-sm'>I built the interfaces of eLearning modules, with <span className='font-semibold'>CSS Animations and jQuery UI</span>.</p>
                  <p className='text-sm'>The modules were created by Learning Designers to an adult audience.</p>
                  <p className='text-sm'>Compliant to SCORM, these modules were then integrated on Moodle platform.</p>
                  <p className='text-sm py-2'><span className='font-semibold'>Languages: </span>HTML, CSS, jQuery.</p>
                  <p className='text-sm'><span className='font-semibold'>Tools: </span>Gulp, Subversion, Moodle.</p>
                </div>
                <div>
                  
                </div>
              </div>
             
             
              <div className='col-start-3 col-span-1 row-start-2 row-span-1 group flex flex-col place-content-start place-items-center pb-4 md:pb-0'>
                <div className='p-6 w-full border-2 border-white rounded-t-md'>
                  <div className='max-w-[180px] m-auto pt-4 pb-2'>
                    <Image src={BgImg2} alt='/' className='w-full h-auto'/>
                  </div>
                </div>
                <div className='text-primary p-4 bg-white h-full w-full rounded-b-md'>
                  <h3 className='font-semibold text-primary/90 leading-8 pb-2'>Digital marketing</h3>
                  <p className='text-sm'>For marketing campaigns, I coded <span>landing pages from scratch</span>, emailings and banners.</p>
                  <p className='text-sm py-2'><span className='font-semibold'>Languages: </span>
                  HTML, CSS, Sass, Bootstrap, Tailwind, JavaScript, jQuery.</p>
                  <p className='text-sm'><span className='font-semibold'>Tools: </span>
                  Gulp, Photoshop, Google Web Designer, MJML.</p>
                </div>
              </div>
              
              
              <div className='border-2 border-white col-start-1 col-span-3 row-span-1 row-start-3 rounded-lg group flex flex-col md:flex-row place-content-start place-items-center'>
                <div className='p-8 max-w-sm h-full rounded-t-md md:rounded-tr-none md:rounded-l-lg'>
                  <Image src={BgImg3} alt='/' className=''/>
                </div>
                <div className='text-primary p-4 bg-white h-full rounded-b-md md:rounded-bl-none md:rounded-r-sm'>
                    <h3 className='font-semibold text-primary pb-2'>Web Development</h3>
                    <p className='text-sm'>Developed and maintained code for in-house and client websites: WordPress websites, or interfaces implemented on external websites.</p>
                    <p className='text-sm py-2'><span className='font-semibold'>Languages: </span>
                    HTML, CSS, Sass, Bootstrap, Tailwind, JavaScript, jQuery, WordPress, PHP, SQL.</p>
                    <p className='text-sm'><span className='font-semibold'>Tools: </span>
                    Gulp, GitHub, Figma, Photoshop, Adobe XD.</p>
                 </div>
              </div>
              
            </div>
          </section>
      </motion.div>
    )
}

export default Work