import { DailyDialog } from "@/components/DailyDialog";
import { DailyFeed } from "@/components/DailyFeed/DailyFeed";
import { CurrentUser } from "@/constants/members";
import posts from "@/constants/posts";
import { Post } from "@/types/Post";
import { useState, useEffect } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // const for the post which is created by the current user
  // it's for mocking the data, so it's not used in the actual code
  const [postByUser, setPostByUser] = useState<Post | null>(null);

  useEffect(() => {
    // Get the data from session storage
    const data = sessionStorage.getItem("dailyCheckIn");
    if (data) {
      setPostByJSON(data);
    } else {
      // If there is no data, open the dialog
      setIsOpen(true);
    }
  }, []);
  const onCloseDialog = () => {
    setIsOpen(false);
  };

  const setPostByJSON = (postJson: string) => {
    const post = JSON.parse(postJson);
    setPostByUser({ ...post, createdAt: new Date(), createdBy: CurrentUser.id });
  };

  const postsWithUserPost = postByUser ? [postByUser, ...posts] : posts;

  return (
    <>
      <div>
        <DailyFeed day={new Date()} posts={postsWithUserPost} />
      </div>
      <DailyDialog isOpen={isOpen} onClose={onCloseDialog} onCreatePost={setPostByJSON} />
    </>
  );
}
