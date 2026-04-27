import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function AdminDashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.role !== "ADMIN") {
    return (
      <div>
        <h1 className="text-2xl font-bold">Tilgang nektet</h1>
        <p className="mt-2">Du har ikke tilgang til denne siden.</p>
      </div>
    );
  }

  return (
    <div>
      <main>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="mt-2">Velkommen til admin dashboardet</p>
      </main>
    </div>
  );
}
