import React from 'react'
// import { motion } from "framer-motion"
import Blob from './Blob';

const Main = () => {
    return (
        <section id="home" className='bg-primary-light w-full h-screen text-center'>
          <Blob />
            <div className="max-w-[1120px] w-11/12 md:w-full h-full mx-auto flex justify-center items-center">
                <div className='z-50'>
                    <h1 className='leading-10 text-xl text-primary'>Hello! My name is <span className='title'>Marie.</span> 
                        {/* <motion.div
                            style={{ display: 'inline-block', paddingLeft: '10px',  originX: '70%', originY: '70%'}}
                            animate={{ rotate: [0, 18, -8, 16, -8, 18, 0, 0], originX: '100%', originY: '80%', originZ: '0' }}
                            transition={{
                                delay: 0.3,
                                repeat: Infinity,
                                repeatDelay: 1,
                                duration: 1.2,
                                ease: 'easeOut',
                            }}
                        >👋🏼
                        </motion.div> */}
                    </h1>
                    <h1 className='text-4xl text-primary font-extrabold'>
                       I&#39;m a  <span className='text-secondary'>Front-End</span> Developer
                    </h1>
                    <p className='text-primary/75 pt-3 m-auto'>
                        with three years of experience building and maintaining responsive interfaces.
                    </p>
                </div>
            </div>
            
        </section>
    )
}

export default Main