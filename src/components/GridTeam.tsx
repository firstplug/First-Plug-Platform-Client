import { useStore } from "@/models";
import { TeamMemberCard } from "./";

export const GridTeam = function () {
  
  const {
    members: { members },
  } = useStore();

  return (
    <div className="grid w-full grid-cols-3 gap-2  ">
      {members.map((member) => (
        <TeamMemberCard
          key={member._id}
          {...member}
          className={"w-full shadow-md"}
          member={member}
        />
      ))}
    </div>
  );
};
