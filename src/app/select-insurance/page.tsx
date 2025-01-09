"use client";
import {
  getInsuranceCompaniesData,
  getInsuranceDiscountsData,
  getVehiclesData,
} from "@/apis/select-insurance";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ArrowLeft from "~/arrowLeft.svg";
import ArrowRight from "~/arrowRight.svg";
import { MainLayout } from "../MainLayout";
import { Dropdown } from "@/components/shared/DropDown";
import { PageTitle } from "@/components/shared/PageTitle";
import { Button } from "@/components/shared/Button";
import { useRouter } from "next/navigation";
import {
  INPUT_DATA,
  InputType,
  PLACEHOLDERS,
  SELECT_INSURANCE_TITLES,
} from "./constants";
import { useApi } from "@/hooks/useApi";
import { SelectInsuranceInputType } from "@/apis/select-insurance/types";
import { SubmitModal } from "./SubmitModal";
import { useUser } from "@/hooks/useUser";

interface FormData {
  carTypeInput: string;
  insuranceCompany: string;
  discountPercent: string;
}

function stepTitleHandler(step: keyof typeof INPUT_DATA) {
  return SELECT_INSURANCE_TITLES[step];
}
export default function SelectInsurance() {
  const methods = useForm<FormData>();
  const { logout } = useUser();
  const router = useRouter();
  const [data, setData] = useState<Array<{ [key: string]: string }>>([]);
  const [step, setStep] = useState<keyof typeof INPUT_DATA>("carTypeInput");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState({
    carTypeInput: "",
    insuranceCompany: "",
    discountPercent: "",
  });

  function selectOptionHandler(option: string) {
    if (step === INPUT_DATA.carTypeInput) {
      methods.setValue(step, option);
      setSelectedItems({ ...selectedItems, carTypeInput: option });
    }
    if (step === INPUT_DATA.insuranceCompany) {
      methods.setValue(step, option);
      setSelectedItems({ ...selectedItems, insuranceCompany: option });
    }
    if (step === INPUT_DATA.discountPercent) {
      methods.setValue(step, option);
      setSelectedItems({ ...selectedItems, discountPercent: option });
    }
  }
  const stepRequests: Record<
    InputType,
    () => Promise<Array<SelectInsuranceInputType>>
  > = {
    carTypeInput: getVehiclesData,
    discountPercent: getInsuranceDiscountsData,
    insuranceCompany: getInsuranceCompaniesData,
  };
  const { request, pending } = useApi({ req: stepRequests[step] });

  function stepUpHandler() {
    if (step === INPUT_DATA.carTypeInput) {
      setStep(INPUT_DATA.insuranceCompany);
    }
    if (step === INPUT_DATA.insuranceCompany) {
      setStep(INPUT_DATA.discountPercent);
    }
    if (step === INPUT_DATA.discountPercent) {
      setIsModalOpen(true);
    }
  }
  function stepDownHandler() {
    if (step === INPUT_DATA.discountPercent) {
      setStep(INPUT_DATA.insuranceCompany);
    }
    if (step === INPUT_DATA.insuranceCompany) {
      setStep(INPUT_DATA.carTypeInput);
    }
    if (step === INPUT_DATA.carTypeInput) {
      router.back();
    }
  }

  useEffect(() => {
    request().then((res: any) => setData(res));
    methods.setValue(INPUT_DATA[step], "");
  }, [step]);

  function onModalClose() {
    setIsModalOpen(false);
    logout();
  }
  return (
    <MainLayout>
      <div className="p-5">
        <PageTitle title="بیمه شخص ثالث" />
        <p className="pt-4 text-sm text-gray-400">{stepTitleHandler(step)}</p>
      </div>
      <div className="flex flex-col h-full justify-center px-5 md:max-w-[400px]">
        <div className="h-1/6 z-10">
          <FormProvider {...methods}>
            <Dropdown
              isLoading={pending}
              placeholder={PLACEHOLDERS[step]}
              id={INPUT_DATA[step]}
              selectOptionHandler={selectOptionHandler}
              options={data}
              optionIdProp="id"
              optionTitleProp="title"
            />
          </FormProvider>
        </div>
        <div className="flex justify-between pt-4 z-0">
          <Button
            rightIcon={ArrowRight}
            shape="outlined"
            onClick={stepDownHandler}
          >
            بازگشت
          </Button>
          {selectedItems[step] !== undefined && selectedItems[step] !== "" && (
            <Button
              leftIcon={step !== INPUT_DATA.discountPercent && ArrowLeft}
              shape="outlined"
              onClick={stepUpHandler}
            >
              {step === INPUT_DATA.discountPercent
                ? "استعلام قیمت"
                : "مرحله بعد"}
            </Button>
          )}
        </div>
      </div>
      <SubmitModal
        isOpen={isModalOpen}
        onClose={onModalClose}
        selectedItems={selectedItems}
      />
    </MainLayout>
  );
}
