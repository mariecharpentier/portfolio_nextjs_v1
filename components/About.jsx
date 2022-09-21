import React from 'react';
import Image from 'next/image';
import Skills from './Skills';
import Photo from '../public/assets/portrait4.svg'
import { motion } from 'framer-motion'

const About = () => {

  const containerVariants = {
    initial: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5, 
        delay: 0.2
      },
      opacity: 1,
    }
  }

  const frameVariant = {
    initial: {
      x: 40
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5, 
        delay: 0.2
      }
    }
  }

    return (
      <section id="about" className='bg-white overflow-scroll w-full flex flex-col items-center justify-between py-6 md:py-16'>
          <div className='max-w-[820px] p-6 lg:p-4 md:grid grid-cols-3 gap-6'>
              <div className='col-span-2'>
                  <h2 className='py-4'>About me</h2>
                  <p>So far, I&apos;ve had the priviledge to work for digital agencies based in Paris, specialised in E-Learning and Advertising.</p>
                  <p>I like to create beautiful interfaces, and to learn new languages.</p>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="initial"
                whileInView="visible"
                viewport={{ fallback: true }}>
                <div className='w-[180px] mt-16 md:my-0 lg:w-[220px] m-auto relative'>
                  <motion.div  
                    variants={frameVariant}
                    initial="initial"
                    whileInView="visible"
                    viewport={{ fallback: true }}
                    className='-z-9 border-2 border-primary rounded-md absolute w-full h-full -top-5 left-5'></motion.div>
                  <div className='bg-primary-light py-4 px-6 rounded-lg w-[180px] m-auto lg:w-[220px]'>
                    <Image src={Photo} alt='/' className='w-full h-auto rounded-lg mt-2'/>
                  </div>
                </div>
              </motion.div>

          </div>

          <Skills/>

        </section>

    )
}

export default About