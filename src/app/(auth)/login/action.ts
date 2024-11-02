"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { UserResponse } from "@/types/auth";

export async function loginAction(_state: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const res = await fetch(`${process.env.API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = (await res.json()) as UserResponse;

  console.log(data);

  if (!res.ok) {
    return {
      message: data.message,
      token: "",
      status: "false",
      data: {
        email,
        password,
      },
    };
  }

  const responseCookies = res.headers.get("set-cookie");

  if (!responseCookies) {
    return {
      success: false,
      message: "No session cookies received",
    };
  }

  const cookieStore = cookies();

  cookieStore.set("token", data.token, {
    httpOnly: true,
    path: "/",
  });

  if (data.status === "success") {
    redirect("/homepage");
  }

  return data;
}
