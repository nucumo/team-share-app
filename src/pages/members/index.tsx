import { PageHeading } from "@/components/Heading/PageHeading";
import { MemberItem } from "@/components/MemberItem";
import members from "@/constants/members";

export default function Members() {
  return (
    <>
      <PageHeading>Members</PageHeading>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {members.map((member) => (
          <MemberItem key={member.id} member={member} />
        ))}
      </div>
    </>
  );
}
