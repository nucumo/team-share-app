interface Props {
  children: React.ReactNode;
}

export const DialogTitle = ({ children }: Props) => {
  return <h2 className="text-4xl font-semibold leading-[150%] text-gray-700">{children}</h2>;
};
