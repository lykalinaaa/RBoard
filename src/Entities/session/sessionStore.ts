import {create} from "zustand";

interface ISession {
  isAuth: boolean;
  accessToken: string | null;
  setAuth: (isAuth: boolean, accessToken: string | null) => void;
}

export const useSessionStore = create<ISession>((set) => ({
  isAuth: false,
  accessToken: null,
  setAuth: (isAuthVar: boolean, newAccessToken: string | null) => set({ isAuth: isAuthVar, accessToken: newAccessToken }),
}));