"use client";

import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import authService from "@/services/auth";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await authService.HandleLogin(email, password);

    if (response.status !== "success") {
      setError(response.message);
      return;
    }

    router.push("/dashboard");
    return;
  };

  return (
    <div className="space-y-10">
      <h2 className="font-bold">Login!</h2>

      <form action={handleLogin}>
        <div className="space-y-4">
          <div className="space-y-2 relative">
            <label>Email :</label>
            <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1 transform text-gray-300" size={22} />
            <Input type="email" name="email" className="pl-12" placeholder="Email" />
          </div>

          <div className="space-y-2 relative">
            <label>Password :</label>
            <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1 transform text-gray-300" size={22} />
            <Input type="password" name="password" className="pl-12" placeholder="Password" />
          </div>
        </div>

        <div className="mt-6">
          <Button variant="default" className="w-full" type="submit">
            Login
          </Button>
        </div>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};
