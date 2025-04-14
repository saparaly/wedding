import { useTranslation } from 'react-i18next';

export default function InvitationBlock() {
  const { t, i18n } = useTranslation();
  const isKazakh = i18n.language === 'kk';

  return (
    <div className="relative max-w-md mx-auto p-8">
      <div
        className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full animate-spin-slow pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: `url("https://optim.tildacdn.pro/tild6663-3137-4361-b135-663737366637/-/resize/724x/-/format/webp/Vector.png") no-repeat center`,
          backgroundSize: 'contain',
          opacity: 0.2,
        }}
      />
      <div className="relative z-10 text-center font-serif text-gray-800">
        <h1
          className={`text-2xl mb-4 font-bold whitespace-pre-line ${
            isKazakh ? 'text-[#b3ac92]' : 'text-[#b3ac92]'
          }`}
        >
          {t('invite_title')}
        </h1>
        <h2 className="text-2xl text-[#b3ac92] italic mb-4">{t('invite_names')}</h2>
        <p className="whitespace-pre-line">{t('invite_message')}</p>
      </div>
    </div>
  );
}
