import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
	return (
		<React.Fragment>
			<section className='max-w-4xl flex flex-col items-center mt-32 h-full'>
				<div className='hidden md:block md:absolute md:-top-32 md:w-2/3 md:-right-52 max-w-3xl -z-10'>
					<img src='/BG.png' alt='hero image' />
				</div>
				<div className="flex flex-col">
					<h1 className='md:z-10 mb-4'>
						{'<'} Hej {'/>'}
					</h1>
					<h2 className="mb-2">Mitt namn är <strong className="font-semibold">Cattis Gustafsson</strong></h2>
					<p className="">Jag är en <strong className="font-semibold">Fullstack Webbutvecklare</strong></p>
				</div>
			</section>
			<MdKeyboardArrowDown size={35} className='mx-auto mt-20 md:mt-32 lg:mt-56 text-purple' />
		</React.Fragment>
	);
};
export default Hero;
