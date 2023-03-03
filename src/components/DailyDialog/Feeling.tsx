import { DialogTitle } from "../Dialog/Title";
import { FeelingChoices } from "../Feeling/Choices";
import { CommonButton } from "../Button/Common";
import { Feelings } from "@/constants/feelings";

interface Props {
  onClickNext: () => void;
}

export const DailyDialogFeeling = ({ onClickNext }: Props) => {
  return (
    <>
      <div className="mx-10 mt-10 pb-4 pt-0.5">
        <DialogTitle>How are you feeling?</DialogTitle>
        <div className="mt-10">
          <FeelingChoices
            feelings={Feelings}
            name="feeling"
            onChange={() => {
              return;
            }}
          />
        </div>
      </div>
      <div className={"mx-auto my-12 flex justify-center gap-4"}>
        <CommonButton icon="arrow-right" onClick={onClickNext}>
          Next
        </CommonButton>
      </div>
    </>
  );
};
