import { SidebarLink } from "./SidebarLink";
import { AvatarImage } from "../Avatar/Image";
import { CurrentUser } from "@/constants/members";
import Link from "next/link";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className="sticky inset-y-0 left-0 flex h-screen flex-col items-center justify-between border-r border-r-gray-200 bg-white p-4">
      <div>
        <div className="h-12 w-12 overflow-hidden rounded-xl bg-gray-300">
          <Image src="/images/workspace/1.png" alt="workspace icon" width={80} height={80}></Image>
        </div>
        <div className="mt-6 grid gap-2">
          <SidebarLink icon="home" href="/" />
          <SidebarLink icon="calendar" href="/events" />
          <SidebarLink icon="members" href="/members" />
        </div>
      </div>
      <Link href={`/members/${CurrentUser.id}`}>
        <div className="mb-1 h-10 w-10">
          <AvatarImage user={CurrentUser} />
        </div>
      </Link>
    </div>
  );
};
