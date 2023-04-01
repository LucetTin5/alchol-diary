import { getFromStorage } from "./storage";

export const isAuthenticated = () => {
  const token = getFromStorage("token");
  if (!token) {
    return false;
  }
  return true;
};
