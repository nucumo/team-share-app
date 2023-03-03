import { DailyDialogWelcome } from "./Welcome";
import { DailyDialogFeeling } from "./Feeling";
import { DailyDialogQuestion } from "./Question";
import { DailyDialogComment } from "./Comment";
import { DialogContainer } from "../Dialog/Container";
import { DialogOverlay } from "../Dialog/Overlay";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreatePost: (postJSON: string) => void;
}

interface FormDataType {
  feeling: number;
  answer: string;
  comment?: string | undefined;
  createdAt?: Date;
}

const containerAnimationVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? "10%" : "-10%", opacity: 0 }),
  center: {
    x: 0,
    opacity: 1,
    transition: { x: { duration: 0.3, ease: "easeOut" }, opacity: { duration: 0.4 } },
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? "10%" : "-10%",
      opacity: 0,
      transition: { x: { duration: 0.3, ease: "easeIn" }, opacity: { duration: 0.2 } },
    };
  },
};

export const DailyDialog = ({ isOpen, onClose, onCreatePost }: Props) => {
  const [[currentPage, direction], setCurrentPage] = useState([0, 1]);
  const [formData, setFormData] = useState<FormDataType>({
    feeling: 0,
    answer: "",
  });

  // when change page, save the data to formData
  const changeFeeling = (feeling: number) => {
    setFormData((prev) => ({ ...prev, feeling }));
  };
  const changeAnswer = (answer: string) => {
    setFormData((prev) => ({ ...prev, answer }));
  };

  // when click next or back, change the page
  const onClickNext = () => setCurrentPage((prev) => [prev[0] + 1, 1]);
  const onClickBack = () => setCurrentPage((prev) => [prev[0] - 1, -1]);

  // when click done in last page, save the data to session storage
  const onClickDone = (comment: string | undefined) => {
    // The comment is last page, so we need to save it
    const newData = { ...formData, comment, createdAt: new Date() };
    setFormData(newData);

    // Save the data to session storage
    const formJSON = JSON.stringify(newData);
    sessionStorage.setItem("dailyCheckIn", formJSON);
    onCreatePost(formJSON);
    onClose();
  };

  if (!isOpen) return null;

  const PageContent = ({ page }: { page: number }) => {
    switch (page) {
      case 0:
        // welcome page
        return <DailyDialogWelcome onClickNext={onClickNext} />;
      case 1:
        // feeling
        return <DailyDialogFeeling onClickNext={onClickNext} onChange={changeFeeling} />;
      case 2:
        // daily question
        return (
          <DailyDialogQuestion
            onClickNext={onClickNext}
            onClickBack={onClickBack}
            onChange={changeAnswer}
          />
        );
      case 3:
        // comment to team
        return <DailyDialogComment onClickDone={onClickDone} onClickBack={onClickBack} />;
      default:
        return <></>;
    }
  };

  return (
    <div>
      <DialogOverlay />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <DialogContainer currentPage={currentPage}>
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={currentPage}
              initial="enter"
              custom={direction}
              variants={containerAnimationVariants}
              animate="center"
              exit="exit"
            >
              <PageContent page={currentPage} />
            </motion.div>
          </AnimatePresence>
        </DialogContainer>
      </motion.div>
    </div>
  );
};
