"use server";

import { redirect } from "next/navigation";

import { Features, SingleResponse } from "@/types/homepage";

export async function createFeaturesAction(_state: unknown, formData: FormData) {
  const title = formData.get("title") as string;

  const res = await fetch(`${process.env.API_URL}/api/v1/homepage/features`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  const data = (await res.json()) as SingleResponse<Features>;

  if (!res.ok) {
    return {
      status: "false",
      message: data.message,
      data: {
        title: formData.get("title") as string,
      },
    };
  }

  if (data.status === "success") {
    redirect("/homepage/features");
  }

  return data;
}
