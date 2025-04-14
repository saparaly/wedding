import 'aos/dist/aos.css';
import AddressBlock from './AddressBlock';
import DressCodeBlock from './DressCodeBlock';
import InvitationBlock from './InvitationBlock';
import MusicButton from './MusicButton';
import { Program } from './Proggram';
import RespectBlock from './RespectBlock';
import RsvpForm from './RsvpForm';
import WeddingCalendar from './WeddingCalendar';
import WeddingCountdown from './WeddingCountdown';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const logo = currentLang === 'kk' ? './kazlogo.png' : './salogo.png';

  return (
    <>
      <div className="h-[740px] relative">
        <img src="./main.jpg" alt="" />
        <div
          className="absolute top-[243px] left-0 w-full h-[135px]
          bg-gradient-to-b from-transparent via-[#fbfafb]/40 to-[#fbfafb]"
        />
        <div className="absolute top-[400px] left-0">
          <img src={logo} alt="logo" />
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
