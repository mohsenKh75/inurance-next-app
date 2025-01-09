"use client";
import { MainLayout } from "../MainLayout";
import { FormProvider, useForm } from "react-hook-form";

import { PageTitle } from "@/components/shared/PageTitle";
import { Input } from "@/components/shared/Input";
import { Button } from "@/components/shared/Button";

export default function Register() {
  const methods = useForm<FormData>();

  return (
    <MainLayout header={<PageTitle className="py-5 px-5" title="ثبت نام" />}>
      <div className="px-5">
        <FormProvider {...methods}>
          <form className="flex w-full flex-col items-center gap-5 ">
            <Input name="firstName" type="text" placeholder="نام" />
            <Input name="lastName" type="text" placeholder="نام خانوادگی" />
            <Input name="password" type="password" placeholder="رمز عبور" />
            <Button type="submit">ثبت نام</Button>
          </form>
        </FormProvider>
      </div>
    </MainLayout>
  );
}
