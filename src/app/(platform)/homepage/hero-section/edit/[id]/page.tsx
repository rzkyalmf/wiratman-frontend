import { Hero, SingleResponse } from "@/types/homepage";

import { EditHero } from "./comp-edit";

interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;

  const res = await fetch(`${process.env.API_URL}/api/v1/homepage/hero/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  const getData = (await res.json()) as SingleResponse<Hero>;
  const data = getData.data;

  return (
    <>
      <EditHero id={id} title={data.title} buttonUrl={data.buttonUrl} />
    </>
  );
}