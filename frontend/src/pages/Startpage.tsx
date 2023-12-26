import About from '../components/About';
import CodeSection from '../components/CodeSection';
import CurrentWork from '../components/CurrentWork';
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
            <CurrentWork />
        </section>
    );
};
export default Startpage;
