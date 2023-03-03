import { DailyDialog } from "@/components/DailyDialog";
import { DailyFeed } from "@/components/DailyFeed/DailyFeed";
import { useState, useEffect } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // TODO: check if the user has already checked in for the day
    setIsOpen(true);
  }, []);

  const onCloseDialog = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div>
        <DailyFeed day={new Date()} />
      </div>
      <DailyDialog isOpen={isOpen} onClose={onCloseDialog} />
    </>
  );
}
