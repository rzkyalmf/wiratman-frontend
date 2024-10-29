import type { ILoginResponse } from "@/types/auth";

const authService = {
  HandleLogin: async (email: string, password: string) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = (await res.json()) as ILoginResponse;

    return data;
  },
};

export default authService;
