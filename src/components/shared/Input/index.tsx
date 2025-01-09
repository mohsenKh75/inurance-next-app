import { classnames } from "@/utils/classnames";
import { farsiValidator, passwordValidator } from "@/utils/formValidators";
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
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full">
      <input
        readOnly={readOnly}
        type={type}
        value={value}
        onClick={onClick}
        {...register(name, {
          required: requiredMessage,
          validate: type === "text" ? farsiValidator : passwordValidator,
        })}
        placeholder={placeholder}
        className={classnames(
          className,
          "mt-1 p-2 w-full rounded-md shadow-sm focus:outline-blue-300 sm:text-sm"
        )}
      />
      {errors[name] && (
        <p className="text-sm pt-2 text-red-400">
          *{errors[name].message as string}
        </p>
      )}
    </div>
  );
}
