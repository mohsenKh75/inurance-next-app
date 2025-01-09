import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { ReactElement, Suspense, useEffect } from "react";

interface Props {
  children: ReactElement | Array<ReactElement>;
  header?: ReactElement;
  footer?: ReactElement;
}
export function MainLayout({ children, header, footer }: Props) {
  const { isLoggedIn } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/register");
    }
  }, []);
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
