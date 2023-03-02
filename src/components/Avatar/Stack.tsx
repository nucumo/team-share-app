import { AvatarImage } from "./Image";
import { User } from "@/types/User";

interface Props {
  members: User[];
}
// Horizontally stack avatars
export const AvatarStack = ({ members }: Props) => {
  // Only show 3 avatars
  const showMembers = members.slice(0, 3);

  return (
    <div className="flex items-center">
      {showMembers.map((member) => (
        <div key={member.id} className="-mr-2 h-9 w-9 rounded-full border-[3px] border-white">
          <AvatarImage user={member} />
        </div>
      ))}
      {members.length > 3 && (
        <div className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-white bg-gray-100">
          <span className="text-sm font-semibold text-gray-400">+{members.length - 3}</span>
        </div>
      )}
    </div>
  );
};
