import { cookies } from "next/headers";

interface AuthPayload {
  id: string;
  name: string;
  email: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8001";

export default async function serverAuth() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const response = await fetch(`${API_URL}/user/protected`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as AuthPayload;
    return payload;
  } catch (error) {
    console.error("Server auth error:", error);
    return null;
  }
}
