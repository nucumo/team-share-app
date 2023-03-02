import { User } from "@/types/User";
import Image from "next/image";

interface Props {
  user: User;
}
export const AvatarImage = ({ user }: Props) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image
        src={`/images/avatars/${user.avatarImage}.png`}
        width={240}
        height={240}
        className="w-full rounded-full"
        alt={`Avatar of ${user.name}`}
      />
    </div>
  );
};
