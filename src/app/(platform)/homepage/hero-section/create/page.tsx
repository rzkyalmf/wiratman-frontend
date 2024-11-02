"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { createHeroAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(createHeroAction, {
    message: "",
    status: "",
    data: {
      title: "",
      buttonUrl: "",
    },
  });

  return (
    <div className="space-y-10 w-full flex flex-col items-center">
      <h2 className="font-bold">Hero UI</h2>

      <form action={formAction} className="w-1/2">
        <div className="space-y-4">
          <div className="space-y-2">
            <label>Title</label>
            <Input name="title" required defaultValue={state.data.title} />
          </div>

          <div className="space-y-2 relative">
            <label>Link Button</label>
            <Input name="buttonUrl" required defaultValue={state.data.buttonUrl} />
          </div>

          <div className="space-y-2 relative">
            <label>Upload Image</label>
            <Input type="file" name="image" />
          </div>
        </div>

        <div className="mt-6">
          <Button disabled={pending} type="submit" variant="default" className="w-full">
            Submit
          </Button>
        </div>

        <p className="mt-4 text-red-500">{state.message}</p>

        <div className="py-10">
          <Link href="/homepage/hero-section" className="flex flex-row items-center justify-center gap-2 hover:text-green-600">
            <ArrowLeft size={22} strokeWidth={1.4} />
            <p className="font-light tracking-normal">Kembali</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
