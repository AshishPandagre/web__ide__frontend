import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import Button from "../components/shared/Button/Button";
import RoomModal from "../components/RoomModal/RoomModal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  useHotkeys("ctrl+o", () => setOpenModal(true), {
    preventDefault: true,
  });

  return (
    <div className="flex items-center justify-center h-screen text-lg text-white">
      <Button onClick={() => setOpenModal(true)}>
        <span>New Room</span>
        <span className="text-base text-white/70">Ctrl + O</span>
      </Button>
      {openModal && <RoomModal onClose={() => setOpenModal(false)} />}
    </div>
  );
};

export default Home;
