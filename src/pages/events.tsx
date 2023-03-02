import { EventItem } from "@/components/Event/EventItem";
import { PageHeading } from "@/components/Heading/PageHeading";
import { SectionHeading } from "@/components/Heading/SectionHeading";
import events from "@/constants/events";
import { DateStringLong } from "@/utils/datestring";

export default function Events() {
  // Get the events which are in the future
  const futureEvents = events.filter((event) => event.startAt.getTime() > Date.now());
  return (
    <>
      <PageHeading>Upcoming events</PageHeading>
      {futureEvents.map((event) => (
        <div key={event.id} className="mb-6 grid gap-2">
          <SectionHeading>{DateStringLong(event.startAt)}</SectionHeading>
          <EventItem event={event} />
        </div>
      ))}
    </>
  );
}
