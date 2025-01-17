import { useCallback, useEffect, useState } from 'react';
import slide4 from '/images/hero/4.jpg';
import slide5 from '/images/hero/5.jpg';
import slide1 from '/images/hero/6.jpg';

export default function Hero() {
  const [currentSlider, setCurrentSlider] = useState(0);

  const carouselImages = [
    { title: 'Ford Focus', des: 'Hatchback', img: slide4, offer: '10%' },
    { title: 'RANGE ROVER', des: 'SUV', img: slide5, offer: '7%' },
    { title: 'Maserati', des: 'Coupe', img: slide1, offer: '9%' },
  ];

  const nextSlider = useCallback(
    () => setCurrentSlider((currentSlider) => (currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1)),
    [carouselImages.length]
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <section className="flex my-4 flex-col md:flex-row">
      <div className="h-72 w-full transform overflow-hidden rounded-lg before:bg-black/50 sm:h-96 md:h-[540px] lg:gap-10">
        {carouselImages.map((slide, index) => {
          const { img, title, des, offer } = slide;
          return (
            <div
              className={`${
                index === currentSlider ? 'visible opacity-100' : 'invisible opacity-0'
              } absolute inset-0 duration-500 ease-linear`}
              key={`index_${index}`}
            >
              <img
                src={img}
                width="1200"
                height="600"
                alt={title}
                className={`h-full w-full object-cover duration-500 ease-linear ${index === currentSlider ? 'scale-100' : 'scale-105'}`}
              />

              <div className="absolute inset-0 flex flex-col bg-black/40 p-5 text-center text-white drop-shadow-lg">
                <p
                  className={`${
                    index === currentSlider ? '' : '-translate-y-6'
                  } duration-500 ease-linear bg-orange-200 mt-0 ml-auto rounded-md px-2 py-1 text-orange-700`}
                >
                  {offer} OFF
                </p>
                <div className="mb-0 mt-auto rounded-md bg-white/40 max-w-sm p-3 backdrop-blur-3xl">
                  <div className="mb-1 overflow-hidden text-xl font-semibold lg:text-3xl">
                    <h1 className={`${index === currentSlider ? '' : 'translate-y-12'} duration-500 ease-linear`}>{title}</h1>
                  </div>
                  <div className="overflow-hidden text-sm md:text-base lg:text-lg">
                    <p className={`${index === currentSlider ? '' : '-translate-y-12'} duration-500 ease-linear text-white`}>{des}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex md:flex-col items-center justify-end gap-3 pt-3 md:pl-3">
        {carouselImages.map((slide, index) => {
          const { img, title } = slide;
          return (
            <img
              key={index}
              src={img}
              width={1200}
              height={600}
              className={`bg-black/20 h-12 w-20 ${
                currentSlider === index ? 'opacity-100 ring ring-zinc-500' : 'opacity-60'
              } box-content cursor-pointer rounded-md md:rounded-lg`}
              alt={title}
              onClick={() => setCurrentSlider(index)}
            />
          );
        })}
      </div>
    </section>
  );
}
