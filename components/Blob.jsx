import React from 'react'
import { motion } from "framer-motion"


const Blob = () => {
    
    const blobs = {
        one: {
            d:
            "M18.4,-32.8C24.4,-28.5,30,-24.5,34,-19.1C38,-13.7,40.4,-6.9,40.9,0.3C41.3,7.4,40,14.9,36.7,21.6C33.5,28.3,28.4,34.3,22,38.2C15.5,42.1,7.8,43.9,0.7,42.8C-6.4,41.6,-12.8,37.5,-18.9,33.4C-25,29.2,-30.7,25.1,-34.5,19.6C-38.3,14,-40.2,7,-40.9,-0.4C-41.5,-7.8,-41,-15.6,-36.8,-20.4C-32.6,-25.3,-24.8,-27.4,-18,-31.2C-11.3,-35,-5.7,-40.7,0.3,-41.2C6.2,-41.7,12.5,-37.1,18.4,-32.8Z"

        },
        two: {
            d:
            "M21.7,-37.6C28.2,-33.9,33.5,-28.1,36.8,-21.5C40.2,-14.9,41.6,-7.5,42.3,0.4C43,8.2,42.9,16.5,38.6,21.4C34.2,26.3,25.5,27.8,18.4,30.7C11.3,33.6,5.6,37.9,-1.1,39.7C-7.8,41.6,-15.6,41,-22.8,38.1C-30,35.3,-36.6,30.1,-39.8,23.4C-43,16.7,-42.7,8.3,-40.7,1.1C-38.8,-6.1,-35.1,-12.1,-31.4,-17.9C-27.7,-23.7,-23.8,-29.2,-18.6,-33.6C-13.3,-38,-6.7,-41.3,0.5,-42.2C7.6,-43,15.2,-41.3,21.7,-37.6Z"
        }
    };
    
    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 flex justify-center items-center opacity-40">
                <svg
                    width="95vw"
                    height="95vh"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <motion.path
                    initial={blobs.one}
                    animate={blobs.two}
                    transition={{ yoyo: Infinity, duration: 4, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="url(#blob-gradient)"
                    transform="translate(50 50)"
                />
                <defs>
                   
                    <linearGradient id="blob-gradient" x1="100%" y1="100%" x2="10%" y2="0%">
                        <stop id="stop1" stopColor="#6075eb" offset="0%"></stop>
                        <stop id="stop2" stopColor="#a4d4f5" offset="100%"></stop>
                    </linearGradient>
                </defs>
            </svg>
        
    </div>
        
    )
}
    
    
export default Blob


  