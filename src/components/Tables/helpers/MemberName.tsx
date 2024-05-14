"use client";

import { useStore } from "@/models";
import { TeamMember } from "@/types";
import { observer } from "mobx-react-lite";
import EmailTooltip from "./EmailTooltip";

export default observer(function MemberName({
  email,
}: {
  email: TeamMember["email"];
}) {
  const {
    members: { members },
  } = useStore();

  const member = members.filter((member) => member.email === email)[0];

  return email ? (
    member && member.firstName ? (
      <span className="text-lg">
        {member.firstName} {member.lastName}{" "}
      </span>
    ) : (
      <EmailTooltip email={email} />
    )
  ) : (
    "-"
  );
});
