import ColaboratorCard from "./ColaboratorCard";

interface GridTeamProps {
  members: any[];
}

export default (function GridTeam({ members } : GridTeamProps) {
  return (
    <div className="grid w-full grid-cols-3 gap-2  ">
      {members?.map((member) => (
        <ColaboratorCard
          key={member._id}
          {...member}
          className={"w-full shadow-md"}
          member={member}
        />
      ))}
    </div>
  );
});
