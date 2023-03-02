interface Props {
  placeholder?: string;
  isError?: boolean;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}
export const TextArea = ({
  placeholder,
  isError,
  helperText,
  onChange,
  value,
  name,
  onBlur,
}: Props) => {
  return (
    <div className="w-full">
      <textarea
        className="h-24 w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-colors placeholder:text-gray-800/30
        focus:border-cyan-400 focus:shadow-[0_0_0_4px_#28A9F026] focus:outline-none 
        data-[invalid=true]:border-red-400 data-[invalid=true]:shadow-[0_0_0_4px_#FF675E26]"
        placeholder={placeholder}
        data-invalid={!!isError}
        onChange={onChange}
        value={value}
        name={name}
        onBlur={onBlur}
      />
      {helperText && <p className="text-left text-red-500">{helperText}</p>}
    </div>
  );
};
