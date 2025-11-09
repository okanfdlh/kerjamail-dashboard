import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardTopbar() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-card px-6">
      <SidebarTrigger className="-ml-2" />
      <div className="flex flex-1 items-center justify-between">
        <h1 className="text-lg font-semibold text-foreground">Kerjamail Dashboard</h1>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive"></span>
        </Button>
      </div>
    </header>
  );
}
