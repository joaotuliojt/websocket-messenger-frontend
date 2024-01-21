interface ErrorLabelProps {
  message: string;
}
export function ErrorLabel({ message }: ErrorLabelProps) {
  return <p className="text-destructive font-normal">{message}</p>;
}
