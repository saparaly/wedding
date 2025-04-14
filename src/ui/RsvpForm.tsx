import { useState, useEffect, FormEvent } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

type FeedbackType = { type: 'success' | 'error'; text: string } | null;

export default function RsvpForm() {
  const [fullname, setFullname] = useState('');
  const [attendance, setAttendance] = useState('');
  const [feedback, setFeedback] = useState<FeedbackType>(null);

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Простая валидация
    if (!fullname.trim()) {
      setFeedback({ type: 'error', text: 'Пожалуйста, введите Ваше имя.' });
      return;
    }
    if (!attendance) {
      setFeedback({ type: 'error', text: 'Укажите, придёте ли Вы.' });
      return;
    }

    try {
      await addDoc(collection(db, 'rsvps'), {
        fullname,
        attendance,
        submittedAt: new Date(),
      });
      setFeedback({ type: 'success', text: 'Ваш ответ успешно отправлен!' });
      setFullname('');
      setAttendance('');
    } catch (error) {
      console.error('Ошибка при отправке ответа:', error);
      setFeedback({ type: 'error', text: 'Произошла ошибка. Повторите попытку позже.' });
    }
  };

  // Функция для рендера кастомной радио кнопки
  const renderRadioOption = (value: string, labelText: string) => {
    const isChecked = attendance === value;
    return (
      <label className="flex items-center text-gray-800 cursor-pointer">
        <input
          type="radio"
          name="attendance"
          value={value}
          checked={isChecked}
          onChange={(e) => setAttendance(e.target.value)}
          className="hidden"
        />
        <span
          className={`w-5 h-5 mr-2 inline-block rounded-full border flex items-center justify-center 
            ${isChecked ? 'border-[#b3ac92] bg-[#b3ac92]' : 'border-gray-400 bg-white'}`}
        >
          {isChecked && <span className="w-3 h-3 rounded-full bg-white" />}
        </span>
        {labelText}
      </label>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      {/* Контейнер формы */}
      <div className="relative w-full max-w-md bg-[#fbfbfb] p-6 rounded-md">
        {/* Всплывающее уведомление */}
        {feedback && (
          <div
            className={`
              absolute top-4 right-4 p-4 border-l-4 rounded shadow transition-transform duration-300
              ${feedback.type === 'success'
                ? 'border-green-500 bg-green-100 text-green-700'
                : 'border-red-500 bg-red-100 text-red-700'}
            `}
          >
            {feedback.text}
          </div>
        )}

        <h2 className="text-center text-2xl font-bold mb-4 text-[#b3ac92]">
          Просим подтвердить своё присутствие на торжестве
        </h2>

        <form onSubmit={onSubmit}>
          {/* Поле для ФИО */}
          <div className="mb-4">
            <label htmlFor="fullname" className="block mb-2 font-medium text-gray-800">
              ФИО
            </label>
            <input
              id="fullname"
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Ваше имя"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#b3ac92] text-gray-800"
            />
          </div>

          {/* Радио кнопки для выбора присутствия */}
          <div className="mb-4">
            <div className="block mb-2 font-medium text-gray-800">
              Придёте/придёду на свадьбу?
            </div>
            <div className="flex flex-col space-y-2">
              {renderRadioOption('yes', 'С удовольствием буду!')}
              {renderRadioOption('couple', 'Приду/приеду с парой')}
              {renderRadioOption('no', 'К сожалению, не смогу')}
            </div>
          </div>

          {/* Кнопка отправки */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-[#b3ac92] text-white rounded hover:bg-[#a09a82] transition-colors"
            >
              Отправить ответ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
