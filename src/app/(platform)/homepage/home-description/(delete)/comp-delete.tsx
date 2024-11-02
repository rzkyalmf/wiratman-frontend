"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { deleteHomeDescriptionAction } from "./action";

interface Props {
  id: string;
}

export const DeleteHomeDescription: React.FC<Props> = ({ id }) => {
  const router = useRouter();

  async function handleDelete() {
    await deleteHomeDescriptionAction(id);

    return router.refresh();
  }

  return (
    <div>
      <Button onClick={handleDelete} type="submit" variant="default" className="w-full">
        Delete
      </Button>
    </div>
  );
};
