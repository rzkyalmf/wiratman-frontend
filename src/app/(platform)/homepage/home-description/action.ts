"use server";

import { HomeDescriptions, ListResponse } from "@/types/homepage";

export async function getHomeDescriptionAction() {
  const res = await fetch(`${process.env.API_URL}/api/v1/homepage/descriptions`, {
    method: "GET",
    cache: "no-store",
  });

  const getData = (await res.json()) as ListResponse<HomeDescriptions>;
  const data = getData.data;

  return data;
}
