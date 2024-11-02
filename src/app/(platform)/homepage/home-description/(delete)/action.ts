"use server";

export async function deleteHomeDescriptionAction(id: string) {
  await fetch(`${process.env.API_URL}/api/v1/homepage/descriptions/${id}`, {
    method: "DELETE",
  });

  return;
}
