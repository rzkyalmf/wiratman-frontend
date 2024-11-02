"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { editFeaturesAction } from "./action";

interface Props {
  id: string;
  title: string;
}

export const EditFeatures: React.FC<Props> = ({ id, title }) => {
  const [state, formAction, pending] = useActionState(editFeaturesAction, {
    message: "",
    status: "",
  });

  return (
    <div className="space-y-10 w-full flex flex-col items-center">
      <h2 className="font-bold">Edit Features</h2>

      <form action={formAction} className="w-1/2">
        <input name="id" defaultValue={id} hidden />

        <div className="space-y-4">
          <div className="space-y-2">
            <label>Title</label>
            <Input name="title" required defaultValue={title} />
          </div>
        </div>

        <div className="mt-6">
          <Button disabled={pending} type="submit" variant="default" className="w-full">
            Submit
          </Button>
        </div>

        <p className="mt-4 text-red-500">{state.message}</p>

        <div className="py-10">
          <Link href="/homepage/features" className="flex flex-row items-center justify-center gap-2 hover:text-green-600">
            <ArrowLeft size={22} strokeWidth={1.4} />
            <p className="font-light tracking-normal">Kembali</p>
          </Link>
        </div>
      </form>
    </div>
  );
};
