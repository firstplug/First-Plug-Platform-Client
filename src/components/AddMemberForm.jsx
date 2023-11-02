import SearchInput from "@/common/SearchInput";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
export default observer(function AddMemberForm({ handleSelectedMembers }) {
  const { members } = useStore();
  return (
    <section>
      <SearchInput placeholder="Search Member" />
      <div className="flex flex-col gap-3 mt-3">
        {members.members.map((member) => (
          <div className="  flex gap-2 items-center " key={member._id}>
            <input
              type="checkbox"
              onChange={() => handleSelectedMembers(member)}
            />
            <div className="flex gap-2">
              <b className="text-black">
                {member.firstName} {member.lastName}
              </b>
              <span className="text-dark-grey">{member._id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
