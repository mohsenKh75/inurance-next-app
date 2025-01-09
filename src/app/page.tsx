"use client";
import { MainLayout } from "./MainLayout";
import CarLogo from "~/insurance.svg";
import { PageTitle } from "@/components/shared/PageTitle";
import { SquareButton } from "@/components/shared/Button/SquareButton";
import dynamic from "next/dynamic";

const HomeHeader = dynamic(
  () => import("@/components/Home/HomeHeader").then((mod) => mod.HomeHeader),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <MainLayout header={<HomeHeader />}>
      <div className="flex flex-col items-center h-full px-4">
        <PageTitle className="py-5" title="سامانه مقایسه و خرید آنلاین بیمه" />
        <div className="flex flex-col h-full w-full">
          <p className="text-xl">انتخاب بیمه</p>
          <div className="flex justify-center gap-4 items-center h-1/2 pt-4">
            <SquareButton
              topIcon={CarLogo}
              onClick={() => console.log("/select-insurance")}
              title="شخص ثالث"
            />
            <SquareButton
              topIcon={CarLogo}
              onClick={() => console.log("clicked")}
              disabled
              title="بدنه"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
