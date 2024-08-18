import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}
export default function CircleColor({ color, ...rest }: IProps) {
  return (
    <span
      key={color}
      className="inline-block w-5 h-5 rounded-full cursor-pointer active:scale-90 shadow-md text-black"
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
}
