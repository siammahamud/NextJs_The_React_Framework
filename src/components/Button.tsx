import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={`px-4 py-2 rounded-lg font-medium hover:bg-gray-300 ${className}`}>
      {children}
    </button>
  );
};
