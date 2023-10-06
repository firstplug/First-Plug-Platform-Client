import Button from "@/common/Button";
import TeamDeatils from "./TeamDeatils";

export default function EditTeamsAsideDetails({
  className = "",
  teams,
  members,
}) {
  return (
    <div className={` ${className} flex flex-col justify-between h-full `}>
      <div className="flex flex-col gap-2   h-[70vh] overflow-y-auto">
        {teams.map((team) => (
          <TeamDeatils team={team.name} members={members} key={team.id} />
        ))}
      </div>

      <div className="flex gap-2">
        <Button
          variant="primary"
          disabled
          size="big"
          className="flex-grow rounded-md"
        >
          Delete
        </Button>
        <Button variant="primary" size="big" className="flex-grow rounded-md">
          Save
        </Button>
      </div>
    </div>
  );
}
