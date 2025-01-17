import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 py-4">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="text-gray-600 text-sm">Loading...</p>
    </div>
  );
};

export default Loading;
