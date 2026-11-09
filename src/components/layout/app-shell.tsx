import { DashboardHeader } from "./dashboard-header";
import { DashboardSidebar } from "./dashboard-sidebar";
export function AppShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen"><DashboardSidebar /><div className="lg:ps-72"><DashboardHeader /><main className="p-4 lg:p-8">{children}</main></div></div>;
}
