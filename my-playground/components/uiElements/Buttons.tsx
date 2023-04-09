import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Additional props if needed
}

const PrimaryButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest}
    className="px-10 py-1 text-xs text-white border-2 rounded-none border-tomato-orange bg-tomato-orange sharp-corners">
      {children}
    </button>
  );
};

const SecondaryButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest}
    className="px-10 py-1 text-xs text-black bg-white border-2 border-black sharp-corners text-xxs">
      {children}
    </button>
  );
};

export { PrimaryButton, SecondaryButton };