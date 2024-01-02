import { TeamMemberCard } from "./";

export const GridTeam = function ({members}) {

  return (
    <div className="grid w-full grid-cols-3 gap-2  ">
      {members.map((member: any) => ( //type this
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
