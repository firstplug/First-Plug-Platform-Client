"use client";
import { IconX } from "@/common/Icons";
import AsideContent from "./AsideContent";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import AsideTitle from "@/common/AsideTitle";
export default observer(function Aside({ title, closeModal, className = "" }) {
  const { aside } = useStore();

  return aside.isOpen ? (
    <>
      {/* overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-10 backdrop-blur-[1px] bg-grey bg-opacity-50`}
      ></div>

      {/* aside */}
      <aside
        className={`flex flex-col fixed top-0 right-0 h-full w-[35%] min-w-[600px] shadow-md shadow-gray-400 px-14 py-10 bg-white z-20 transform transition-transform duration-300 "translate-x-full`}
      >
        {/* header */}
        <header className="flex justify-between items-center">
          <h2 className="text-2xl font-sans text-black font-semibold">
            <AsideTitle />
          </h2>
          <button onClick={() => aside.closeAside()}>
            <IconX className="h-8 w-8" />
          </button>
        </header>

        <div className={`flex-[1] mt-[40px] ${className}`}>
          <AsideContent />
        </div>
      </aside>
    </>
  ) : null;
});
