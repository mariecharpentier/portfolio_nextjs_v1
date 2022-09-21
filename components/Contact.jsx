import React from 'react';
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section id="contact" className='bg-secondary w-full md:h-screen px-4 py-2'>
            <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                viewport={{ fallback: true }}
                transition={{ duration: 2, delay: 0.2 }}
                className='max-w-[1120px] w-full h-full mx-auto flex justify-center items-center'>
                    <div className='flex items-center md:items-between justify-center w-full'>
                        <h2 className='py-4 px-2'>Let&apos;s get in touch! </h2>
                        <div className='p-2 m-2 bg-primary animate-pulse rounded-full shadow-lg'>
                            <a href="https://www.linkedin.com/in/marie-charpentier/"><FaLinkedinIn size={32} className='text-white m-2'/></a>
                        </div>
                        <div className='p-2 m-2 bg-primary animate-pulse rounded-full shadow-lg flex justify-center items-center'>
                            <a href="mailto:charpentier.marie@hotmail.fr"><AiOutlineMail size={32} className='text-white m-2'/></a>
                        </div>
                    </div>
            </motion.div>
        </section>

    )
}

export default Contact