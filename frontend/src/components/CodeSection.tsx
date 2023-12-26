const CodeSection = () => {
	return (
		<div className="my-20">
			<h2 className='font-semibold text-2xl my-4 text-center'>Om mig</h2>
			<section className='bg-neutral-700 relative max-w-5xl mx-auto rounded-lg'>
				<div className='bg-neutral-600 flex gap-2 p-3 rounded-t-lg'>
					<span className='text-white'>
						<div className='h-3.5 w-3.5 rounded-full bg-red-500'></div>
					</span>
					<div className='h-3.5 w-3.5 rounded-full bg-yellow-500'></div>
					<div className='h-3.5 w-3.5 rounded-full bg-green-500'></div>
				</div>
				<p className='text-sky-600 py-4 px-10'>
					{'<?php'} <br />
					<br />
					class <span className='text-green-400'>Person</span> {'{'} <br />
					<span className='ml-10' />
					private <span className='text-sky-400'>$name</span>
					<span className='text-white'>;</span> <br />
					<span className='ml-10' />
					private <span className='text-sky-400'>$age</span>
					<span className='text-white'>;</span> <br />
					<span className='ml-10' />
					private <span className='text-sky-400'>$favLanguage</span>
					<span className='text-white'>;</span> <br />
					<br />
					<span className='ml-10' />
					{' public function'}{' '}
					<span className='text-yellow-200'>__construct</span>
					<span className='text-fuchsia-400'>(</span>
					<span className='text-sky-400'>$name</span>
					<span className='text-white'>,</span>{' '}
					<span className='text-sky-400'>$age</span>
					<span className='text-white'>,</span>{' '}
					<span className='text-sky-400'>$favLanguage</span>
					<span className='text-fuchsia-400'>){'{'}</span> <br />
					<span className='ml-20' />
					{'$this'}
					<span className='text-white'>{'->'}</span>
					<span className='text-sky-400'>name</span>{' '}
					<span className='text-white'>=</span>{' '}
					<span className='text-sky-400'>$name</span>
					<span className='text-white'>;</span> <br />
					<span className='ml-20' />
					{'$this'}
					<span className='text-white'>{'->'}</span>
					<span className='text-sky-400'>age</span>{' '}
					<span className='text-white'>=</span>{' '}
					<span className='text-sky-400'>$age</span>
					<span className='text-white'>;</span> <br />
					<span className='ml-20' />
					{'$this'}
					<span className='text-white'>{'->'}</span>
					<span className='text-sky-400'>favFramework</span>{' '}
					<span className='text-white'>=</span>{' '}
					<span className='text-sky-400'>$favFramework</span>
					<span className='text-white'>;</span> <br />
					<span className='ml-10' />
					<span className='text-fuchsia-400'>{' }'}</span> <br /> <br />
					<span className='ml-10' />
					public function <span className='text-yellow-200'>whoAreYou</span>
					<span className='text-fuchsia-400'>(){'{'}</span> <br />
					<span className='ml-20' />
					<span className='text-yellow-200'>echo</span>{' '}
					<span className='text-amber-600'>"Jag heter "</span>
					<span className='text-white'>.</span>$this
					<span className='text-white'>{'->'}</span>
					<span className='text-sky-blue'>name</span>
					<span className='text-white'>.</span>
					<span className='text-amber-600'>" och jag är "</span>
					<span className='text-white'>.</span>$this
					<span className='text-white'>{'->'}</span>
					<span className='text-sky-400'>age</span>
					<span className='text-white'>.</span>
					<span className='text-amber-600'>
						" år. Mitt favorit framework är: "
					</span>
					<span className='text-white'>.</span>$this
					<span className='text-white'>{'->'}</span>
					<span className='text-sky-400'>favFramework</span>
					<span className='text-white'>;</span> <br />
					<span className='ml-10' />
					<span className='text-fuchsia-400'>{'}'}</span> <br />
					<span className='text-fuchsia-400'>{'}'}</span> <br />
					<br />
					<span className='text-sky-500'>{'$yourNextStar'}</span>{' '}
					<span className='text-white'>=</span> new{' '}
					<span className='text-green-400'>Person</span>
					<span className='text-yellow-400'>{'('}</span>
					<span className='text-amber-600'>'Cattis'</span>
					<span className='text-white'>,</span> 28
					<span className='text-white'>,</span>{' '}
					<span className='text-amber-600'>'Laravel'</span>
					<span className='text-yellow-400'>{')'}</span>
					<span className='text-white'>;</span> <br />
					<span className='text-sky-500'>$yourNextStar</span>
					<span className='text-white'>{'->'}</span>
					<span className='text-yellow-200'>whoAreYou</span>
					<span className='text-yellow-400'>{'()'}</span>
					<span className='text-white'>;</span>
				</p>
			</section>
		</div>
	);
};
export default CodeSection;
