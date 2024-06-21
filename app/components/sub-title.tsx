
interface SubTitleProps {
  label: string;
  className?: string;
}

export default function SubTitle({ label, className }: SubTitleProps) {
  return (
    <h2 className={`text-2xl font-bold leading-tight text-[#003a66] m-0 ${className}`}>
      {label}
    </h2>
  );
}
