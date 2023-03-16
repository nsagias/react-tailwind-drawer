export default function GridLayout() {
  return (
    <div className="bg-yellow-300 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-1 gap-y-2">
        <div className="col-span-1 md:col-span-2 lg:row-span-2 bg-black p-3 rounded text-white w-full h-full shadow-2xl">1</div>
        <div className="bg-black p-3 rounded text-white box">2</div>
        <div className="bg-black p-3 rounded text-white box">3</div>
        <div className="bg-black p-3 rounded text-white box">4</div>
        <div className="bg-black p-3 rounded text-white box">5</div>
        <div className="bg-black p-3 rounded text-white box">6</div>
        <div className="bg-black p-3 rounded text-white box">7</div>
      </div>
    </div>
  );
}