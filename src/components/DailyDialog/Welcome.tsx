import { AvatarImage } from "../Avatar/Image";
import { AvatarStack } from "../Avatar/Stack";
import { CommonButton } from "../Button/Common";
import { DialogTitle } from "../Dialog/Title";
import { User } from "@/types/User";
import members, { CurrentUser } from "@/constants/members";
import posts from "@/constants/posts";

interface Props {
  onClickNext: () => void;
}

export const DailyDialogWelcome = ({ onClickNext }: Props) => {
  // Get members who checked in today
  const todayPosts = posts.filter((post) => post.createdAt.getDate() === new Date().getDate());
  const todayCheckedInMembers: User[] = members.filter((member) => {
    return todayPosts.some((post) => post.createdBy === member.id);
  });

  return (
    <>
      <div className="mx-auto mt-2 mb-6 h-20 w-20">
        <AvatarImage user={CurrentUser} />
      </div>
      <DialogTitle>
        Good Morning, {CurrentUser.name}!
        <br />
        Let&apos;s check in for the day!
      </DialogTitle>

      <div className="mt-10 flex flex-col items-center pb-0.5">
        <AvatarStack members={todayCheckedInMembers} />
        <p className="mt-2 font-medium text-gray-400">
          {todayCheckedInMembers.length} members checked in
        </p>
      </div>

      <div className="mx-auto mt-8 mb-10 flex justify-center gap-4">
        <CommonButton onClick={onClickNext}>Get started</CommonButton>
      </div>
    </>
  );
};
