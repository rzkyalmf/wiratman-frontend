import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { ILoginRequest, ILoginResponse } from "@/types/auth";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const loginData = (await request.json()) as ILoginRequest;

    // Call authentication API
    const response = await fetch(`${process.env.API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = (await response.json()) as ILoginResponse;

    console.log(data);

    // Handle error response
    if (!response.ok) {
      return NextResponse.json({ message: data.message });
    }

    // Create response with cookies
    const cookies = response.headers.get("set-cookie");
    if (!cookies) {
      return NextResponse.json({ message: "No session cookies received" });
    }

    // Return successful response with cookies
    return NextResponse.json(data, {
      headers: { "set-cookie": cookies },
    });
  } catch (error) {
    return NextResponse.json({ message: "Login failed" }, { status: 500 });
  }
}
