import React, { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import TemplateDropdown from "./TemplateDropdown";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Modal from "../../../components/Modal/Modal";
import ModalContent from "../../../components/Modal/ModalContent";
import ModalTitle from "../../../components/Modal/ModalTitle";

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
        <Button onClick={console.log} className="w-fit self-end bg-[#4d7c0f]">
          Create room
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default RoomModal;
