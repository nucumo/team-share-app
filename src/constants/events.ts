import { TeamEvent } from "@/types/TeamEvent";
import { DateWithDay, getDayFromToday } from "@/utils/datetime";

// It's test data for events
const events: TeamEvent[] = [
  {
    id: "1",
    title: "One year anniversary since James joined us!",
    emoji: "🎉",
    startAt: new Date(),
    endAt: new Date(),
    type: "anniversary",
  },
  {
    id: "2",
    title: "James's Birthday!",
    emoji: "🎂",
    startAt: getDayFromToday(1),
    endAt: getDayFromToday(1),
    type: "birthday",
  },
  {
    id: "3",
    title: "Pizza party at Tokyo Office",
    emoji: "🍕",
    startAt: DateWithDay("19:00", getDayFromToday(4)),
    endAt: DateWithDay("21:00", getDayFromToday(4)),
    type: "event",
  },
  {
    id: "4",
    title: "Release of v2.0 of our product",
    emoji: "🚀",
    startAt: getDayFromToday(14),
    endAt: getDayFromToday(14),
    type: "work",
  },
  {
    id: "5",
    title: "Hackathon",
    emoji: "👨‍💻",
    startAt: DateWithDay("10:00", getDayFromToday(20)),
    endAt: DateWithDay("19:00", getDayFromToday(20)),
    type: "event",
  },
  {
    id: "6",
    title: "Off-site meeting at New York Office",
    emoji: "📝",
    startAt: DateWithDay("15:00", getDayFromToday(35)),
    endAt: DateWithDay("16:00", getDayFromToday(35)),
    type: "work",
  },
];
export default events;
