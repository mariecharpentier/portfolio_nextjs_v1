import React from 'react';
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}>
      <section id="contact" className='bg-secondary w-full md:h-screen p-2'>
        <div className='max-w-[1120px] w-full h-full mx-auto flex justify-center items-center'>
            <div className='flex items-center md:items-between justify-center w-full'>
                <h2 className='py-4 px-2'>Let's get in touch! </h2>
                <div className='p-2 m-2 bg-primary animate-pulse rounded-full shadow-lg'>
                    <a href=""><FaLinkedinIn size={32} className='text-white m-2'/></a>
                </div>
                <div className='p-2 m-2 bg-primary animate-pulse rounded-full shadow-lg flex justify-center items-center'>
                    <a href="mailto:charpentier.marie@hotmail.fr"><AiOutlineMail size={32} className='text-white m-2'/></a>
                </div>
            </div>
        </div>
      </section>

      </motion.div>
    )
}

export default Contact