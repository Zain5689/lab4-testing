import { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    setShowCount(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-50 p-8 bg-gray-50 rounded-xl border border-gray-200 shadow-sm transition-all">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>

      <button
        onClick={handleIncrement}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Increment
      </button>

      <div className="h-10 mt-6">
        {showCount && (
          <p className="text-lg font-semibold text-gray-600 animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="...">Current Count: {count}</p>
            <span className="text-blue-600 text-xl">{count}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default About;
