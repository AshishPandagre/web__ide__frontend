import React, { useEffect, useRef } from "react";
import { FaRandom } from "react-icons/fa";
import {
  Config,
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from "unique-names-generator";

type PropsType = {
  value: string;
  focus: boolean;
  setValue: (newVal: string) => void;
  placeholder: string;
};

const Input: React.FC<PropsType> = ({
  value,
  focus,
  setValue,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus) inputRef.current?.focus();
  }, []);

  const config: Config = {
    dictionaries: [adjectives, colors, animals],
    separator: "-",
  };

  return (
    <div className="flex flex-col items-center w-full just">
      <FaRandom
        className="absolute self-end mt-3 mr-3 cursor-pointer hover:fill(black)"
        fill="rgb(255,255,255,0.6)"
        onClick={(e) => setValue(uniqueNamesGenerator(config))}
      />
      <input
        ref={inputRef}
        value={value}
        className="w-full rounded-xl h-10 outline-none bg-[#292524] ring-1 text-white/80 ring-white/60 px-4"
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
