import { CommonButton } from "../Button/Common";
import { DialogTitle } from "../Dialog/Title";
import { TextArea } from "../Input/TextArea";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Props {
  onClickNext: () => void;
  onClickBack: () => void;
}

const schema = z.object({
  answer: z
    .string()
    .min(1, "Please enter your answer.")
    .max(140, "The length must be 140 characters or fewer."),
});

type Inputs = z.infer<typeof schema>;

export const DailyDialogQuestion = ({ onClickNext, onClickBack }: Props) => {
  const { control, handleSubmit, formState } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: Inputs) => {
    onClickNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-10">
        <p className="mb-6 font-bold uppercase text-gray-400">daily question</p>
        <div className="mb-10">
          <DialogTitle>
            If you could live anywhere,
            <br />
            what would it be?
          </DialogTitle>
        </div>

        <Controller
          name="answer"
          control={control}
          render={({ field, fieldState }) => (
            <TextArea
              {...field}
              placeholder="e.g. country with beaches and warm weather!"
              isError={fieldState.invalid}
              helperText={formState.errors.answer?.message}
            />
          )}
        />

        <div className={"mx-auto my-12 flex justify-center gap-4"}>
          <CommonButton onClick={onClickBack} priority="secondary" icon="arrow-left" />
          <CommonButton icon="arrow-right" type="submit" disabled={!formState.isValid}>
            Next
          </CommonButton>
        </div>
      </div>
    </form>
  );
};
