// get time with day
export const DateWithDay = (time: string, day: Date) => {
  // time format: hh:mm
  const [hour, minute] = time.split(":");
  const today = new Date(day);
  today.setHours(parseInt(hour));
  today.setMinutes(parseInt(minute));
  return today;
};

// get day from today
export const getDayFromToday = (day: number) => {
  const today = new Date();
  today.setDate(today.getDate() + day);
  return today;
};
