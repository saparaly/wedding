import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../i18n'; 

export default function LangSelect() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    navigate('/wedding/home');
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('https://static.tildacdn.pro/tild6237-3134-4436-a536-376631356239/photo.jpg')" }}
    >
      <div className="max-w-sm w-full bg-opacity-90 p-6 rounded text-center font-serif">
        <h2 className="text-xl text-[#b3ac92] mb-2 font-bold">
        Құрметті қонақтар!
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Тойға шақыруды қазақ тілінде көру үшін төмендегі сілтемені басыңыз:
        </p>
        <button
          className="block w-full py-2 px-4 mb-6 bg-[#b3ac92] text-white rounded"
          onClick={() => changeLanguage('kk')}
        >
          Қазақ тілі
        </button>

        <h2 className="text-xl text-[#b3ac92] mb-2 font-bold">
          Дорогие гости!
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Для просмотра приглашения на русском языке нажмите на ссылку ниже:
        </p>
        <button
          className="block w-full py-2 px-4 bg-[#b3ac92] text-white rounded"
          onClick={() => changeLanguage('ru')}
        >
          Русский язык
        </button>
      </div>
    </div>
  );
}
