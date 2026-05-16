import { create } from "zustand";

interface AuthState {
  user: any;

  setUser: (user: any) => void;

  logout: () => void;
}

export const useAuthStore =
  create<AuthState>((set) => ({

    user: JSON.parse(
      localStorage.getItem("user") || "null"
    ),

    setUser: (user) => {

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      set({ user });
    },

    logout: () => {

      localStorage.removeItem("user");

      set({ user: null });
    },

}));