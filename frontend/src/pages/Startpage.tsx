import About from '../components/About';
import CodeSection from '../components/CodeSection';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Qualification from '../components/Qualification';

const Startpage = () => {
    return (
        <section className='mx-4 md:mx-10'>
            <Hero />
            <About />
            <CodeSection />
            <Experience />
            <Qualification />
        </section>
    );
};
export default Startpage;
