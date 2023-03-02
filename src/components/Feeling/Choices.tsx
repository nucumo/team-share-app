import { Feeling } from "@/types/Feeling";
import { useState } from "react";

interface Props {
  feelings: Feeling[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const getColorStyles = (id: number, selected: boolean) => {
  const base = "border-gray-200 bg-white text-gray-400";
  if (selected) {
    switch (id) {
      case 0:
        return "border-blue-200 bg-blue-50 text-blue-700/60 shadow-sm";
      case 1:
        return "border-purple-200 bg-purple-50 text-purple-700/60 shadow-sm";
      case 2:
        return "border-cyan-200 bg-cyan-50 text-cyan-700/60 shadow-sm";
      case 3:
        return "border-teal-200 bg-teal-50 text-teal-700/60 shadow-sm";
      case 4:
        return "border-orange-200 bg-orange-50 text-orange-700/60 shadow-sm";
      default:
        return base;
    }
  } else {
    return base;
  }
};

// choice options for feelings in the dialog
export const FeelingChoices = ({ feelings, onChange, name }: Props) => {
  const [selectedFeeling, setSelectedFeeling] = useState(-1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setSelectedFeeling(Number(e.target.value));
  };

  return (
    <div className="grid w-full grid-cols-5 gap-4">
      {feelings.map((feeling, i) => (
        <label
          key={feeling.label}
          className={`cursor-pointer rounded-2xl border-2 px-4 py-8 text-center transition-colors 
        ${getColorStyles(feeling.id, selectedFeeling === i)}`}
        >
          <input
            onChange={handleChange}
            type="radio"
            name={name}
            value={i}
            className="hidden"
          ></input>
          <div className="mb-4 text-5xl leading-none">{feeling.emoji}</div>
          <p className="text-sm font-semibold leading-none">{feeling.label}</p>
        </label>
      ))}
    </div>
  );
};
