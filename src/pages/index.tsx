import { DailyFeed } from "@/components/DailyFeed/DailyFeed";

export default function Home() {
  return (
    <>
      <div>
        <DailyFeed day={new Date()} />
      </div>
    </>
  );
}
