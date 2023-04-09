import React, { ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`border p-3 bg-gray-94 hover:shadow-lg hover: transition duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
