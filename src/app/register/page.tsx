"use client";
import { MainLayout } from "../MainLayout";
import { FormProvider, useForm } from "react-hook-form";
import { PageTitle } from "@/components/shared/PageTitle";
import { Input } from "@/components/shared/Input";
import { Button } from "@/components/shared/Button";
import { Auth } from "@/types/auth/auth";
import { useApi } from "@/hooks/useApi";

export default function Register() {
  const methods = useForm<FormData>();
  const { request, pending } = useApi();

  function onSubmit(data: any) {
    const users: Array<Auth> = [];
    request(data).then((res: any) => {
      users.push(res);
      localStorage.setItem("auth", JSON.stringify(users));
    });
  }
  console.log({ pending });

  return (
    <MainLayout header={<PageTitle className="py-5 px-5" title="ثبت نام" />}>
      <div className="px-5">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center gap-5 "
          >
            <Input name="firstName" type="text" placeholder="نام" />
            <Input name="lastName" type="text" placeholder="نام خانوادگی" />
            <Input name="password" type="password" placeholder="رمز عبور" />
            <Button isLoading={pending} type="submit">
              ثبت نام
            </Button>
          </form>
        </FormProvider>
      </div>
    </MainLayout>
  );
}
