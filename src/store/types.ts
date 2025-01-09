export interface UserInitialState {
  isLoggedIn: boolean;
  user: null | { firstName: string; lastName: string };
}

export interface UserSelector {
  auth: UserInitialState;
}
