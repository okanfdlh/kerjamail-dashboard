import { Mail, LayoutDashboard, Building2, Zap, CreditCard, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Sidebar } from "@/components/ui/sidebar"; // cuma Sidebar yang ada

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Manajemen Domain", url: "/dashboard/domains", icon: Building2 },
  { title: "Manajemen Email", url: "/dashboard/mailboxes", icon: Mail },
  { title: "Fitur", url: "/dashboard/features", icon: Zap },
  { title: "Billing", url: "/dashboard/billing", icon: CreditCard },
];

export function DashboardSidebar() {
  const handleLogout = () => (window.location.href = "/login");

  return (
    <Sidebar collapsible="none" className="border-r border-border p-4 bg-sidebar text-sidebar-foreground flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <Mail className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="text-lg font-semibold">Kerjamail</span>
      </div>

      {/* Menu */}
      <nav className="space-y-1 flex-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            href={item.url} // jangan pakai `to` atau `end`
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition"
            activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-3 py-2 mt-4 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition"
      >
        <LogOut className="h-4 w-4" />
        <span>Logout</span>
      </button>
    </Sidebar>
  );
}
