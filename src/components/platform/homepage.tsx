import React from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const HomePage = () => {
  return (
    <div className="space-y-10 w-full flex flex-col items-center">
      <h2 className="font-bold">Hero UI</h2>

      <form className="w-1/2">
        <div className="space-y-4">
          <div className="space-y-2">
            <label>Title</label>
            <Input />
          </div>

          <div className="space-y-2 relative">
            <label>Link Button</label>
            <Input />
          </div>

          <div className="space-y-2 relative">
            <label>Upload Image</label>
            <Input type="file" />
          </div>
        </div>

        <div className="mt-6">
          <Button type="submit" variant="default" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
