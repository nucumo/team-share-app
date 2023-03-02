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

// check if two dates are the same time
export const isSameTime = (time1: Date, time2: Date) => {
  return time1.getHours() === time2.getHours() && time1.getMinutes() === time2.getMinutes();
};
