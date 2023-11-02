import React from "react";
import Button from "@/common/Button";
import MemberDetail from "@/common/MemberDetail";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";

export default observer(function MemberAsideDetails({ className }) {
  const { members } = useStore();
  const member = members.oneMember();
  return (
    <article
      className={`${className || ""} flex flex-col justify-between h-full`}
    >
      <div className="flex flex-col gap-6 ">
        <MemberDetail {...member} />

        <hr />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl">Products</h1>
            <p className="bg-border  rounded-full h-6 w-6 text-center  grid place-items-center items text-sm">
              {member.products?.length || 0}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {/* ACA HAY QUE CARGAR LOS PRODUCTS DE LA STORE (store.products) */}
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full flex-nowrap">
        <Button
          body={"Remove"}
          variant={"delete"}
          size={"big"}
          className={"rounded-md w-1/3 "}
        />
        <Button
          body={"Return"}
          variant={"secondary"}
          size={"big"}
          className={"rounded-md w-1/3 "}
        />
        <Button
          body={"Relocate"}
          variant={"secondary"}
          size={"big"}
          className={"rounded-md w-1/3 "}
        />
      </div>
    </article>
  );
});
