import React, { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const ModalContent: React.FC<PropsType> = ({ children }) => {
  return (
    <>
      <hr className="bg-[#3b3b3b] text-[#24201f] border-[#3b3b3b] border-[1px]" />
      <div className="flex px-6 py-4 gap-4 flex-col">
        {children}
      </div>
    </>
  );
};

export default ModalContent;
  