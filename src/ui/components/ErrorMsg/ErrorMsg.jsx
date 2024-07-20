import React from "react";

const ErrorMsg = () => {
  return (
    <div
      className="w-full h-full bg-red-100 text-red-700 px-4 py-3 rounded relative z-20"
      role="alert"
    >
      <strong className="font-bold">An error has occurred</strong>
    </div>
  );
};

export default ErrorMsg;
