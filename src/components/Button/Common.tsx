import { Icon, IconNameType } from "../Icon";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: IconNameType | null;
  priority?: "primary" | "secondary";
  type?: "button" | "submit";
}

const getColorStyles = (type: "primary" | "secondary") => {
  switch (type) {
    case "primary":
      return "bg-gray-800 text-white px-6";
    case "secondary":
      return "bg-gray-50 text-gray-400 px-4";
  }
};

export const CommonButton = ({
  children,
  onClick,
  disabled,
  icon,
  priority = "primary",
  type = "button",
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`flex cursor-pointer items-center justify-center rounded-xl py-3 font-semibold shadow-[0_1px_2px_0_#FFFFFF66_inset,0_2px_4px_-1px_#0000001A] focus:opacity-90 focus:shadow-[0_1px_2px_0_#FFFFFF66_inset,0_2px_4px_-1px_#0000001A,0_0_0_4px_#1F27371A]
        focus:outline-none disabled:cursor-not-allowed disabled:opacity-40
        ${getColorStyles(priority)}
        `}
    >
      <span>{children}</span>
      {icon && <Icon name={icon} className={children ? "ml-2" : ""} />}
    </button>
  );
};
