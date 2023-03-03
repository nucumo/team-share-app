import { DailyDialogWelcome } from "./Welcome";
import { DailyDialogFeeling } from "./Feeling";
import { DailyDialogQuestion } from "./Question";
import { DailyDialogComment } from "./Comment";
import { DialogContainer } from "../Dialog/Container";
import { DialogOverlay } from "../Dialog/Overlay";
import { useState } from "react";

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
      <DialogContainer currentPage={currentPage}>
        <PageContent page={currentPage} />
      </DialogContainer>
    </div>
  );
};
