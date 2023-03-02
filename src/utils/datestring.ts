// show time in format: hh:mm
export const TimeString = (date: Date) => {
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
};
