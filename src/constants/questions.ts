import { getDayFromToday } from "@/utils/datetime";

// It's mock data for daily questions
const questions = [
  {
    date: new Date(),
    title: "If you could live anywhere, what would it be?",
  },
  {
    date: getDayFromToday(-1),
    title: "How do you spend your holidays?",
  },
];
export default questions;
