"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

import HomePageService from "@/services/homepage";

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

export const HomePageForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleHero = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const buttonUrl = formData.get("buttonUrl") as string;
    const imageFile = formData.get("image") as File;

    const response = await HomePageService.HandlePost(title, buttonUrl, imageFile);

    if (response.status !== "success") {
      setError(response.message);
      return;
    }

    router.push("/dashboard");
    return;
  };

  return (
    <div className="space-y-10 w-full flex flex-col items-center">
      <h2 className="font-bold">Hero UI</h2>

      <form action={handleHero} className="w-1/2">
        <div className="space-y-4">
          <div className="space-y-2">
            <label>Title</label>
            <Input name="title" required />
          </div>

          <div className="space-y-2 relative">
            <label>Link Button</label>
            <Input name="buttonUrl" required />
          </div>

          <div className="space-y-2 relative">
            <label>Upload Image</label>
            <Input type="file" name="image" />
          </div>
        </div>

        <div className="mt-6">
          <Button type="submit" variant="default" className="w-full">
            Submit
          </Button>
        </div>

        <p className="mt-4 text-red-500">{error}</p>
      </form>
    </div>
  );
};
