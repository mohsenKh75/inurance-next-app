import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "~/arrowDown.svg";
import { Input } from "../Input";
import { Loading } from "../Loading";

interface Props {
  placeholder?: string;
  id: string;
  options: Array<{ [key: string]: string }>;
  selectOptionHandler: (option: string) => void;
  optionIdProp: string;
  optionTitleProp: string;
  isLoading: boolean;
}

export function Dropdown({
  options,
  placeholder,
  id,
  optionIdProp,
  optionTitleProp,
  selectOptionHandler,
  isLoading,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    )
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      {isLoading ? (
        <div className="pt-8 w-full h-full flex justify-center">
          <Loading isLoading={isLoading} size="large" color="border-teal-500" />
        </div>
      ) : (
        <Input
          leftIcon={ArrowDown}
          name={id}
          type="text"
          onClick={isLoading ? undefined : toggleDropdown}
          placeholder={isLoading ? "درحال بارگذاری اطلاعات" : placeholder}
          readOnly
        />
      )}
      {isOpen && (
        <ul className="border-slate-600 outline-slate-200 outline w-full rounded-sm bg-white">
          {options?.map((option) => (
            <li
              className="px-2"
              key={option[optionIdProp]}
              onClick={() => {
                selectOptionHandler(option[optionTitleProp]);
                setIsOpen(false);
              }}
            >
              {option[optionTitleProp]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
