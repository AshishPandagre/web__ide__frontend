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
    <div className="just flex w-full flex-col items-center">
      <FaRandom
        className="hover:fill(black) absolute mr-3 mt-3 cursor-pointer self-end"
        fill="rgb(255,255,255,0.6)"
        onClick={(e) => setValue(uniqueNamesGenerator(config))}
      />
      <input
        ref={inputRef}
        value={value}
        className="h-10 w-full rounded-xl bg-black/20 px-4 text-white/80 outline-none ring-1 ring-white/60"
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
