import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import RoomModal from "../features/createRoom/components/RoomModal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  useHotkeys("ctrl+o", () => setOpenModal(true), {
    preventDefault: true,
  });

  return (
    <div className="flex items-center justify-center h-screen text-lg text-white">
      <button
        className="bg-[#4d7c0f] flex items-center gap-4 px-4 py-2 hover:opacity-80 hover:brightness-150 rounded-xl"
        onClick={() => setOpenModal(true)}
      >
        <span>New Room</span>
        <span className="text-base text-white/70">Ctrl + O</span>
      </button>
      {openModal && <RoomModal onClose={() => setOpenModal(false)} />}
    </div>
  );
};

export default Home;
