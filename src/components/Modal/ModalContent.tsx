import React, { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const ModalContent: React.FC<PropsType> = ({ children }) => {
  return (
    <>
      <hr className="bg-[#24201f] text-[#24201f] border-[#24201f] border-[1px]" />
      <div className="flex px-6 py-4 gap-4 flex-col">
        {children}
      </div>
    </>
  );
};

export default ModalContent;
