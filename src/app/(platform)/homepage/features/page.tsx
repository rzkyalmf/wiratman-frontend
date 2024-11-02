import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

import { DeleteFeatures } from "./(delete)/comp-delete";
import { getHomeDescriptionAction } from "./action";

export default async function Page() {
  const data = await getHomeDescriptionAction();

  return (
    <div className="space-y-5 ">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Features</h3>
        <Link href="/homepage/features/create">
          <Button className="font-bold">Create Features</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item._id} className="border p-4 rounded-lg space-y-3">
            <h4>{item.title}</h4>

            <div className="flex gap-2">
              <Link href={`/homepage/features/edit/${item._id}`}>
                <Button>Edit</Button>
              </Link>
              <DeleteFeatures id={item._id} />
            </div>
          </div>
        ))}
      </div>

      <div className="py-10">
        <Link href="/homepage" className="flex flex-row items-center justify-center gap-2 hover:text-green-600">
          <ArrowLeft size={22} strokeWidth={1.4} />
          <p className="font-light tracking-normal">Kembali Ke Homepage</p>
        </Link>
      </div>
    </div>
  );
}
