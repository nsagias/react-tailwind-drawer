export default function GridLayout() {
  return (
    <div className="bg-yellow-300 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-3">
        <div className="bg-black p-3 rounded text-white">1</div>
        <div className="bg-black p-3 rounded text-white">2</div>
        <div className="bg-black p-3 rounded text-white">3</div>
        <div className="bg-black p-3 rounded text-white">4</div>
        <div className="bg-black p-3 rounded text-white">5</div>
        <div className="bg-black p-3 rounded text-white">6</div>
        <div className="bg-black p-3 rounded text-white">7</div>
        <div className="bg-black p-3 rounded text-white">8</div>
        <div className="bg-black p-3 rounded text-white">9</div>
      </div>
    </div>
  );
}