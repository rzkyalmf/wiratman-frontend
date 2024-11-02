"use server";

import { Hero, ListResponse } from "@/types/homepage";

export async function getHeroAction() {
  const res = await fetch(`${process.env.API_URL}/api/v1/homepage/hero`, {
    method: "GET",
    cache: "no-store",
  });

  const getData = (await res.json()) as ListResponse<Hero>;
  const data = getData.data;

  return data;
}
