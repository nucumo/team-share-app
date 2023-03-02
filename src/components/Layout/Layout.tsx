import { Sidebar } from "../Sidebar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <div className="w-full p-8">
        <div className="mx-auto mt-12 max-w-[720px]">{children}</div>
      </div>
    </div>
  );
};
