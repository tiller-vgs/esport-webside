import AdminAdTable from "@/components/AdminAdTable";
import { requireAdmin } from "@/lib/auth-utils";

export default async function AdminDashboard() {
  const user = await requireAdmin();

  return (
    <main className="h-screen">
      <AdminAdTable />
    </main>
  );
}
