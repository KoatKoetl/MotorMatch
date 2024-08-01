import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export default function TestimonialCarousel() {
  const array = [
    {
      name: 'John Doe',
      designation: 'Student',
      testimonialDescription:
        'MotorMatch made my car buying experience seamless and stress-free. The detailed listings and user-friendly interface helped me find the perfect car in no time. Highly recommend!',
      keyWord:
        'https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Jane Doe',
      designation: 'Freelancer',
      testimonialDescription:
        "Thanks to MotorMatch, I found a great deal on my dream car. The website's comprehensive database and reliable information made the whole process smooth and enjoyable.",
      keyWord:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Merry Jane',
      designation: 'Entrepreneur',
      testimonialDescription:
        "MotorMatch is a game-changer in the car buying industry. The variety of cars available and the detailed descriptions helped me make an informed decision. I'm extremely satisfied with my purchase!",
      keyWord:
        'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Bob Smith',
      designation: 'Creative Professional',
      testimonialDescription:
        "I couldn't be happier with my experience on MotorMatch. The website is intuitive and easy to navigate, making it simple to find exactly what I was looking for. I'll definitely use it again in the future!",
      keyWord:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Eva Williams',
      designation: 'Remote Worker',
      testimonialDescription:
        'MotorMatch exceeded my expectations. The clear and concise listings, combined with the excellent customer support, made buying my car a breeze. I highly recommend it to anyone in the market for a new vehicle.',
      keyWord:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Chris Brown',
      designation: 'Parent',
      testimonialDescription:
        "Finding the right car was a hassle until I discovered MotorMatch. The site's extensive inventory and accurate listings made it possible to find the perfect car without any stress. Fantastic service!",
      keyWord:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Olivia Davis',
      designation: 'Health Professional',
      testimonialDescription:
        "MotorMatch is the best car buying platform I've used. The straightforward search features and detailed car profiles helped me make a confident purchase. I'm thrilled with my new car!",
      keyWord:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Liam Wilson',
      designation: 'Researcher',
      testimonialDescription:
        'I was impressed with how easy it was to search for cars on MotorMatch. The filters allowed me to narrow down my options quickly, and I found the car I wanted within days. Great service!',
      keyWord:
        'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? array.length - 2 : currentSlider - 1));
  const nextSlider = useCallback(
    () => setCurrentSlider((currentSlider) => (currentSlider === array.length - 2 ? 0 : currentSlider + 1)),
    [array.length]
  );
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider, nextSlider]);

  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div className="max-w-full min-w-[300px] h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10">
      <div className="relative overflow-hidden">
        <div className="absolute w-full h-full flex items-center justify-between z-50">
          <button onClick={prevSlider} className="flex justify-center items-center hover:bg-zinc-200 rounded-full w-6 h-6 md:w-8 md:h-8">
            <ChevronLeft />
          </button>
          <button onClick={nextSlider} className="flex justify-center items-center hover:bg-zinc-200 rounded-full w-6 h-6 md:w-8 md:h-8">
            <ChevronRight />
          </button>
        </div>
        {/* slider container */}
        <div
          className="ease-linear duration-300 flex"
          style={{
            transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)`,
          }}
        >
          {/* sliders */}
          {array.map((each, idx) => (
            <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
              <div className="h-full p-4 sm:p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                <Quote className="mb-3" />
                <p className="leading-relaxed text-sm mb-6 text-gray-500">{each?.testimonialDescription}</p>
                <a className="inline-flex items-center">
                  <img
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    src={each.keyWord}
                    alt="carousel navigate ui"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">{each.name}</span>
                    <span className="text-gray-500 text-sm">{each?.designation}</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
