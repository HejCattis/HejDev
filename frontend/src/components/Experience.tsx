const Experience = () => {
  return (
    <section id='experience' className='mt-10 max-w-5xl mx-auto'>
      <h2 className='font-semibold text-2xl my-4 text-center'>Erfarenhet</h2>
      <section className="flex justify-around">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className='text-purple font-medium text-4xl'>+8 år</h3>
          <h4 className="text-lg">Marknadsföring</h4>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className='text-purple font-medium text-4xl'>+5 år</h3>
          <h4 className="text-lg">Grafisk design</h4>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className='text-purple font-medium text-4xl'>+3 år</h3>
          <h4 className="text-lg">Projekthantering</h4>
        </div>
      </section>
      
    </section>
  );
};
export default Experience;
