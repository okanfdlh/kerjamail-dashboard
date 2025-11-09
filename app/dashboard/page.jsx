import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Mail, Zap, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Domains",
      value: "12",
      description: "Active domains",
      icon: Building2,
      trend: "+2 this month",
    },
    {
      title: "Mailboxes",
      value: "48",
      description: "Active mailboxes",
      icon: Mail,
      trend: "+5 this week",
    },
    {
      title: "Active Features",
      value: "24",
      description: "Aliases & forwarding",
      icon: Zap,
      trend: "3 new aliases",
    },
    {
      title: "Storage Used",
      value: "156 GB",
      description: "Of 500 GB total",
      icon: TrendingUp,
      trend: "31% used",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Dashboard Overview</h2>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your email service.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <p className="mt-2 text-xs font-medium text-primary">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest domain and mailbox changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/10">
                  <Building2 className="h-4 w-4 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Domain verified</p>
                  <p className="text-xs text-muted-foreground">example.com - 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New mailbox created</p>
                  <p className="text-xs text-muted-foreground">support@example.com - 5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warning/10">
                  <Zap className="h-4 w-4 text-warning" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Alias configured</p>
                  <p className="text-xs text-muted-foreground">contact@example.com - 1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button className="w-full rounded-lg border border-border bg-card p-3 text-left transition-colors hover:bg-accent">
                <p className="font-medium text-sm">Add New Domain</p>
                <p className="text-xs text-muted-foreground">Register a new domain for email</p>
              </button>
              <button className="w-full rounded-lg border border-border bg-card p-3 text-left transition-colors hover:bg-accent">
                <p className="font-medium text-sm">Create Mailbox</p>
                <p className="text-xs text-muted-foreground">Add a new email account</p>
              </button>
              <button className="w-full rounded-lg border border-border bg-card p-3 text-left transition-colors hover:bg-accent">
                <p className="font-medium text-sm">Configure Forwarding</p>
                <p className="text-xs text-muted-foreground">Set up email forwarding rules</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
