import { classnames } from "@/utils/classnames";
import { ReactElement } from "react";
import { Loading } from "../Loading";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  children?: string | ReactElement;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  isLoading?: boolean;
  buttonType?: keyof typeof BUTTON_TYPE;
  shape?: "filled" | "outlined" | "textOnly";
  textSize?: "text-base" | "text-lg" | "text-sm";
  leftIcon?: string | StaticImport;
  rightIcon?: string | StaticImport;
}
const BUTTON_TYPE = {
  DEFAULT: "DEFAULT",
  SMALL: "SMALL",
  CIRCLE: "CIRCLE",
} as const;

export function Button({
  children,
  onClick,
  type = "button",
  disabled,
  isLoading,
  buttonType = BUTTON_TYPE.DEFAULT,
  shape = "filled",
  textSize = "text-base",
  leftIcon,
  rightIcon,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={classnames(
        "flex items-center justify-center relative rounded-full",
        textSize,
        {
          "bg-teal-500 text-white": shape === "filled",
          "text-slate-300": disabled,
          " border border-teal-500 text-teal-500": shape === "outlined",
          "w-28 h-10": buttonType === BUTTON_TYPE.DEFAULT,
          "w-20 h-10": buttonType === BUTTON_TYPE.SMALL,
          "w-10 h-10": buttonType == BUTTON_TYPE.CIRCLE,
        }
      )}
      type={type}
      onClick={onClick}
    >
      {leftIcon && (
        <Image
          className="absolute left-0 ml-1 mt-0.5"
          src={leftIcon}
          alt="arrowLeft"
          width={10}
          height={10}
        />
      )}
      <Loading isLoading={isLoading} />
      {rightIcon && (
        <Image
          className="absolute right-0 mr-1 mt-0.5"
          src={rightIcon}
          alt="arrowLeft"
          width={10}
          height={10}
        />
      )}
      {!isLoading && children}
    </button>
  );
}
