interface Props {
  children: React.ReactNode;
}
export const PageHeading = ({ children }: Props) => {
  return (
    <h2 className="mb-10 text-4xl font-semibold capitalize leading-none text-gray-800">
      {children}
    </h2>
  );
};
