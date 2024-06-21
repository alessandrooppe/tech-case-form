interface InputTextProps {
  className?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: { target: { value: string } }) => void;
}
  
export default function InputText({ className, value, onChange, placeholder, required, disabled }: InputTextProps) {
  return (
    <input
      disabled={disabled}
      required={required}
      type="text"
      className={`box-border cursor-text inline-flex items-center relative bg-white rounded-md shadow font-medium py-2.5 pl-3 w-full md:w-1/2 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500 ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={(values) => {
        onChange({
          target: {
            value: values.target.value,
          },
        });
      }}
    />
  );
}
  