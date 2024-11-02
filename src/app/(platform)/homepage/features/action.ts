"use server";

import { Features, ListResponse } from "@/types/homepage";

export async function getHomeDescriptionAction() {
  const res = await fetch(`${process.env.API_URL}/api/v1/homepage/features`, {
    method: "GET",
    cache: "no-store",
  });

  const getData = (await res.json()) as ListResponse<Features>;
  const data = getData.data;

  return data;
}
