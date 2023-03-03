import { DialogTitle } from "../Dialog/Title";
import { FeelingChoices } from "../Feeling/Choices";
import { CommonButton } from "../Button/Common";
import { Feelings } from "@/constants/feelings";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  feeling: z
    .number()
    .or(z.string().transform(Number))
    .refine((val) => val > -1, "Please select one of the moods."),
});

type Inputs = z.infer<typeof schema>;

interface Props {
  onClickNext: () => void;
}

export const DailyDialogFeeling = ({ onClickNext }: Props) => {
  const { control, handleSubmit, formState } = useForm<Inputs>({
    defaultValues: { feeling: -1 },
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    onClickNext();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-10 mt-10 pb-4 pt-0.5">
          <DialogTitle>How are you feeling?</DialogTitle>
          <div className="mt-10">
            <Controller
              name="feeling"
              control={control}
              render={({ field }) => <FeelingChoices feelings={Feelings} {...field} />}
            />
          </div>
        </div>
        <div className={"mx-auto my-12 flex justify-center gap-4"}>
          <CommonButton type="submit" icon="arrow-right" disabled={!formState.isValid}>
            Next
          </CommonButton>
        </div>
      </form>
    </>
  );
};
