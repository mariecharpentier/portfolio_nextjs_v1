import React from 'react'
import { motion } from "framer-motion"

const Main = () => {
    return (
        <section id="home" className='bg-primary-light w-full h-screen text-center'>
            <div className="max-w-[1120px] w-full h-full mx-auto flex justify-center items-center">
                <div>
                    <h1 className='py-4 text-xl'>Hi! I'm <span className='title'>Marie.</span> 
                        <motion.div
                            style={{ display: 'inline-block', paddingLeft: '10px',  originX: '70%', originY: '70%'}}
                            animate={{ rotate: [0, 18, -8, 16, -8, 18, 0, 0], originX: '100%', originY: '80%', originZ: '0' }}
                            transition={{
                                delay: 0.5,
                                repeat: Infinity,
                                repeatDelay: 1,
                                duration: 1.8,
                                ease: 'easeOut',
                            }}
                        >👋🏼
                        </motion.div>
                    </h1>
                    <h1 className='text-4xl font-extrabold'>
                        I'm a <span className='text-secondary'>Front-End</span> Developer,
                    </h1>
                    <p className='py-4 max-w-[70%] m-auto'>
                        and I like to create things on Internet.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Main