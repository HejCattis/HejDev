import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
	return (
		<React.Fragment>
			<section className='max-w-4xl flex flex-col items-center mt-32 h-[65vh] md:h-full'>
				<div className='absolute -top-20 md:-top-32 w-[450px] md:w-2/3 -right-28 md:-right-52 max-w-3xl -z-10'>
					<img src='/BG.png' alt='hero image' />
				</div>
				<div className="flex flex-col items-center justify-center md:items-start h-full">
					<h1 className='md:z-10 mb-4 md:mt-4 lg:mt-8'>
						{'<'} Hej {'/>'}
					</h1>
					<h2 className="text-center mb-2">Mitt namn är <strong className="font-semibold">Cattis Gustafsson</strong></h2>
					<p className="text-center">Fullstack webbutvecklare med en touch av designer.</p>
				</div>
			</section>
			<MdKeyboardArrowDown size={35} className='mx-auto text-purple md:mt-28 lg:mt-48' />
		</React.Fragment>
	);
};
export default Hero;
