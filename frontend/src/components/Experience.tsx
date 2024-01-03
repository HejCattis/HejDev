const Experience = () => {
    return (
        <section id='experience' className='mt-10 max-w-5xl mx-auto px-4 md:px-10 scroll-my-20'>
            <h2 className='font-semibold text-2xl my-4 text-center mb-10'>
                Erfarenhet
            </h2>
            <section className='grid grid-cols-2 gap-10 md:flex md:justify-around '>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h3 className='text-purple font-medium text-4xl'>+8 år</h3>
                    <h4 className='text-lg'>Marknadsföring</h4>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h3 className='text-purple font-medium text-4xl'>+5 år</h3>
                    <h4 className='text-lg'>Grafisk design</h4>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 col-span-2'>
                    <h3 className='text-purple font-medium text-4xl'>+3 år</h3>
                    <h4 className='text-lg'>Projekthantering</h4>
                </div>
            </section>
            <div className='md:grid md:grid-cols-2 md:gap-12 my-10 md:my-20'>
                <div className='text-center md:text-left col-span-1'>
                    <p>
                        Mitt intresse för programmering startade på min tidigare
                        arbetsplats där jag jobbade som{' '}
                        <strong>marknadsprojektledare</strong>. I klassisk litet
                        marknadsteam-anda hade jag ett flertal roller, bland
                        annat grafisk designer. I samband med ett nytt
                        utvecklingsprojekt blev jag tilldelad rollen som inhouse
                        UI-designer.
                    </p>
                </div>
                <div className='text-center md:text-left col-span-1'>
                    <p>
                        Jag hade en aktiv roll att hjälpa frontend utvecklarna
                        att ta fram en användbar <strong>UI-design</strong> för
                        en AI-molntjänstservice inom hissbranschen. På den vägen
                        föddes mitt intresse för programmering som ett år senare
                        ledde mig till att bli en
                        Fullstack-webbutvecklingsstudent hos{' '}
                        <strong>Chas Academy</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Experience;
