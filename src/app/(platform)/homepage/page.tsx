import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="space-y-5">
      <h3 className="font-bold">Homepage</h3>

      <div className="space-y-4">
        {/* Hero Section Card */}
        <div className="bg-slate-50 p-5 rounded-md shadow-md font-bold flex justify-between items-center hover:bg-slate-100 transition-colors">
          <div>Hero Section</div>
          <Link href="/homepage/hero-section">
            <Button>Edit</Button>
          </Link>
        </div>

        {/* Home Description Card */}
        <div className="bg-slate-50 p-5 rounded-md flex justify-between items-center shadow-md font-bold hover:bg-slate-100 transition-colors">
          <div>Home Description</div>
          <Link href="/homepage/home-description">
            <Button>Edit</Button>
          </Link>
        </div>

        {/* Features Card */}
        <div className="bg-slate-50 p-5 rounded-md flex justify-between items-center shadow-md font-bold hover:bg-slate-100 transition-colors">
          <div>Features</div>
          <Link href="/homepage/features">
            <Button>Edit</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
