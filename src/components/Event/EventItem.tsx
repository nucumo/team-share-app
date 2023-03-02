import { TeamEvent, TeamEventType } from "@/types/TeamEvent";
import { TimeString } from "@/utils/datestring";
import { isSameTime } from "@/utils/datetime";

interface Props {
  event: TeamEvent;
}

const getColorStyles = (type: TeamEventType) => {
  switch (type) {
    case "anniversary":
      return "border-pink-500/20 bg-pink-50 text-pink-600";
    case "birthday":
      return "border-cyan-500/20 bg-cyan-50 text-cyan-600";
    case "event":
      return "border-orange-500/20 bg-orange-50 text-orange-600";
    case "work":
      return "border-purple-500/20 bg-purple-50 text-purple-600";
  }
};

const getEmojiColorStyles = (type: TeamEventType) => {
  switch (type) {
    case "anniversary":
      return "bg-pink-100";
    case "birthday":
      return "bg-cyan-100";
    case "event":
      return "bg-orange-100";
    case "work":
      return "bg-purple-100";
  }
};

const getTimeColorStyles = (type: TeamEventType) => {
  switch (type) {
    case "anniversary":
      return "text-pink-600/50";
    case "birthday":
      return "text-cyan-600/50";
    case "event":
      return "text-orange-600/50";
    case "work":
      return "text-purple-600/50";
  }
};

export const EventItem = ({ event }: Props) => {
  return (
    <div
      className={`flex w-full items-center rounded-2xl border p-4 pr-6 shadow-[0_1px_2px_0_#FFFFFFCC_inset,0_2px_4px_-1px_#0000001A]
        ${getColorStyles(event.type)}
      `}
    >
      <div
        className={`mr-4 flex h-14 w-14 items-center justify-center rounded-xl border-[3px] border-white text-2xl
          ${getEmojiColorStyles(event.type)}
        `}
      >
        <span>{event.emoji}</span>
      </div>
      <p className="text-lg font-semibold">{event.title}</p>
      {!isSameTime(event.startAt, event.endAt) && (
        <p className={`ml-auto font-medium ${getTimeColorStyles(event.type)}`}>
          {TimeString(event.startAt)} ~ {TimeString(event.endAt)}
        </p>
      )}
    </div>
  );
};
