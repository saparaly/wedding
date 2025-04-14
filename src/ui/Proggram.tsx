import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Program = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const steps = [
    {
      time: '17:30',
      title: 'Сбор гостей',
      image: './one.jpg',
    },
    {
      time: '18:00',
      title: 'Начало торжества',
      image: './two.jpg',
    },
    {
      time: '21:00',
      title: 'Сладости вечера',
      image: './three.jpg',
    },
    {
      time: '23:30',
      title: 'Окончание вечера',
      image: './last.jpg',
    },
  ];

  return (
    <section className="relative w-full max-w-3xl mx-auto py-8 px-4 pb-0">
      <h2 className="text-center text-2xl font-bold mb-8 text-[#b3ac92]" data-aos="fade-in">
        Программа вечера:
      </h2>

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gray-300 -translate-x-1/2" />

        {steps.map((step, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`relative mb-16 flex items-start w-full ${
                isLeft ? 'justify-start' : 'justify-end'
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div
                className={`w-1/2 p-4 flex ${
                  isLeft ? 'justify-end' : 'justify-start'
                }`}
              >
                <div className={`${isLeft ? 'text-right' : 'text-left'}`}>
                  <div className="text-lg font-bold text-gray-700">
                    {step.time}
                  </div>
                  <div className="text-sm text-gray-600">{step.title}</div>
                </div>
              </div>

              <div
                className="w-4 h-4 bg-gray-500 rounded-full z-10 mt-1 mx-2"
                data-aos="zoom-in"
              />

              <div
                className={`w-1/2 p-4 flex ${
                  isLeft ? 'justify-start' : 'justify-end'
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-16 h-16 object-cover rounded-full border border-gray-300"
                  data-aos="flip-left"
                  data-aos-delay={idx * 150}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
