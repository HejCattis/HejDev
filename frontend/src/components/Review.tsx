import { useState } from 'react';
import { MdOutlineWork } from 'react-icons/md';
import { BiSolidParty } from 'react-icons/bi';

const Review = () => {
    const [pagination, setPaqination] = useState(0);
    const reviews = [
        {
            text: '“Hon missar inte en enda promenad men be henne ge mig lite mer godis.”',
            name: 'Hunden Alfons, 7 år',
            icon: (
                <svg
                    className='absolute bottom-0 right-0 pb-6 pr-6'
                    xmlns='http://www.w3.org/2000/svg'
                    width='61'
                    height='48'
                    viewBox='0 0 61 48'
                    fill='none'
                >
                    <path
                        d='M47.1364 0C42.395 0 39.5114 0.99 37.8477 1.83C35.7127 0.69 33.2727 0 30.5 0C27.7273 0 25.2873 0.69 23.1523 1.83C21.4886 0.99 18.605 0 13.8636 0C5.54545 0 0 24 0 30C0 32.49 3.66 34.77 8.70636 35.7C10.4809 42.42 18.8545 47.55 29.1136 48V35.16C27.4777 34.05 24.9545 32.04 24.9545 30C24.9545 27 30.5 27 30.5 27C30.5 27 36.0455 27 36.0455 30C36.0455 32.04 33.5223 34.05 31.8864 35.16V48C42.1455 47.55 50.5191 42.42 52.2936 35.7C57.34 34.77 61 32.49 61 30C61 24 55.4545 0 47.1364 0ZM8.73409 29.61C7.34773 29.25 6.26636 28.83 5.54545 28.5C6.23864 20.19 11.6455 7.2 14.0023 6C15.4995 6 16.6364 6.18 17.6623 6.33C11.8395 13.26 9.53818 24.12 8.73409 29.61ZM22.1818 24C21.4464 24 20.7412 23.6839 20.2212 23.1213C19.7012 22.5587 19.4091 21.7957 19.4091 21C19.4091 19.38 20.6568 18 22.1818 18C22.9172 18 23.6224 18.3161 24.1424 18.8787C24.6624 19.4413 24.9545 20.2043 24.9545 21C24.9545 22.68 23.7068 24 22.1818 24ZM38.8182 24C38.0828 24 37.3776 23.6839 36.8576 23.1213C36.3376 22.5587 36.0455 21.7957 36.0455 21C36.0455 19.38 37.2932 18 38.8182 18C39.5536 18 40.2588 18.3161 40.7788 18.8787C41.2988 19.4413 41.5909 20.2043 41.5909 21C41.5909 22.68 40.3432 24 38.8182 24ZM52.2659 29.61C51.4618 24.12 49.1604 13.26 43.3377 6.33C44.3636 6.18 45.5005 6 46.9977 6C49.3545 7.2 54.7614 20.19 55.4545 28.5C54.7614 28.83 53.68 29.25 52.2659 29.61Z'
                        fill='#995688'
                    />
                </svg>
            ),
        },
        {
            text: '“Cattis är en otrolig kollega”',
            name: 'XXX',
            icon: (
                <MdOutlineWork
                    size={35}
                    className='text-pink absolute bottom-6 right-6'
                />
            ),
        },
        {
            text: '"Hon är en kul',
            name: 'XXX',
            icon: (
                <BiSolidParty
                    size={35}
                    className='text-pink absolute bottom-6 right-6'
                />
            ),
        },
    ];
    return (
        <section className='my-10 md:my-20 max-w-5xl mx-auto px-10 md:px-0'>
            <h2 className='font-semibold text-2xl my-4 text-center mb-10'>
                Omdömen
            </h2>
            <section className='bg-[#FDFCFC] shadow-md md:w-[500px] max-w-[500px] h-[250px] md:h-[200px] relative mx-auto flex justify-center items-center rounded-md'>
                <svg
                    className='h-10 absolute -top-5 -left-10'
                    xmlns='http://www.w3.org/2000/svg'
                    width='90'
                    height='64'
                    viewBox='0 0 90 64'
                    fill='none'
                >
                    <path
                        d='M57.8571 64H77.1429L90 38.4V0H51.4286V38.4H70.7143M6.42857 64H25.7143L38.5714 38.4V0H0V38.4H19.2857L6.42857 64Z'
                        fill='#995688'
                    />
                </svg>
                <p className='text-center text-lg w-2/3'>
                    {reviews[pagination].text}
                </p>
                <p className='absolute bottom-0 left-0 p-6 font-semibold text-sm'>
                    {reviews[pagination].name}
                </p>
                <div>{reviews[pagination].icon}</div>
            </section>
            <section className='flex gap-2 justify-center my-6'>
                <div
                    className={`cursor-pointer h-3 w-3 rounded-full ${
                        pagination === 0 ? 'bg-purple' : 'bg-gray-300'
                    }`}
                    onClick={() => setPaqination(0)}
                ></div>
                {/* <div
                    className={`cursor-pointer h-3 w-3 rounded-full ${
                        pagination === 1 ? 'bg-purple' : 'bg-gray-300'
                    }`}
                    onClick={() => setPaqination(1)}
                ></div>
                <div
                    className={`cursor-pointer h-3 w-3 rounded-full ${
                        pagination === 2 ? 'bg-purple' : 'bg-gray-300'
                    }`}
                    onClick={() => setPaqination(2)}
                ></div> */}
            </section>
        </section>
    );
};
export default Review;
