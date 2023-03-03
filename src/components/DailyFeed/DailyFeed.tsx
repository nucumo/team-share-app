import { AvatarStack } from "../Avatar/Stack";
import { EventItem } from "../Event/EventItem";
import { SectionHeading } from "../Heading/SectionHeading";
import { PostList } from "../PostList";
import { DateStringRelative, DateStringShort, DayStringShort } from "@/utils/datestring";
import events from "@/constants/events";
import members from "@/constants/members";
import { User } from "@/types/User";
import { Post } from "@/types/Post";

interface Props {
  day: Date;
  posts: Post[];
}

export const DailyFeed = ({ day, posts }: Props) => {
  const todayEvents = events.filter((event) => event.startAt.getDate() === day.getDate());

  const todayPosts = posts
    .filter((post) => post.createdAt.getDate() === day.getDate())
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const postsUsers: User[] = todayPosts
    .map((post) => {
      const user = members.find((member) => member.id === post.createdBy);
      if (!user) return null;
      return user;
    })
    .filter((user) => user !== null) as User[];

  return (
    <div className="mb-20">
      <p className="font-semibold text-gray-500">{DateStringRelative(day)}</p>
      <h2 className="mb-6">
        <span className="text-3xl font-semibold leading-[150%] text-gray-700">
          {DateStringShort(day)}{" "}
        </span>
        <span className="text-2xl font-semibold text-gray-700/30">{DayStringShort(day)}</span>
      </h2>

      {todayEvents.length > 0 && (
        <div className="mb-10">
          <div className="mb-2">
            <SectionHeading>events</SectionHeading>
          </div>
          {todayEvents.map((event) => (
            <div key={event.id} className="mb-4">
              <EventItem event={event} />
            </div>
          ))}
        </div>
      )}

      <div className="mb-6 flex items-center justify-between">
        <SectionHeading>check-ins</SectionHeading>
        <AvatarStack members={postsUsers} />
      </div>
      <PostList posts={todayPosts} />
    </div>
  );
};
