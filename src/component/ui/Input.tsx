import { InputHTMLAttributes } from "react";
import { IFormInput } from "../../interfaces";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  input: IFormInput;
}
export default function Input({ input, ...rest }: IProps) {
  return (
    <div key={input.id} className="flex flex-col mb-2">
      <label
        htmlFor={input.id}
        className="capitalize mb-1  font-medium text-gray-600"
      >
        {input.lable}
      </label>
      <input
        className="shadow-md h-12 rounded-md ps-2 border border-gray-400 caret-violet-700 focus:border-violet-700 outline-none"
        type={input.type}
        id={input.id}
        name={input.name}
        {...rest}
      />
    </div>
  );
}
