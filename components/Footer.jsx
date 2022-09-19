import React from 'react';

const Footer = () => {
    return (
      <section id="footer" className='bg-primary-dark w-full px-4 py-2'>
        <div className='max-w-[1120px] w-full h-full mx-auto flex justify-center items-center'>
            <div className='flex items-center md:items-between justify-center w-full'>
                <p className='py-4 px-2 text-white/80'>Created by Marie - View on <a href="https://github.com/mariecharpentier/portfolio_nextjs_v1" target="_blank" rel="noopener noreferrer" className='underline'>GitHub</a> - Illustrations by Pablo Standley thanks to <a href="https://blush.design/" target="_blank" rel="noopener noreferrer" className='underline'>blush.design</a></p>
            </div>
        </div>
      </section>
    )
}

export default Footer