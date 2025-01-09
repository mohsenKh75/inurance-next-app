export const INPUT_DATA = {
  carTypeInput: "carTypeInput",
  insuranceCompany: "insuranceCompany",
  discountPercent: "discountPercent",
} as const;

export type InputType = keyof typeof INPUT_DATA;

export const SELECT_INSURANCE_TITLES: Record<InputType, string> = {
  carTypeInput: "نوع خودرو خود را انتخاب کنید",
  insuranceCompany: "شرکت بیمه گر قبلی خود را انتخاب کنید",
  discountPercent: "درصد تخفیف بیمه شخص ثالث را وارد کنید",
};

export const PLACEHOLDERS: Record<InputType, string> = {
  carTypeInput: "نوع خودرو",
  discountPercent: "درصد تخفیف",
  insuranceCompany: "بیمه‌گر قبلی",
};
