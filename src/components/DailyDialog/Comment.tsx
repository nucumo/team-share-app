import { CommonButton } from "../Button/Common";
import { DialogTitle } from "../Dialog/Title";
import { TextArea } from "../Input/TextArea";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Props {
  onClickDone: (data: string | undefined) => void;
  onClickBack: () => void;
}

const schema = z.object({
  comment: z.string().max(140, "The length must be 140 characters or fewer.").optional(),
});

type Inputs = z.infer<typeof schema>;
export const DailyDialogComment = ({ onClickDone, onClickBack }: Props) => {
  const { control, handleSubmit, formState } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: Inputs) => {
    onClickDone(data.comment);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-10">
        <p className="mb-6 font-bold uppercase text-gray-400">Comment</p>
        <div className="mb-14 pb-0.5">
          <DialogTitle>Anything to share with the team?</DialogTitle>
          <p className="mt-3 font-medium text-gray-400">
            Let&apos;s write about recent events, your mind, how is your work, etc 😊
          </p>
        </div>

        <Controller
          name="comment"
          control={control}
          render={({ field, fieldState }) => (
            <TextArea
              {...field}
              placeholder="e.g. It's getting warmer, so I can wake up refreshed :)"
              isError={fieldState.invalid}
              helperText={formState.errors.comment?.message}
            />
          )}
        />

        <div className={"mx-auto my-12 flex justify-center gap-4"}>
          <CommonButton onClick={onClickBack} priority="secondary" icon="arrow-left" />
          <CommonButton icon="arrow-right" type="submit" disabled={!formState.isValid}>
            Done
          </CommonButton>
        </div>
      </div>
    </form>
  );
};
