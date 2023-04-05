import React, { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import ModalContent from "../Modal/ModalContent";
import ModalTitle from "../Modal/ModalTitle";
import TemplateDropdown from "./TemplateDropdown";

type RoomModalType = {
  onClose: () => void;
};

const RoomModal: React.FC<RoomModalType> = ({ onClose }) => {
  const [roomName, setRoomName] = useState("");

  useHotkeys("esc", onClose);

  return (
    <Modal>
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
        <Button onClick={console.log} className="w-fit self-end">Create room</Button>
      </ModalContent>
    </Modal>
  );
};

export default RoomModal;
