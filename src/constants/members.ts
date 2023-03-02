import { User } from "@/types/User";
import { getDayFromToday } from "@/utils/datetime";

// It's mock data for members
const members: User[] = [
  {
    id: "1",
    name: "Maria",
    avatarImage: "avatar-0",
    coverImage: "1",
    birthDate: new Date("2003-12-15"),
    location: "Tokyo, Japan",
  },
  {
    id: "2",
    name: "Emily",
    avatarImage: "avatar-1",
    coverImage: "2",
    birthDate: new Date("2003-1-27"),
    location: "New York, USA",
  },
  {
    id: "3",
    name: "James",
    avatarImage: "avatar-2",
    coverImage: "3",
    birthDate: getDayFromToday(1),
    location: "London, UK",
  },
  {
    id: "4",
    name: "Chloe",
    avatarImage: "avatar-3",
    coverImage: "4",
    birthDate: new Date("2003-3-29"),
    location: "Sydney, Australia",
  },
  {
    id: "5",
    name: "Kevin",
    avatarImage: "avatar-4",
    coverImage: "5",
    birthDate: new Date("2003-9-10"),
    location: "Toronto, Canada",
  },
  {
    id: "6",
    name: "Sophia",
    avatarImage: "avatar-5",
    coverImage: "6",
    birthDate: new Date("2003-11-7"),
    location: "Paris, France",
  },
  {
    id: "7",
    name: "Ethan",
    avatarImage: "avatar-6",
    coverImage: "7",
    birthDate: new Date("2003-5-4"),
    location: "Beijing, China",
  },
  {
    id: "8",
    name: "Isabella",
    avatarImage: "avatar-7",
    coverImage: "8",
    birthDate: new Date("2003-4-20"),
    location: "Madrid, Spain",
  },
  {
    id: "9",
    name: "Liam",
    avatarImage: "avatar-8",
    coverImage: "9",
    birthDate: new Date("2003-8-17"),
    location: "Berlin, Germany",
  },
  {
    id: "10",
    name: "Olivia",
    avatarImage: "avatar-9",
    coverImage: "10",
    birthDate: new Date("2003-7-9"),
    location: "Mumbai, India",
  },
  {
    id: "11",
    name: "Alexander",
    avatarImage: "avatar-10",
    coverImage: "11",
    birthDate: new Date("2003-6-14"),
    location: "Moscow, Russia",
  },
  {
    id: "12",
    name: "Charlotte",
    avatarImage: "avatar-11",
    coverImage: "12",
    birthDate: new Date("2003-9-27"),
    location: "Melbourne, Australia",
  },
];

// It's mock data for current user
export const CurrentUser = members[0];

export default members;
