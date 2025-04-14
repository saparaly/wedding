import { useState, useEffect } from 'react';
import { Form, Input, Radio, Button } from 'antd';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; 

type FeedbackType = { type: 'success' | 'error'; text: string } | null;

export default function RsvpForm() {
  const [form] = Form.useForm();
  const [feedback, setFeedback] = useState<FeedbackType>(null);

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    try {
      await addDoc(collection(db, 'rsvps'), {
        ...values,
        submittedAt: new Date(),
      });
      setFeedback({ type: 'success', text: 'Ваш ответ успешно отправлен!' });
      form.resetFields();
    } catch (error) {
      console.error('Ошибка при отправке ответа:', error);
      setFeedback({ type: 'error', text: 'Произошла ошибка. Повторите попытку позже.' });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-[#fbfbfb] p-6 rounded-md shadow-lg relative">
      {/* Всплывашка уведомления */}
      {feedback && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 border-l-4 rounded shadow 
            ${feedback.type === 'success'
              ? 'border-green-500 bg-green-100 text-green-700'
              : 'border-red-500 bg-red-100 text-red-700'} 
            transform transition-transform duration-300 animate-slide-in`}
        >
          {feedback.text}
        </div>
      )}

      <h2 className="text-center text-2xl font-bold mb-4 text-[#b3ac92]">
        Просим подтвердить своё присутствие на торжестве
      </h2>

      <Form form={form} layout="vertical" requiredMark={false} onFinish={onFinish}>
        <Form.Item
          label="ФИО"
          name="fullname"
          rules={[{ required: true, message: 'Пожалуйста, введите Ваше имя.' }]}
        >
          <Input placeholder="" size="large" />
        </Form.Item>

        <Form.Item
          label="Придёте/придёду на свадьбу?"
          name="attendance"
          rules={[{ required: true, message: 'Укажите, придёте ли Вы.' }]}
        >
          <Radio.Group>
            <Radio value="yes">С удовольствием буду!</Radio>
            <Radio value="couple">Приду/приеду с парой</Radio>
            <Radio value="no">К сожалению, не смогу</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item className="text-center mt-6">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{
              backgroundColor: '#b3ac92',
              borderColor: '#b3ac92',
              borderRadius: '4px',
            }}
          >
            Отправить ответ
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
