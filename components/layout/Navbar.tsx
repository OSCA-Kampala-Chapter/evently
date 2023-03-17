export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <span className="text-2xl text-gray-900 font-semibold">
              evently
            </span>
          </div>
          <div className="flex space-x-4 text-gray-900">
            <button className="bg-white text-black px-6 py-1 border rounded-lg">
              Star on Github
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
