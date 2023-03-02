// show time in format: hh:mm
export const TimeString = (date: Date) => {
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
};

// show date in format: e.g. Mar 2
export const DateStringShort = (date: Date) => {
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });
};

// show weekday in format: e.g. Mon
export const DayStringShort = (date: Date) => {
  return date.toLocaleString("en-US", {
    weekday: "short",
  });
};

// relative date in format: e.g. Today
export const DateStringRelative = (date: Date) => {
  // only today and yesterday
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.getDate() === today.getDate()) return "Today";
  if (date.getDate() === yesterday.getDate()) return "Yesterday";
  return null;
};
