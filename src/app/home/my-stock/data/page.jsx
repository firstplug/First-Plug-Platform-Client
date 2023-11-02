"use client";

import Table from "@/components/Table";
import Layout from "@/common/Layout";
import Button from "@/common/Button";
import { ShopIcon, UpLoadIcon } from "@/common/Icons";
import Aside from "@/components/Aside";
import useModal from "@/hooks/useModal";
import SearchInput from "@/common/SearchInput";
import { useState } from "react";
import RadioButtons from "@/components/RadioButtons";
import { useRouter } from "next/navigation";

export default function MyStock() {
  const router = useRouter();

  const { closeModal, isModalOpen, openModal } = useModal();

  const [optionSelected, setOptionSelected] = useState(null);

  const fakeData = [
    { id: 1, name: "Santiago Sucari", jobPosition: "Sales Team" },
    { id: 2, name: "Matías", jobPosition: "Sales Team" },
    { id: 3, name: "Ezequiel", jobPosition: "Sales Team" },
  ];

  const handleOptionSelected = (persona) => {
    setOptionSelected(persona);
  };

  return (
    <Layout className="flex flex-col gap-5 overflow-auto pb-1">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <input type="checkbox" />
          <label className="ml-2 text-gray-500">
            Show only avaliable stock
          </label>
        </div>

        <div className="flex  gap-5 mr-3">
          <div>
            <Button
              variant="secondary"
              body="Load Stock"
              icon={<UpLoadIcon />}
              className="p-3 rounded-md"
            />
          </div>
          <div>
            <Button
              variant="primary"
              icon={<ShopIcon />}
              body="Shop Now"
              className="p-3 rounded-md"
              onClick={() => {
                router.push("/shop");
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Table />
      </div>
    </Layout>
  );
}
