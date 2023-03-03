interface Props {
  currentPage: number;
  totalPages: number;
}

export const DialogSteps = ({ currentPage, totalPages }: Props) => {
  return (
    <div className="flex justify-center gap-1.5">
      {Array.from({ length: totalPages }).map((_, index) => {
        const bgStyle = index <= currentPage - 1 ? "bg-gray-400" : "bg-gray-200";
        const widthStyle = index === currentPage - 1 ? "w-4" : " w-2";
        return <div key={index} className={`h-2 rounded-full ${bgStyle} ${widthStyle}`}></div>;
      })}
    </div>
  );
};
