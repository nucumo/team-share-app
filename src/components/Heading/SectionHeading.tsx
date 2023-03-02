interface Props {
  children: React.ReactNode;
}
export const SectionHeading = ({ children }: Props) => {
  return <h3 className="font-semibold uppercase leading-[150%] text-gray-800/30">{children}</h3>;
};
