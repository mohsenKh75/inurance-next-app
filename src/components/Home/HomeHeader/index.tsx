import { useUser } from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HeaderLogo from "~/logo.svg";

export function HomeHeader() {
  const router = useRouter();
  const { isLoggedIn, user, logout } = useUser();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/register");
    }
  }, [isLoggedIn]);

  return (
    <div className="flex justify-between p-5">
      <Image onClick={logout} alt="headerLogo" src={HeaderLogo} />
      <p className="text-sm text-slate-400">
        سلام {user?.firstName} {user?.lastName}
      </p>
    </div>
  );
}
