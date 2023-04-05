import React, { useEffect, useRef } from "react";

type PropsType = {
  value: string;
  focus: boolean;
  setValue: (newVal: string) => void;
  placeholder: string
};

const Input: React.FC<PropsType> = ({ value, focus, setValue, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus) inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      value={value}
      className="flex items-center w-full rounded-xl h-10 outline-none bg-[#292524] ring-1 text-white/80 ring-white/60 px-4"
      onClick={(e) => e.stopPropagation()}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
