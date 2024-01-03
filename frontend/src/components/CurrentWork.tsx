import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const CurrentWork = () => {
    return (
        <React.Fragment>
            <section
                id='qualification'
                className='my-10 max-w-5xl mx-auto'
            >
                <h2 className='font-semibold text-2xl my-4 text-center mb-10'>
                    LIA - Quiqly AB
                </h2>
                <section className='flex flex-col-reverse md:flex-row justify-center md:justify-around items-center lg:items-start'>
                    <div className="md:w-1/2 lg:w-2/3">
                        <div className="relative my-6 flex justify-center">
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='absolute text-pink opacity-25 h-16 md:h-20 -top-10 -left-0 md:-left-2'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill='currentColor'
                                    d='m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z'
                                />
                            </svg>
                            <h3 className="text-lg px-8">
                                Vi <strong className="font-semibold">bygger</strong> nästa generations betalningslösning för {' '}
                                <strong className="font-semibold">tidningsbranchen</strong>.
                            </h3>
                        </div>
                        <p className="px-8">
                            Quiqly är en startup som har en idé om att det ska bli
                            enklare att läsa digitala nyheter. Genom teknologier så
                            som Firebase, Express.js, TSOA och React bygger vi
                            framtidens betalningslösningar för tidningar. Om ni vill
                            få en närmare inblick i min erfarenhet är ni varmt
                            välkomna att kontakta mig.
                        </p>
                    </div>
                    <div className="md:w-1/2 lg:w-1/3 md:flex md:justify-center">
                        <img className="w-48 md:w-[250px]" src='./Cattis_profile.png' alt='' />
                    </div>
                </section>
            </section>
             <Link to='#contact'>
                 <MdKeyboardArrowDown
                 size={35}
                 className='mx-auto text-purple cursor-pointer'
                     />
             </Link>
        </React.Fragment>
    );
};
export default CurrentWork;
