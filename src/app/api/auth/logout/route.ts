import { NextResponse } from "next/server";

export function POST() {
  const response = NextResponse.json({ message: "Logged out successfully" }, { status: 200 });

  response.cookies.set("token", "", {
    expires: new Date(0),
    path: "/",
  });

  return response;
}
