import { useTeamMemberStore } from "@/models/teamMeber.store";
import ColaboratorCard from "./ColaboratorCard";
import { observer } from "mobx-react-lite";

export default observer(function GridTeam({ members }) {
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
