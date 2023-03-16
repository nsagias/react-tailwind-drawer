export default function ResponsiveGrid() {
  return (
    <>
     <div className="min-h-screen bg-yellow-300 p-10">
      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

        <div className="md:flex md:flex-col md:justify-center">
          <h2 className="text-black text-2xl md:text-4xl lg:text-6xl font-bold mb-4">Responsive</h2>
          <p className="text-lg text-gray-900">Responsive Tailwind</p>
        </div>
        <div className="">
          <div className="w-full h-64 rounded-lg shadow-2xl bg-black"></div>
        </div>

      </div>
    </div>
    </>
  );
}