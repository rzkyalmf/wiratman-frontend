import { Login } from "@/components/auth/login";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm p-8 py-20">
        <Login />
      </div>
    </div>
  );
}
