"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { createHomeDescriptionAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(createHomeDescriptionAction, {
    message: "",
    status: "",
    data: {
      title: "",
      description: "",
    },
  });

  return (
    <div className="space-y-10 w-full flex flex-col items-center">
      <h2 className="font-bold">Home Description</h2>

      <form action={formAction} className="w-1/2">
        <div className="space-y-4">
          <div className="space-y-2">
            <label>Title</label>
            <Input name="title" required defaultValue={state.data.title} />
          </div>

          <div className="space-y-2 relative">
            <label>Description</label>
            <Input name="description" required defaultValue={state.data.description} />
          </div>
        </div>

        <div className="mt-6">
          <Button disabled={pending} type="submit" variant="default" className="w-full">
            Submit
          </Button>
        </div>

        <p className="mt-4 text-red-500">{state.message}</p>

        <div className="py-10">
          <Link href="/homepage/home-description" className="flex flex-row items-center justify-center gap-2 hover:text-green-600">
            <ArrowLeft size={22} strokeWidth={1.4} />
            <p className="font-light tracking-normal">Kembali</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
