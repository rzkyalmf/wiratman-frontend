import { NextResponse } from "next/server";

interface LoginResponse {
  message: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8001";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email: string; password: string };

    const response = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = (await response.json()) as LoginResponse;

    const nextResponse = NextResponse.json(data, {
      status: response.status,
    });

    const cookies = response.headers.get("set-cookie");

    if (!cookies) {
      return nextResponse;
    }

    nextResponse.headers.set("set-cookie", cookies);
    return nextResponse;
  } catch (error) {
    return NextResponse.json({ message: "Login failed" }, { status: 500 });
  }
}
