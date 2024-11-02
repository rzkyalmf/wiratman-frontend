"use server";

import { redirect } from "next/navigation";

import { HomeDescriptions, SingleResponse } from "@/types/homepage";

export async function createHomeDescriptionAction(_state: unknown, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  const res = await fetch(`${process.env.API_URL}/api/v1/homepage/descriptions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  });

  const data = (await res.json()) as SingleResponse<HomeDescriptions>;

  if (!res.ok) {
    return {
      status: "false",
      message: data.message,
      data: {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
      },
    };
  }

  if (data.status === "success") {
    redirect("/homepage/home-description");
  }

  return data;
}
