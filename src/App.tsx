import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WeddingCalendar from './ui/WeddingCalendar';
import { Program } from './ui/Proggram';
import AddressBlock from './ui/AddressBlock';
import WeddingCountdown from './ui/WeddingCountdown';
import DressCodeBlock from './ui/DressCodeBlock';
import RsvpForm from './ui/RsvpForm';
import MusicButton from './ui/MusicButton';
import InvitationBlock from './ui/InvitationBlock';
import RespectBlock from './ui/RespectBlock';

export default function ProgramTimeline() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
    <div className='h-[740px]'>
      <img src="./main.jpg"></img>
      <div
    className="absolute top-[243px] left-0 w-full h-[135px]
               bg-gradient-to-b from-transparent via-[#fbfafb]/40 to-[#fbfafb]"
  />
      <div className='absolute top-[400px] left-0'>
        <img src="./salogo.png" alt="" />
      </div>
    </div>
        <MusicButton />
        <InvitationBlock />
        <WeddingCalendar />
        <WeddingCountdown />
        <RespectBlock />
        <DressCodeBlock />
        <Program />
        <AddressBlock />
        <RsvpForm />
    </>
  );
}
