import React, { ReactNode } from "react";

interface PropsType {
  children: ReactNode | ReactNode[];
  onClick: () => void;
  className?: string | undefined;
}

const Button: React.FC<PropsType> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 px-4 py-2 hover:opacity-80 hover:brightness-200 rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
