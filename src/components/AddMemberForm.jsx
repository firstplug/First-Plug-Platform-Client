import SearchInput from "@/common/SearchInput";

export default function AddMemberForm({ members }) {
  return (
    <section>
      <SearchInput placeholder="Search Member" />
      <div className="flex flex-col gap-3 mt-3">
        {members.map((member) => (
          <div className="  flex gap-2 items-center " key={member.id}>
            <input type="checkbox" />
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
