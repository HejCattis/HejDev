import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            // You can adjust this value
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    // Adding scroll event listener on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`${
                !scrolled ? 'bg-white/50' : 'bg-white'
            } fixed top-0 border-purple border-b-2 w-full py-3 z-10 transition-colors duration-300`}
        >
            <ul className='flex justify-around items-center'>
                <Link
                    onClick={() => setToggle(false)}
                    to='#cattis'
                    className='text-purple text-xl font-semibold'
                >
                    {'<' + ' Cattis ' + '/>'}
                </Link>
                <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                    {!toggle ? (
                        <IoMenu
                            size={40}
                            className='text-purple cursor-pointer'
                        />
                    ) : (
                        <button className=' h-10 w-10 rounded-full text-2xl font-semibold text-purple'>
                            X
                        </button>
                    )}
                </div>
                <div className='hidden md:flex justify-between w-fit gap-10 font-light text-purple'>
                    <Link to='#about'>Om mig</Link>
                    <Link to='#experience'>Erfarenhet</Link>
                    <Link to='#contact'>Kontakta mig</Link>
                </div>
            </ul>
            {toggle && (
                <div
                    className={`md:hidden flex flex-col h-[30vh] relative z-10  justify-around items-center text-xl text-purple`}
                >
                    <Link className='border-b-2 border-purple py-2' to='#about' onClick={() => setToggle(false)}>
                        Om mig
                    </Link>
                    <Link className='border-b-2 border-purple py-2' to='#experience' onClick={() => setToggle(false)}>
                        Erfarenhet
                    </Link>
                    <Link className='border-b-2 border-purple py-2' to='#contact' onClick={() => setToggle(false)}>
                        Kontakta mig
                    </Link>
                </div>
            )}
        </nav>
    );
};
export default Navbar;
