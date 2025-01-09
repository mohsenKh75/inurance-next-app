import { UserSelector } from "@/store/types";
import { useSelector } from "react-redux";

export function useUser() {
  const { user, isLoggedIn } = useSelector((state: UserSelector) => state.auth);

  return { user, isLoggedIn };
}
