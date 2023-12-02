import { Link } from "react-router-dom";

const About = () => {
	return (
		<section id='about' className='mt-10'>
			<div className=''>
				<div className='flex justify-center'>
					<svg
						className='w-64 fill-pink'
						viewBox='0 0 200 187'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
					>
						<mask id='mask0' mask-type='alpha'>
							<path
								d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
							/>
						</mask>
						<g mask='url(#mask0)'>
							<path
								d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
							/>
							<image
								className='w-[180px]'
								x='12'
								y='5'
								href='/Cattis-klippt.png'
							/>
						</g>
					</svg>
				</div>
				<div className='lg:w-1/2 px-4'>
					<h2 className='font-semibold text-2xl mt-4 text-center'>
						Det här är jag:
					</h2>
					<h3 className='text-xl mt-2 text-center'>
						Nästa stora stjärna inom backendutveckling.
					</h3>
					<p className='mt-2 mb-10 text-center'>
						Jag närmar mig detta mål genom min nuvarande LIA-praktik på Quiqly.
						Där breddar jag ständigt min kompetens inom backend, och tillsammans
						med teamet arbetar vi mot att skapa nästa generations
						betalningssystem för tidningsbranschen.
					</p>
					<div className='flex flex-col gap-4 items-center mb-12'>
						<Link
							to='/#contact'
							className='btn-border w-[200px]'
						>
							Kontakta mig
						</Link>
						<a
							//FIXME
							href='/_src/Cattis Gustafsson CV LIA 2023 - SE.pdf'
							download='Cattis_Gustafsson_CV_2023_SE'
							className='btn w-[200px] '
						>
							Mitt CV
						</a>
					</div>

					<div className='relative mt-4 lg:mt-6'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='absolute text-pink opacity-25 h-20 -top-8 -left-8 -z-10'
							viewBox='0 0 24 24'
						>
							<path
								fill='currentColor'
								d='m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z'
							/>
						</svg>
						<p className='mb-10 text-center'>
						Jag är på <strong className='font-semibold'>jakt</strong> efter ett företag i framkant som <strong className='font-semibold'>strävar efter att bli bäst</strong> i sin bransch genom nya, innovativa idéer tillsammans med mig och ett engagerat och drivet team.
						</p>
						<Link
							to='/#contact'
							className='flex justify-center'
						>
							<button className="btn w-[200px]">Intresserad?</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
