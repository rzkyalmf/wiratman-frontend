"use client";

import { Lock, Mail } from "lucide-react";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { loginAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, {
    message: "",
    token: "",
    status: "",
    data: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm p-8 py-20">
        <div className="space-y-10">
          <h2 className="font-bold">Login!</h2>

          <form action={formAction}>
            <div className="space-y-4">
              <div className="space-y-2 relative">
                <label>Email :</label>
                <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1 transform text-gray-300" size={22} />
                <Input type="email" name="email" className="pl-12" placeholder="Email" defaultValue={state.data?.email} />
              </div>

              <div className="space-y-2 relative">
                <label>Password :</label>
                <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1 transform text-gray-300" size={22} />
                <Input type="password" name="password" className="pl-12" placeholder="Password" />
              </div>
            </div>

            <div className="mt-6">
              <Button variant="default" disabled={pending} className="w-full" type="submit">
                Login
              </Button>
            </div>

            {state.message && <p className="text-red-500">{state.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
