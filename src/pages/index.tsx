import { DailyFeed } from "@/components/DailyFeed/DailyFeed";
import posts from "@/constants/posts";
import { useDialogContext } from "@/hooks/DialogContext";
import { getDayFromToday } from "@/utils/datetime";

export default function Home() {
  const { post } = useDialogContext();

  const postsWithUserPost = post ? [post, ...posts] : posts;

  // It's mock app so show only today and yesterday
  return (
    <>
      <DailyFeed day={new Date()} posts={postsWithUserPost} />
      <DailyFeed day={getDayFromToday(-1)} posts={postsWithUserPost} />
    </>
  );
}
