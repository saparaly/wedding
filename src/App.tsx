import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WeddingCalendar from './ui/WeddingCalendar';
import { Program } from './ui/Proggram';
import AddressBlock from './ui/AddressBlock';
import WeddingCountdown from './ui/WeddingCountdown';
import DressCodeBlock from './ui/DressCodeBlock';
import RsvpForm from './ui/RsvpForm';

export default function ProgramTimeline() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
    <div className='h-[725px]'>
      <img src="https://optim.tildacdn.pro/tild3966-6136-4134-b965-336563616336/-/resize/922x/-/format/webp/d77add98a76bf550a95b.jpg"></img>
      <div className="absolute top-[302px] left-0 w-full h-[100px] bg-gradient-to-b from-transparent to-white" />

      <div className='absolute top-[400px] left-0'>
        <img src="./salogo.png" alt="" />
      </div>
    </div>
      
        <WeddingCalendar />
        <WeddingCountdown />
        <DressCodeBlock />
        <Program />
        <AddressBlock />
        <RsvpForm />
    </>
  );
}
