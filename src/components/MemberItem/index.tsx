import { AvatarImage } from "../Avatar/Image";
import { User } from "@/types/User";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  member: User;
  key: string;
}

export const MemberItem = ({ member, key }: Props) => {
  return (
    <Link key={key} href={`/members/${member.id}`}>
      <motion.div
        whileHover={{ scale: 0.98 }}
        whileTap={{ scale: 0.95 }}
        className="overflow-hidden rounded-2xl bg-white shadow-card [background-clip:padding-box]"
      >
        <div className="aspect-cover w-full bg-gray-200">
          <Image
            alt="Cover image"
            width={720}
            height={240}
            src={`/images/covers/${member.coverImage}.png`}
          ></Image>
        </div>
        <div className="relative z-10 mx-auto -mt-8 h-[72px] w-[72px] rounded-full border-4 border-white">
          <AvatarImage user={member} />
        </div>
        <p className="mb-5 mt-3 text-center font-semibold text-gray-700">{member.name}</p>
      </motion.div>
    </Link>
  );
};
