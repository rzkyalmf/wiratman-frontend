"use client";

import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (res.ok) {
      router.push("/login");
    }
  }

  return (
    <form action={handleLogout}>
      <Button variant="default" type="submit" className="outline-none w-full">
        Logout
      </Button>
    </form>
  );
}
