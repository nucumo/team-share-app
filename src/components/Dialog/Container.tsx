import { DialogSteps } from "./Steps";

interface Props {
  children: React.ReactNode;
  currentPage: number;
}

export const DialogContainer = ({ children, currentPage }: Props) => {
  return (
    <div className="fixed top-1/2 left-1/2 z-10 w-[848px] max-w-[90vw] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-3xl bg-white p-6 pt-16 text-center shadow-xl">
      {children}
      {currentPage > 0 && <DialogSteps currentPage={currentPage} totalPages={3} />}
    </div>
  );
};
