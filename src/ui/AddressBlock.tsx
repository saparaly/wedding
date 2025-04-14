import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AddressBlock() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="flex flex-col items-center bg-[#fbfbfb] text-black p-4 rounded-md w-full max-w-sm mx-auto "
      data-aos="fade-up"
    >
      <h2 className="text-xl font-bold mb-2 text-center">Ждем вас по адресу:</h2>
      <p className="text-center text-lg mb-4 text-[#b3ac92]">
        Ресторан «Grandfestival»<br />
        г. Астана, ул. Достык 4
      </p>


      <a
        href="https://2gis.kz/astana/geo/70000001042727082"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black"
      >
      <div className="flex items-center gap-2" data-aos="zoom-in">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 animate-bounce"
          fill="#b3ac92"
          viewBox="0 0 384 512"
        >
          <path d="M168 0C75.1 0 0 75.1 0 168c0 87.2 66.2 159.2 152 167.4V512h80V335.4C321.8 327.2 384 255.2 384 168 384 75.1 308.9 0 216 0H168zm48 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z" />
        </svg>
        <span className="text-lg font-semibold text-black">2ГИС</span>
      </div>
      </a>
    </div>
  );
}
