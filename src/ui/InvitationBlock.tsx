export default function InvitationBlock() {
  return (
    <div className="relative max-w-md mx-auto p-8 bg-white">
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
        <h1 className="text-3xl text-[#b3ac92] mb-4 font-bold">
          Дорогие гости!
        </h1>
        <p className="mb-4 ">
          Приглашаем вас на свадебное торжество, посвящённое бракосочетанию наших детей.
        </p>
        <h2 className="text-2xl text-[#b3ac92] italic mb-4">
          Санжар и Айгерим
        </h2>
        <p className="">
          Будем рады разделить с вами этот счастливый для нас день! Просим присоединиться к празднику и украсить его своим присутствием!
        </p>
      </div>
    </div>
  );
}
