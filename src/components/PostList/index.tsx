import { FeelingStatus } from "../Feeling/Status";
import { AvatarImage } from "../Avatar/Image";
import { Post } from "@/types/Post";
import { User } from "@/types/User";
import members from "@/constants/members";
import { TimeString } from "@/utils/datestring";
import { Feelings } from "@/constants/feelings";
import questions from "@/constants/questions";
import Link from "next/link";

interface Props {
  posts: Post[];
}
export const PostList = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((post) => {
        // Get the author data from the members data (this is just a mock)
        const authorData: User | undefined = members.find((member) => member.id === post.createdBy);
        if (!authorData) return null;

        const dayQuestion = questions.find(
          (question) => question.date.getDate() === post.createdAt.getDate()
        );

        return (
          <div
            key={post.id}
            className="relative mb-8
            before:absolute before:top-12 before:left-[19px] before:block before:h-[calc(100%-24px)] before:w-0.5 before:rounded-full before:bg-gray-200 last:before:hidden"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <Link href={`/members/${authorData.id}`} className="flex items-center">
                  <div className="h-10 w-10 rounded-full border border-white">
                    <AvatarImage user={authorData} />
                  </div>
                  <p className="mx-4 text-lg font-semibold text-gray-600">{authorData.name}</p>
                </Link>
                <FeelingStatus feeling={Feelings[post.feeling]} />
              </div>
              <p className="text-sm font-medium text-gray-400">{TimeString(post.createdAt)}</p>
            </div>

            <div
              className="
                shadow-card ml-14 grid gap-6 rounded-2xl bg-white
                p-6 [background-clip:padding-box]"
            >
              {dayQuestion && (
                <PostContentItem title={`Q. ${dayQuestion.title}`} content={post.answer} />
              )}
              {post.comment && (
                <PostContentItem title=" Anything to share with the team?" content={post.comment} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const PostContentItem = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="grid gap-2">
      <h4 className="text-sm font-semibold text-gray-400">{title}</h4>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};
