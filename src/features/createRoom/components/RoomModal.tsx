import React, { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import Input from "../../../components/Input/Input";
import Modal from "../../../components/Modal/Modal";
import ModalContent from "../../../components/Modal/ModalContent";
import ModalTitle from "../../../components/Modal/ModalTitle";
import TemplateDropdown from "./TemplateDropdown";

type RoomModalType = {
  onClose: () => void;
};

const RoomModal: React.FC<RoomModalType> = ({ onClose }) => {
  const [roomName, setRoomName] = useState("");

  useHotkeys("esc", onClose);

  return (
    <Modal className="select-none">
      <ModalTitle onClose={onClose} text={"Room Configuration"} />
      <ModalContent>
        <span className="text-xs text-gray-500">
          Start a new room with the following options.
        </span>
        <Input
          focus={true}
          setValue={setRoomName}
          value={roomName}
          placeholder={"Enter room name"}
        />
        <TemplateDropdown />
        <button
        className="bg-[#4d7c0f] flex w-fit self-end items-center gap-4 px-4 py-2 hover:opacity-80 hover:brightness-150 rounded-xl"
        onClick={console.log}
      >
        <span>Create Room</span>
      </button>
      </ModalContent>
    </Modal>
  );
};

export default RoomModal;
