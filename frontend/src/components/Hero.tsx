import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <React.Fragment>
            <section className='max-w-5xl mx-auto flex flex-col items-center mt-32 h-[65vh] md:h-full '>
                <div className='w-screen relative'>
                    <img
                        className='absolute -top-40 md:-top-72 -right-28 md:-right-52 -z-10 w-[450px] md:w-3/4 max-w-4xl'
                        src='/BG.png'
                        alt='hero image'
                    />
                </div>
                <div className='w-full flex flex-col items-center justify-center md:items-start h-full px-4 md:px-10'>
                    <h1 className='md:z-10 mb-4 md:mt-4 lg:mt-8'>
                        {'<'} Hej {'/>'}
                    </h1>
                    <h2 className='text-center mb-2'>
                        Mitt namn är{' '}
                        <strong className='font-semibold'>
                            Cattis Gustafsson
                        </strong>
                    </h2>
                    <p className='text-center text-lg'>
                        Fullstack webbutvecklare med en touch av designer.
                    </p>
                </div>
            </section>
            <Link to='#about'>
                <MdKeyboardArrowDown
                    size={35}
                    className='mx-auto text-purple md:mt-28 lg:mt-48 cursor-pointer'
                />
            </Link>
        </React.Fragment>
    );
};
export default Hero;
