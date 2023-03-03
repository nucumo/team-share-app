import { CommonButton } from "../Button/Common";
import { DialogTitle } from "../Dialog/Title";
import { TextArea } from "../Input/TextArea";

interface Props {
  onClickDone: () => void;
  onClickBack: () => void;
}

export const DailyDialogComment = ({ onClickDone, onClickBack }: Props) => {
  return (
    <div className="px-10">
      <p className="mb-6 font-bold uppercase text-gray-400">Comment</p>
      <div className="mb-14 pb-0.5">
        <DialogTitle>Anything to share with the team?</DialogTitle>
        <p className="mt-3 font-medium text-gray-400">
          Let&apos;s write about recent events, your mind, how is your work, etc 😊
        </p>
      </div>

      <TextArea placeholder="e.g. It's getting warmer, so I can wake up refreshed :)" />

      <div className={"mx-auto my-12 flex justify-center gap-4"}>
        <CommonButton onClick={onClickBack} priority="secondary" icon="arrow-left" />
        <CommonButton icon="arrow-right" onClick={onClickDone}>
          Done
        </CommonButton>
      </div>
    </div>
  );
};
