import React from 'react';
import Image from 'next/image';
import Skills from './Skills';
import Photo from '../public/assets/portrait4.svg'
import { motion, useScroll } from 'framer-motion'

const About = () => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0 }}>
        <section id="about" className='bg-white w-full flex flex-col items-center justify-between py-6 md:py-16'>

          <div className='max-w-[820px] p-6 lg:p-4 md:grid grid-cols-3 gap-6'>
              <div className='col-span-2'>
                  <h2 className='py-4'>About me</h2>
                  <p>So far, I&apos;ve had the priviledge to work for digital agencies based in Paris, specialised in eLearning or Advertising.</p>
                  <p>I like to create beautiful interfaces, and to learn new languages.</p>
              </div>
              <div className='w-[180px] z-10 mt-16 md:my-0 lg:w-[220px] m-auto relative before:border-2 before:border-primary before:rounded-md before:absolute before:w-full before:h-full before:-top-5 before:left-5'>
                <div className='bg-primary-light py-4 px-6 z-20 rounded-lg w-[180px] m-auto lg:w-[220px] h-auto'>
                <Image src={Photo} alt='/' className='w-full h-auto rounded-lg  mt-2'/>
                </div>
              </div>
          </div>

          <Skills/>
          
        </section>
      </motion.div>

    )
}

export default About