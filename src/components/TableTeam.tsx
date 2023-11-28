import { Button, TeamCard } from "@/common";
import { PenIcon, StatusCircleIcon, TrashIcon } from "@/common/Icons";
import { useStore } from "@/models/root.store";
import { AsideType } from "@/types";

interface TableTeamProps {
  className?: string;
}

export const TableTeam = function ({ className }: TableTeamProps) {
  const {
    aside: { setAside },
    members: { members },
  } = useStore();

  const handleModal = (option: AsideType) => {
    setAside(option);
  };

  return (
    <table
      className={` flex-col w-full rounded-lg overflow-hidden ${
        className || ""
      }`}
    >
      <thead>
        <tr className="border-b-2 border-gray-200 bg-light-grey text-black text-left">
          <th className="py-3 px-3">ID</th>
          <th className="py-3 px-3">Full Name</th>
          <th className="py-3 px-3">Date of Birth</th>
          <th className="py-3 px-3">Joining Date</th>
          <th className="py-3 px-3">Team</th>
          <th className="py-3 px-3">Job Position</th>
          <th className="py-3 px-3">Shipment Details</th>

          <th></th>
        </tr>
      </thead>
      <tbody>
        {members?.map((member) => (
          <tr
            key={member._id}
            className="bg-white text-black border-b-2 border-gray-200 text-left"
          >
            <td className="  py-4 px-3 ">{`${member._id.slice(0, 5)}...`} </td>
            <td className="  py-4 px-3">
              <b>
                {member.firstName} {member.lastName}
              </b>
            </td>
            <td className="  py-4 px-3">{member.dateOfBirth}</td>
            <td className=" py-4 px-3">{member.joiningDate}</td>
            <td className=" py-4 px-3">
              {member.teams.length ? (
                member.teams.map((t) => (
                  <TeamCard
                    key={`table-team-${t}`}
                    team={t || ""}
                    className={"text-lg"}
                  />
                ))
              ) : (
                <TeamCard team={"Assing to team"} className={"text-lg"} />
              )}
            </td>
            <td className=" py-4 px-3">{member.jobPosition}</td>
            <td className=" py-4 px-3 ">
              <div className="flex items-center gap-1">
                {/* TODO: Use shipment status component? */}
                <StatusCircleIcon />
              </div>
            </td>
            <td className=" py-4 px-3 ">
              <div className="flex gap-5">
                <Button onClick={() => handleModal("EditMember")}>
                  <PenIcon strokeWidth={2} className="w-[1rem] h-[1rem]" />
                </Button>
                <Button>
                  <TrashIcon className={"w-[1rem] h-[1rem]"} />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
