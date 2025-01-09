import { classnames } from "@/utils/classnames";
import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  value?: string;
  requiredMessage?: string;
  placeholder?: string;
  onClick?: () => void;
  readOnly?: boolean;
  className?: string;
  type?: HTMLInputTypeAttribute;
}

export function Input({
  name,
  placeholder,
  requiredMessage,
  onClick,
  readOnly = false,
  value,
  className,
  type,
}: Props) {
  const { register } = useFormContext();

  return (
    <input
      readOnly={readOnly}
      type={type}
      value={value}
      onClick={onClick}
      {...register(name, {
        required: requiredMessage,
      })}
      placeholder={placeholder}
      className={classnames(
        className,
        "mt-1 p-2 w-full rounded-md shadow-sm focus:outline-blue-300 sm:text-sm"
      )}
    />
  );
}
