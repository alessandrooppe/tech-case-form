
interface TitleProps {
  label: string;
  className?: string;
}

export default function Title({ label, className }: TitleProps) {
  return (
    <h1 className={` text-4xl font-bold leading-tight text-[#003a66] m-0 ${className}`}>
      {label}
    </h1>
  );
}
