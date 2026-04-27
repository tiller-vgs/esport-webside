import { requireAdmin } from "@/lib/auth-utils";

export default async function AdminDashboard() {
  const user = await requireAdmin();

  return (
    <div>
      <main>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="mt-2">{user.name}, velkommen til admin dashboardet</p>
      </main>
    </div>
  );
}
