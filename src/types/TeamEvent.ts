export interface TeamEvent {
  id: string;
  title: string;
  emoji: string;
  startAt: Date;
  endAt: Date;
  type: TeamEventType;
}
export type TeamEventType = "birthday" | "event" | "anniversary" | "work";
