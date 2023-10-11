import SearchInput from "@/common/SearchInput";

export default function AddMemberForm({ members, setSelectedMembers }) {
  const handleCheckbox = (member) => {
    setSelectedMembers((prevSelectedMembers) => {
      const isSelected = prevSelectedMembers.some(
        (selected) => selected.id === member.id
      );

      if (isSelected) {
        return prevSelectedMembers.filter(
          (selected) => selected.id !== member.id
        );
      } else {
        return [...prevSelectedMembers, member];
      }
    });
  };

  return (
    <section>
      <SearchInput placeholder="Search Member" />
      <div className="flex flex-col gap-3 mt-3">
        {members.map((member) => (
          <div className="  flex gap-2 items-center " key={member.id}>
            <input type="checkbox" onChange={() => handleCheckbox(member)} />
            <div className="flex gap-2">
              <b className="text-black">
                {member.name} {member.lastName}
              </b>
              <span className="text-dark-grey">{member.id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
