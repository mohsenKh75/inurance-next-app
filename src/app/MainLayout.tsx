import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { ReactElement, Suspense, useLayoutEffect } from "react";

interface Props {
  children: ReactElement | Array<ReactElement>;
  header?: ReactElement;
  footer?: ReactElement;
}
export function MainLayout({ children, header, footer }: Props) {
  const { isLoggedIn } = useUser();
  const router = useRouter();
  useLayoutEffect(() => {
    if (!isLoggedIn) {
      router.replace("/register");
    }
  }, [isLoggedIn]);
  return (
    <Suspense>
      <div className="h-full flex flex-col">
        <header>{header}</header>
        <main className="flex flex-col h-full w-full">{children}</main>
        <footer>{footer}</footer>
      </div>
    </Suspense>
  );
}
