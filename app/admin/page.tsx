import AdminAdTable from "@/app/admin/components/AdminAdTable";
import { requireAdmin } from "@/lib/auth-utils";

export default async function AdminDashboard() {
  await requireAdmin();

  return (
    <main className="h-screen">
      <AdminAdTable />
    </main>
  );
}
