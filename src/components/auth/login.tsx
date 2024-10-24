"use client";

import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Login = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");

  async function handleLogin(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Penting untuk menerima cookies
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = (await res.json()) as { message: string };

    if (res.status === 403) {
      setMessage(data.message);
      setValue(email as string);
      return;
    }

    // setMessage(data.message);
    router.push("/dashboard");
  }

  return (
    <div className="space-y-10">
      <h2 className="font-bold">Login!</h2>

      <form action={handleLogin}>
        <div className="space-y-4">
          <div className="space-y-2 relative">
            <label>Email :</label>
            <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1 transform text-gray-300" size={22} />
            <Input type="email" name="email" className="pl-12" placeholder="Email" defaultValue={value} />
          </div>

          <div className="space-y-2 relative">
            <label>Password :</label>
            <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1 transform text-gray-300" size={22} />
            <Input type="password" name="password" className="pl-12" placeholder="Password" />
          </div>
        </div>

        <div className="mt-6">
          <Button type="submit" variant="default" className="w-full">
            Login
          </Button>
        </div>

        <div className="text-red-500 mt-6">{message}</div>
      </form>
    </div>
  );
};
