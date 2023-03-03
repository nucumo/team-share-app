import { DailyDialog } from "@/components/DailyDialog";
import { CurrentUser } from "@/constants/members";
import { Post } from "@/types/Post";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

export interface DialogContextProps {
  post: Post | null;
}

const DialogContext = createContext<Partial<DialogContextProps>>({});

export const useDialogContext = () => {
  return useContext(DialogContext);
};

export const DialogProvider = ({ children }: { children: ReactNode }) => {
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
    // Set the data
    setPostByUser({
      ...post,
      id: "100",
      createdAt: new Date(post.createdAt),
      createdBy: CurrentUser.id,
    });
  };

  const value: DialogContextProps = {
    post: postByUser,
  };
  return (
    <DialogContext.Provider value={value}>
      {children}
      <DailyDialog isOpen={isOpen} onClose={onCloseDialog} onCreatePost={setPostByJSON} />
    </DialogContext.Provider>
  );
};
