import clsx from "clsx";
import { FormEvent } from "react";

interface LabelProps {
  labelName: string;
  text: string;
  type: string;
  isText: boolean;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
}

export const Label = (props: LabelProps) => {
  const { labelName, text, type, isText, handleChange } = props;
  return (
    <label
      htmlFor={labelName}
      className={clsx(isText && "flex flex-col w-[200px]")}
    >
      {text}
      <input type={type} name={labelName} onChange={handleChange} />
    </label>
  );
};
