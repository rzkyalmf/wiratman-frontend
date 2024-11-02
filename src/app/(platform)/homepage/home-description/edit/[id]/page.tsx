import { HomeDescriptions, SingleResponse } from "@/types/homepage";

import { EditHomeDescription } from "./comp-edit";

interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;

  const res = await fetch(`${process.env.API_URL}/api/v1/homepage/descriptions/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  const getData = (await res.json()) as SingleResponse<HomeDescriptions>;
  const data = getData.data;

  return (
    <>
      <EditHomeDescription id={id} title={data.title} description={data.description} />
    </>
  );
}
