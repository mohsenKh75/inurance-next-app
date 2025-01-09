import { useUser } from "@/hooks/useUser";
import { logout } from "@/store/user/userSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HeaderLogo from "~/logo.svg";

export function HomeHeader() {
  const router = useRouter();
  const { isLoggedIn, user } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/register");
    }
  }, [isLoggedIn]);

  return (
    <div className="flex justify-between p-5">
      <Image
        onClick={() => dispatch(logout())}
        alt="headerLogo"
        src={HeaderLogo}
      />
      <p className="text-sm text-slate-400">
        سلام {user?.firstName} {user?.lastName}
      </p>
    </div>
  );
}
