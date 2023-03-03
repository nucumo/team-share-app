import { AvatarImage } from "@/components/Avatar/Image";
import { SectionHeading } from "@/components/Heading/SectionHeading";
import { Icon } from "@/components/Icon";
import { PostList } from "@/components/PostList";
import members from "@/constants/members";
import posts from "@/constants/posts";
import { DateStringLong, DateStringShort } from "@/utils/datestring";
import { useRouter } from "next/router";
import Image from "next/image";

export default function MemberView() {
  const router = useRouter();
  const { id } = router.query;
  // get the member by id
  const member = members.filter((member) => member.id === id)[0];
  // posts that the member has written
  const memberPosts = posts.filter((post) => post.createdBy === id);
  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <>
      <div className="aspect-cover w-full overflow-hidden rounded-3xl bg-gray-200">
        <Image
          alt="Cover image"
          width={720}
          height={240}
          src={`/images/covers/${member.coverImage}.png`}
        ></Image>
      </div>
      <div className="relative z-10 mx-auto -mt-16 h-32 w-32 rounded-full border-[6px] border-white">
        <AvatarImage user={member} />
      </div>
      <h2 className="my-4 text-center text-3xl font-semibold text-gray-600">{member.name}</h2>
      <div className="mb-6 flex items-center justify-center font-semibold text-gray-500">
        <Icon name="cake" className="text-xl text-gray-300" />
        <span className="ml-1.5 mr-4">{DateStringShort(member.birthDate)}</span>
        <Icon name="pin" className="text-xl text-gray-300" />
        <span className="ml-1.5">{member.location}</span>
      </div>

      {memberPosts.map((post) => (
        <div key={post.id} className="grid gap-4">
          <SectionHeading>{DateStringLong(post.createdAt)}</SectionHeading>
          <PostList posts={[post]} />
        </div>
      ))}
    </>
  );
}
