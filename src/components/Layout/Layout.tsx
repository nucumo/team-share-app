import { Sidebar } from "../Sidebar";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full p-8"
      >
        <div className="mx-auto mt-12 max-w-[720px]">{children}</div>
      </motion.div>
    </div>
  );
};
