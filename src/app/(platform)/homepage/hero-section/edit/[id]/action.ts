"use server";

import { redirect } from "next/navigation";

import { BaseResponse } from "@/types/homepage";

export async function editHeroAction(_state: unknown, formData: FormData) {
  const res = await fetch(`${process.env.API_URL}/api/v1/homepage/hero/${formData.get("id") as string}`, {
    method: "PATCH",
    body: formData,
  });

  const data = (await res.json()) as BaseResponse;

  if (!res.ok) {
    return {
      status: "false",
      message: data.message,
    };
  }

  if (data.status === "success") {
    redirect("/homepage/hero-section");
  }

  return data;
}
