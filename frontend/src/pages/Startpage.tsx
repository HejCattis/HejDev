import About from '../components/About';
import CodeSection from '../components/CodeSection';
import Contact from '../components/Contact';
import CurrentWork from '../components/CurrentWork';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Qualification from '../components/Qualification';
import Review from '../components/Review';
import ScrollToAnchor from '../components/ScrollToAnchor';

const Startpage = () => {
    return (
        <section className='overflow-hidden max-w-full'>
            <ScrollToAnchor />
            <Hero />
            <About />
            <CodeSection />
            <Experience />
            <Qualification />
            <CurrentWork />
            <Contact />
            <Review />
            <Footer />
        </section>
    );
};
export default Startpage;
