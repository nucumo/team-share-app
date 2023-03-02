import { Post } from "@/types/Post";
import { DateWithDay, getDayFromToday } from "@/utils/datetime";

const posts: Post[] = [
  {
    id: "1",
    createdAt: DateWithDay("08:10", getDayFromToday(0)),
    createdBy: "4",
    feeling: 4,
    answer: "country with beaches and warm weather 🏝",
    comment: "so relieved the release is over!",
  },
  {
    id: "2",
    createdAt: DateWithDay("09:00", getDayFromToday(0)),
    createdBy: "3",
    feeling: 3,
    answer: "An eco-friendly treehouse in the rainforest, for a close connection to nature ;)",
  },
  {
    id: "3",
    createdAt: DateWithDay("08:17", getDayFromToday(0)),
    createdBy: "6",
    feeling: 1,
    answer: "Paris, France for its art, architecture, and cuisine 🍷",
    comment: "Lots of meetings today!",
  },
  {
    id: "4",
    createdAt: DateWithDay("08:25", getDayFromToday(0)),
    createdBy: "7",
    feeling: 4,
    answer: "New York City, for its energy and diversity 🗽",
  },

  {
    id: "5",
    createdAt: DateWithDay("09:00", getDayFromToday(-1)),
    createdBy: "2",
    feeling: 3,
    answer: "outdoors, whether it's hiking, camping, or kayaking🏕",
  },
  {
    id: "6",
    createdAt: DateWithDay("08:17", getDayFromToday(-1)),
    createdBy: "11",
    feeling: 1,
    answer:
      "at home with my family. we like to watch movies, play games, and just spend quality time together :)",
    comment: "My child has caught a cold, so I'm leaving early today😭",
  },
  {
    id: "7",
    createdAt: DateWithDay("08:25", getDayFromToday(-1)),
    createdBy: "10",
    feeling: 4,
    answer: "music festivals or concerts!",
  },
];
export default posts;
