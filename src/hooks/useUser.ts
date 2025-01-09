import { UserSelector } from "@/store/types";
import { logout } from "@/store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export function useUser() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state: UserSelector) => state.auth);

  return { user, isLoggedIn, logout: () => dispatch(logout()) };
}
