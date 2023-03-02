import ArrowLeftIcon from "public/images/icons/arrow-left.svg";
import ArrowRightIcon from "public/images/icons/arrow-right.svg";
import CakeIcon from "public/images/icons/cake.svg";
import CalendarIcon from "public/images/icons/calendar.svg";
import HomeIcon from "public/images/icons/home.svg";
import MembersIcon from "public/images/icons/members.svg";
import MoonIcon from "public/images/icons/moon.svg";
import PinIcon from "public/images/icons/pin.svg";
import SunIcon from "public/images/icons/sun.svg";

export type IconNameType =
  | "arrow-left"
  | "arrow-right"
  | "cake"
  | "calendar"
  | "home"
  | "members"
  | "moon"
  | "pin"
  | "sun";

const iconList = {
  "arrow-left": <ArrowLeftIcon />,
  "arrow-right": <ArrowRightIcon />,
  cake: <CakeIcon />,
  calendar: <CalendarIcon />,
  home: <HomeIcon />,
  members: <MembersIcon />,
  moon: <MoonIcon />,
  pin: <PinIcon />,
  sun: <SunIcon />,
};

export const Icon = ({ name, className }: { name: IconNameType; className?: string }) => {
  return (
    <div className={"inline-block h-[1em] w-[1em] leading-none " + (className ? className : "")}>
      <p className="inline-block h-[1em] w-[1em] leading-none [&_svg]:h-[1em] [&_svg]:w-[1em]">
        {iconList[name as IconNameType]}
      </p>
    </div>
  );
};
