"use server";

export async function deleteHeroAction(id: string) {
  await fetch(`${process.env.API_URL}/api/v1/homepage/hero/${id}`, {
    method: "DELETE",
  });

  return;
}
