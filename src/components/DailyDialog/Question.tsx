import { CommonButton } from "../Button/Common";
import { DialogTitle } from "../Dialog/Title";
import { TextArea } from "../Input/TextArea";

interface Props {
  onClickNext: () => void;
  onClickBack: () => void;
}

export const DailyDialogQuestion = ({ onClickNext, onClickBack }: Props) => {
  return (
    <div className="px-10">
      <p className="mb-6 font-bold uppercase text-gray-400">daily question</p>
      <div className="mb-10">
        <DialogTitle>
          If you could live anywhere,
          <br />
          what would it be?
        </DialogTitle>
      </div>

      <TextArea placeholder="e.g. country with beaches and warm weather!" />

      <div className={"mx-auto my-12 flex justify-center gap-4"}>
        <CommonButton onClick={onClickBack} priority="secondary" icon="arrow-left" />
        <CommonButton icon="arrow-right" onClick={onClickNext}>
          Next
        </CommonButton>
      </div>
    </div>
  );
};
