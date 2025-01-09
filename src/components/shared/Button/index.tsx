import { classnames } from "@/utils/classnames";
import { ReactElement } from "react";
import { Loading } from "../Loading";

interface Props {
  children?: string | ReactElement;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  isLoading?: boolean;
}

export function Button({
  children,
  onClick,
  type = "button",
  disabled,
  isLoading,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={classnames(
        "text-base flex items-center justify-center relative rounded-full bg-teal-500 text-white  border border-teal-50 w-28 h-10",
        {
          "text-slate-300": disabled,
        }
      )}
      type={type}
      onClick={onClick}
    >
      <Loading isLoading={isLoading} />
      {!isLoading && children}
    </button>
  );
}
