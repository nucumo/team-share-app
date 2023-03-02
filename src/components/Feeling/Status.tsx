import { Feeling } from "@/types/Feeling";

interface Props {
  feeling: Feeling;
}

const getColorStyles = (id: number) => {
  const base = "border-gray-200 bg-white text-gray-400";
  switch (id) {
    case 0:
      return "border-blue-200 bg-blue-50 text-blue-700/60";
    case 1:
      return "border-purple-200 bg-purple-50 text-purple-700/60";
    case 2:
      return "border-cyan-200 bg-cyan-50 text-cyan-700/60";
    case 3:
      return "border-teal-200 bg-teal-50 text-teal-700/60";
    case 4:
      return "border-orange-200 bg-orange-50 text-orange-700/60";
    default:
      return base;
  }
};

export const FeelingStatus = ({ feeling }: Props) => {
  return (
    <div className={`flex rounded-full border py-2 px-3 ${getColorStyles(feeling.id)}`}>
      <div className="mr-2 text-2xl leading-none">{feeling.emoji}</div>
      <div className="font-semibold">{feeling.label}</div>
    </div>
  );
};
