"use server";

import { redirect } from "next/navigation";

import { Hero, SingleResponse } from "@/types/homepage";

export async function createHeroAction(_state: unknown, formData: FormData) {
  const res = await fetch(`${process.env.API_URL}/api/v1/homepage/hero`, {
    method: "POST",
    body: formData,
  });

  const data = (await res.json()) as SingleResponse<Hero>;

  if (!res.ok) {
    return {
      status: "false",
      message: data.message,
      data: {
        title: formData.get("title") as string,
        buttonUrl: formData.get("buttonUrl") as string,
      },
    };
  }

  if (data.status === "success") {
    redirect("/homepage/hero-section");
  }

  return data;
}
