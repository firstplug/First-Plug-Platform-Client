"use client";
import Photo from "../../public/employees/member.jpg";
import Image from "next/image";
import { Button, TeamCard } from "@/common";
import { PenIcon, StatusCircleIconShipment, TrashIcon } from "@/common/Icons";
import { Memberservices } from "@/services";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import { AsideType, TeamMember, ShipmentStatus} from "@/types";
import { StatusColor } from "@/common/StatusColors";

interface TeamMemberCardProps {
  member: TeamMember;
  _id: string;
  shipmentDetails?: ShipmentStatus;
  teams: string[];
  className?: string;
}

export const TeamMemberCard = observer(function ({
  member,
  _id,
  shipmentDetails,
  teams,
  className,
}: TeamMemberCardProps) {
  const {
    aside: { setAside },
    members: { setMembers, setSelectedMember },
  } = useStore();

  const handleModal = (asideType: AsideType) => {
    setSelectedMember(member._id);
    setAside(asideType);
  };

  const handleDeleteMember = () => {
    Memberservices.deleteMember(_id).then((res) => {
      Memberservices.getAllMembers().then((res) => {
        setMembers(res);
      });
    });
  };
  const shipmentStatusColor: StatusColor =
    shipmentDetails === "Complete" ? "success" : "error";

  return (
    <>
      <div
        className={`flex flex-col gap-2  mx-auto rounded-lg border border-border p-4 font-inter ${className}`}
      >
        <header className="flex justify-between items-start">
          <div className="flex gap-2">
            <Image
              src={member.img || Photo}
              alt="colabPhoto"
              className="w-1/3 object-cover rounded-md"
              width={50}
              height={50}
            />

            <div className="ml-1 flex flex-col  items-start">
              <div className="flex items-center gap-1">
                {!teams.length ? (
                  <TeamCard team={"Assing to team"} key={"no team"} />
                ) : (
                  teams.map((team) => <TeamCard team={team} key={team} />)
                )}
              </div>
              <h2
                className="text-black font-bold cursor-pointer"
                onClick={() => handleModal("MemberDetails")}
              >
                {member.firstName} {member.lastName}
              </h2>
              <b className="text-dark-grey">#00{member._id.slice(0, 6)}</b>
            </div>
          </div>
          <div className="flex gap-1">
            <Button
              variant="text"
              icon={
                <PenIcon
                  strokeWidth={2}
                  className="text-dark-grey w-[1.2rem] h-[1.2rem]"
                />
              }
              onClick={() => handleModal("EditMember")}
            />
            <Button
              variant="text"
              onClick={handleDeleteMember}
              body={
                <TrashIcon
                  strokeWidth={2}
                  className=" text-dark-grey w-[1.2rem] h-[1.2rem] hover:text-error"
                />
              }
            />
          </div>
        </header>
        <section className="flex flex-col gap-2 justify-start">
          <div className="flex   items-center gap-3">
            <h2 className="font-semibold text-lg">Job Position:</h2>
            <p>{member.jobPosition}</p>
          </div>
          <div className="flex items-center  gap-3">
            <h2 className="font-semibold text-lg">Products</h2>
            <p className="bg-border  rounded-full h-6 w-6 text-center  grid place-items-center items text-sm">
              {/* //TODO: Check and fix this data, not hardcode */}
              {2}
            </p>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="font-semibold">Shipment Details:</h2>
            <p
              className="flex items-center gap-2"
              style={{ textTransform: "capitalize" }}
            >
              <StatusCircleIconShipment color={shipmentStatusColor} />

              {shipmentDetails}
            </p>
          </div>
        </section>
      </div>
    </>
  );
});
