import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

const Skills = () => {
    return (
        <div className='max-w-[820px] px-6 lg:px-4 pt-2 w-full md:grid grid-cols-3 gap-6'>

            <div className='col-span-3'>
                <h3 className='pt-4 text-primary font-bold'>Skills</h3>
                <p className='pb-4 pt-4 md:pb-0 text-lg font-semibold'>What I have used</p>
            </div>
            <div className='col-span-1'>
                <ul className="list-none">
                    <li className="pl-4 before:content-['▹'] before:-ml-4 before:mt-1 before:absolute before:text-primary-light before:text-xs">HTML, CSS, JavaScript</li>
                    <li className="pl-4 before:content-['▹'] before:-ml-4 before:mt-1 before:absolute before:text-primary-light before:text-xs">jQuery</li>
                    <li className="pl-4 before:content-['▹'] before:-ml-4 before:mt-1 before:absolute before:text-primary-light before:text-xs">Sass</li>
                    <li className="pl-4 before:content-['▹'] before:-ml-4 before:mt-1 before:absolute before:text-primary-light before:text-xs">Bootstrap, Tailwind</li>
                    <li className="pl-4 before:content-['▹'] before:-ml-4 before:mt-1 before:absolute before:text-primary-light before:text-xs">Gulp, NPM</li>
                </ul>
            </div>
            <div className='col-span-1'>
                <ul className='list-none'>
                    <li className="pl-4 before:content-['▹'] before:-ml-4 before:mt-1 before:absolute before:text-primary-light before:text-xs">PHP</li>
                    <li className="pl-4 before:content-['▹'] before:-ml-4 before:mt-1 before:absolute before:text-primary-light before:text-xs">WordPress</li>
                    <li className="pl-4 before:content-['▹'] before:-ml-4 before:mt-1 before:absolute before:text-primary-light before:text-xs">MySQL</li>
                </ul>
            </div>
            <div className='col-span-1'>
                <ul className='list-none'>
                    <li className="pl-4 before:content-['▹'] before:-ml-4 before:mt-1 before:absolute before:text-primary-light before:text-xs">Photoshop</li>
                    <li className="pl-4 before:content-['▹'] before:-ml-4 before:mt-1 before:absolute before:text-primary-light before:text-xs">Figma</li>
                    <li className="pl-4 before:content-['▹'] before:-ml-4 before:mt-1 before:absolute before:text-primary-light before:text-xs">Sketch</li>
                    <li className="pl-4 before:content-['▹'] before:-ml-4 before:mt-1 before:absolute before:text-primary-light before:text-xs">Affinity Suite</li>
                </ul>
            </div>
            <div className='col-span-3'>
                <p className='pt-8 text-lg font-semibold'>What I 'm learning these days</p>
                <div className='text-primary-light w-28 py-4 flex justify-between'>
                    <FaReact size={50}/>
                    <SiNextdotjs size={50} />
                </div>
                <p className='font-semibold'>... And I love it!</p>
                <div className='py-2'>
                    <p>My last certification: <span className='text-primary-light font-semibold'>TOIEC English Listening & Reading</span> (score: 970)</p>
                </div>
            </div>
      
        </div>
    )
}

export default Skills