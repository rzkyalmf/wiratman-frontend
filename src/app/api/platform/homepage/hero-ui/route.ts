import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { IHeroPostRes } from "@/types/homepage";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const formData = await request.formData();

    // Call authentication API
    const response = await fetch(`${process.env.API_URL}/homepage/create-hero`, {
      method: "POST",
      body: formData,
    });

    const data = (await response.json()) as IHeroPostRes;

    console.log(data);

    // Handle error response
    if (!response.ok) {
      return NextResponse.json({ message: data.message });
    }

    // Return successful response
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
