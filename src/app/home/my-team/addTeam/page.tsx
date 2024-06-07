import React from "react";
import MemberForm from "@/components/AddMember/MemberForm";

const AddMemberPage = () => {
  return <MemberForm />;
};

export default AddMemberPage;

// "use client";
// import React, { useEffect, useState } from "react";
// import MemberForm from "@/components/AddMember/MemberForm";
// import { TeamMember } from "@/types";
// import { useStore } from "@/models";
// import { observer } from "mobx-react-lite";
// import { Memberservices } from "@/services";

// const AddMemberPage = observer(() => {
//   const { members } = useStore();
//   const [member, setMember] = useState<TeamMember | null>(null);

//   useEffect(() => {
//     if (members.memberId) {
//       Memberservices.getOneMember(members.memberId).then((res) => {
//         setMember(res);
//       });
//     }
//   }, [members.memberId]);

//   return member ? (
//     <MemberForm initialData={member} isUpdate={true} />
//   ) : (
//     <div>Loading...</div>
//   );
// });

// export default AddMemberPage;
