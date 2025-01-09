"use client";
import { MainLayout } from "../MainLayout";
import { FormProvider, useForm } from "react-hook-form";
import { PageTitle } from "@/components/shared/PageTitle";
import { Input } from "@/components/shared/Input";
import { Button } from "@/components/shared/Button";
import { useApi } from "@/hooks/useApi";
import { useDispatch } from "react-redux";
import { login } from "@/store/user/userSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
export default function Register() {
  const methods = useForm<FormData>();
  const { request, pending } = useApi();
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoggedIn } = useUser();

  function onSubmit(data: any) {
    request(data)
      .then((res: any) => {
        localStorage.setItem("auth", JSON.stringify(res));
        dispatch(login(res));
      })
      .then(() => router.replace("/"));
  }

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, []);

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
