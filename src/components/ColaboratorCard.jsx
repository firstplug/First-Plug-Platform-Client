"use client";
import { useState } from "react";
import Photo from "../../public/employees/member.jpg";
import Image from "next/image";
import Button from "@/common/Button";
import TeamCard from "@/common/TeamCard";
import { PenIcon, StatusCircleIcon, TrashIcon } from "@/common/Icons";
import useModal from "@/hooks/useModal";
import Aside from "./Aside";
import MemberAsideDetails from "./MemberAsideDetails";
import Input from "@/common/Input";
import DropdownInput from "@/common/DropdownInput";

export default function ColaboratorCard({
  member,
  name,
  lastName,
  id,
  img,
  jobPosition,
  products,
  shimentsDetails = "incomplete",
  team,
  className,
}) {
  const { openModal, closeModal, isModalOpen } = useModal();
  const [optionAside, setOptionAside] = useState("details");

  const handleModal = (option) => {
    setOptionAside(option);
    openModal();
  };

  return (
    <>
      <div
        className={`flex flex-col gap-2  mx-auto rounded-lg border border-border p-4 font-inter ${className}`}
      >
        <header className="flex justify-between items-start">
          <div className="flex gap-2">
            <Image
              src={img || Photo}
              alt="colabPhoto"
              className="w-1/3 object-cover rounded-md"
            />

            <div className="ml-1 flex flex-col  items-start">
              <TeamCard team={team} />
              <h2
                className="text-black font-bold cursor-pointer"
                onClick={() => handleModal("details")}
              >
                {name} {lastName}
              </h2>
              <b className="text-dark-grey">{id}</b>
            </div>
          </div>
          <div className="flex gap-1">
            <Button
              icon={
                <PenIcon
                  stroke={2}
                  className="text-dark-grey w-[1.2rem] h-[1.2rem]"
                />
              }
              onClick={() => handleModal("edit")}
            />
            <Button
              body={
                <TrashIcon
                  stroke={2}
                  className=" text-dark-grey w-[1.2rem] h-[1.2rem]"
                />
              }
            />
          </div>
        </header>
        <section className="flex flex-col gap-2 justify-start">
          <div className="flex   items-center gap-3">
            <h2 className="font-semibold text-lg">Job Position: </h2>
            <p>{jobPosition}</p>
          </div>
          <div className="flex items-center  gap-3">
            <h2 className="font-semibold text-lg">Products</h2>
            <p className="bg-border  rounded-full h-6 w-6 text-center  grid place-items-center items text-sm">
              {products.length}
            </p>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="font-semibold">Shipment Details:</h2>
            <p className="flex items-center gap-2">
              <StatusCircleIcon status={shimentsDetails} />

              {shimentsDetails
                .slice(0, 1)
                .toUpperCase()
                .concat(shimentsDetails.slice(1))}
            </p>
          </div>
        </section>
      </div>
      {isModalOpen &&
        (optionAside === "details" ? (
          <Aside closeModal={closeModal}>
            <MemberAsideDetails member={member} />
          </Aside>
        ) : (
          <Aside
            title="Team Member"
            closeModal={closeModal}
            className="overflow-y-auto outline-red-400 text-md"
          >
            <div className="flex flex-col gap-6 pr-4 pb-10">
              <div className="flex gap-4">
                <div className="relative w-36 h-36">
                  <Image
                    src={img || Photo}
                    alt="Colaborator"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-[75%] flex flex-col gap-4">
                  <Input title="Name" />
                  <Input title="Lastname" />
                </div>
              </div>
              <Input title="Date of Birth" type="Date" />
              <div className="flex gap-4">
                <Input title="Phone Number" type="tel" className="w-1/2" />
                <Input title="Email Address" type="email" className="w-1/2" />
              </div>

              <h3 className="text-lg text-black font-inter  font-semibold border-t pt-4">
                Employee Information
              </h3>

              <DropdownInput title="Select Team" />
              <p>Does the theam not exist yet?</p>

              <Input title="Job position" className="pr-4" />

              <div className=" border-t flex justify-between items-center">
                <h3 className="text-lg text-black font-inter font-semibold pt-4">
                  Shipment Details
                </h3>
                <span className="pt-4">Complete</span>
              </div>

              <div className="flex gap-4">
                <DropdownInput title="City" />
                <DropdownInput title="State" />
              </div>

              <div className="flex gap-1">
                <Input title="Zip code" className="w-1/6" />
                <Input title="Address" className="w-3/6" />
                <Input title="Appartament, Suite, etc." className="w-2/6" />
              </div>

              <div className="flex gap-4">
                <Input title="Joining Date" type="Date" className="w-1/2" />
                <DropdownInput title="Time slot for delivery" />
              </div>

              <div className="flex flex-col gap-1 m-auto w-[98%]">
                <label className="block text-dark-grey font-sans">
                  Additional Information
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Comments..."
                  className="border-2 p-2"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <Button
                  icon={
                    <TrashIcon
                      stroke={2}
                      className="text-error y w-[1.2rem] h-[1.2rem]"
                    />
                  }
                  body="Delete Member"
                  className="text-error text-md font-bold"
                />
              </div>

              <div className="fixed bottom-5 w-[85%]">
                <Button
                  body="Save "
                  variant="primary"
                  size="big"
                  className="w-full rounded-md"
                />
              </div>
            </div>
          </Aside>
        ))}
    </>
  );
}
