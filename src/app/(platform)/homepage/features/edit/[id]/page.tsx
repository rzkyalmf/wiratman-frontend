import { Features, SingleResponse } from "@/types/homepage";

import { EditFeatures } from "./comp-edit";

interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;

  const res = await fetch(`${process.env.API_URL}/api/v1/homepage/features/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  const getData = (await res.json()) as SingleResponse<Features>;
  const data = getData.data;

  return (
    <>
      <EditFeatures id={id} title={data.title} />
    </>
  );
}
