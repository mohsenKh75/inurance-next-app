import { apiHandler } from "@/utils/apiHandler";
import {
  GET_INSURANCE_COMPANIES_DATA,
  GET_INSURANCE_DISCOUNT_DATA_EP,
  GET_VEHICLES_DATA_EP,
} from "./endpoints";
import {
  transformCompaniesData,
  transformInsuranceDiscount,
  transformVehiclesData,
} from "./transformers";
import { SelectInsuranceInputType } from "./types";

export function getVehiclesData(): Promise<Array<SelectInsuranceInputType>> {
  return apiHandler({ ep: GET_VEHICLES_DATA_EP }).then((res: any) => {
    return res.data.map(transformVehiclesData);
  });
}

export function getInsuranceCompaniesData(): Promise<
  Array<SelectInsuranceInputType>
> {
  return apiHandler?.({
    ep: GET_INSURANCE_COMPANIES_DATA,
  }).then((res: any) => res?.data?.map(transformCompaniesData));
}

export function getInsuranceDiscountsData(): Promise<
  Array<SelectInsuranceInputType>
> {
  return apiHandler?.({ ep: GET_INSURANCE_DISCOUNT_DATA_EP }).then((res: any) =>
    res?.data?.map?.(transformInsuranceDiscount)
  );
}
