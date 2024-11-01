import { cookies } from "next/headers";

interface AuthPayload {
  id: string;
  name: string;
  email: string;
}

export default async function serverAuth() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const response = await fetch(`${process.env.API_URL}/api/v1/auth/me`, {
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
