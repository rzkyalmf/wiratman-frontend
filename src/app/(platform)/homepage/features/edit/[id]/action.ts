"use server";

import { redirect } from "next/navigation";

import { BaseResponse } from "@/types/homepage";

export async function editFeaturesAction(_state: unknown, formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;

  const res = await fetch(`${process.env.API_URL}/api/v1/homepage/features/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title }),
  });

  const data = (await res.json()) as BaseResponse;

  if (!res.ok) {
    return {
      status: "false",
      message: data.message,
    };
  }

  if (data.status === "success") {
    redirect("/homepage/features");
  }

  return data;
}
