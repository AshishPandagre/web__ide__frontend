import { AiOutlineClose } from "react-icons/ai";

type PropsType = {
  onClose: () => void;
  text: string
};

const ModalTitle: React.FC<PropsType> = ({onClose, text}) => {
  return (
    <div className="flex items-center justify-between px-6 pb-4">
      <h2 className="text-2xl font-semibold">{text}</h2>
      <AiOutlineClose
        color="white"
        className="hover:cursor-pointer"
        size={25}
        onClick={onClose}
      />
    </div>
  );
};

export default ModalTitle;
