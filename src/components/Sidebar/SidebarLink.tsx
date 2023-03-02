import { Icon, IconNameType } from "../Icon";
import Link from "next/link";

interface Props {
  icon: IconNameType;
  href: string;
}
export const SidebarLink = ({ icon, href }: Props) => {
  return (
    <Link href={href} className="block">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl text-gray-500 transition-colors hover:bg-gray-100">
        <Icon name={icon} />
      </div>
    </Link>
  );
};
