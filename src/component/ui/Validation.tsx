interface IProps {
  error: string;
}
export default function Validation({ error }: IProps) {
  return <>{error && <p className="text-red-600 mb-2">{error}</p>}</>;
}
