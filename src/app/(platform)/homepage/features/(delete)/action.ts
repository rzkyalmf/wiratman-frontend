"use server";

export async function deleteFeaturesAction(id: string) {
  await fetch(`${process.env.API_URL}/api/v1/homepage/features/${id}`, {
    method: "DELETE",
  });

  return;
}
