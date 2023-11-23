import heroImg from '../assets/hero.svg';

const Hero = () => {
  return (
    <div className='bg-yellow-900 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
       <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">Hello I am Maeyda</h1>
        <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Front-End Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
           </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};
export default Hero;