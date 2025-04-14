
export default function RespectBlock() {
  return (
    <div className="text-center my-8 font-serif">
      <p className="text-[#b3ac92] text-xl mb-2 italic">С уважением,</p>
      <h2 className="text-2xl text-[#b3ac92] italic font-bold">
        Самат - Лаура <br/> Ерлан - Тахмина
      </h2>
      <div
        className="mx-auto mt-4"
        style={{
          width: '100px',
          height: '2px',
          background: 'linear-gradient(to right, #b3ac92, rgba(0,0,0,0))',
        }}
      />
    </div>
  );
}
