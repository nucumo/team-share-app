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
}

export const DailyDialog = ({ isOpen, onClose }: Props) => {
  const [[currentPage, direction], setCurrentPage] = useState([0, 1]);

  // when click next or back, change the page
  const onClickNext = () => setCurrentPage((prev) => [prev[0] + 1, 1]);
  const onClickBack = () => setCurrentPage((prev) => [prev[0] - 1, -1]);

  const onClickDone = () => {
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
        return <DailyDialogFeeling onClickNext={onClickNext} />;
      case 2:
        // daily question
        return <DailyDialogQuestion onClickNext={onClickNext} onClickBack={onClickBack} />;
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
