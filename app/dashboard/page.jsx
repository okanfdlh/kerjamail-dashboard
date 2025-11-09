"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Mail, Zap, TrendingUp } from "lucide-react";
import { AddDomainDrawer } from "@/components/AddDomainDrawer";
import { AddMailboxDrawer } from "@/components/AddMailboxDrawer";
import { mockDomains } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [drawerDomainOpen, setDrawerDomainOpen] = useState(false);
  const [drawerMailboxOpen, setDrawerMailboxOpen] = useState(false);

  const stats = [
    {
      title: "Total Domain",
      value: "12",
      description: "Domain aktif",
      icon: Building2,
      trend: "+2 bulan ini",
    },
    {
      title: "Mailbox",
      value: "48",
      description: "Mailbox aktif",
      icon: Mail,
      trend: "+5 minggu ini",
    },
    {
      title: "Fitur Aktif",
      value: "24",
      description: "Alias & penerusan",
      icon: Zap,
      trend: "3 alias baru",
    },
    {
      title: "Penyimpanan Terpakai",
      value: "156 GB",
      description: "Dari total 500 GB",
      icon: TrendingUp,
      trend: "31% terpakai",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h2>
        <p className="text-muted-foreground">Selamat datang kembali! Berikut kondisi layanan email Anda saat ini.</p>
      </div>

      {/* Statistik */}
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

      {/* Aktivitas Terbaru dan Aksi Cepat */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
            <CardDescription>Perubahan domain dan mailbox terbaru Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/10">
                  <Building2 className="h-4 w-4 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Domain diverifikasi</p>
                  <p className="text-xs text-muted-foreground">example.com - 2 jam lalu</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Mailbox baru dibuat</p>
                  <p className="text-xs text-muted-foreground">support@example.com - 5 jam lalu</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warning/10">
                  <Zap className="h-4 w-4 text-warning" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Alias dikonfigurasi</p>
                  <p className="text-xs text-muted-foreground">contact@example.com - 1 hari lalu</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Aksi Cepat</CardTitle>
            <CardDescription>Tugas umum dan pintasan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button
                className="w-full rounded-lg border border-border bg-card p-3 text-left transition-colors hover:bg-accent"
                onClick={() => setDrawerDomainOpen(true)}
              >
                <p className="font-medium text-sm">Tambah Domain Baru</p>
                <p className="text-xs text-muted-foreground">Daftarkan domain baru untuk email</p>
              </button>

              <button
                className="w-full rounded-lg border border-border bg-card p-3 text-left transition-colors hover:bg-accent"
                onClick={() => setDrawerMailboxOpen(true)}
              >
                <p className="font-medium text-sm">Buat Mailbox</p>
                <p className="text-xs text-muted-foreground">Tambahkan akun email baru</p>
              </button>

              <button
                className="w-full rounded-lg border border-border bg-card p-3 text-left transition-colors hover:bg-accent"
                onClick={() => window.location.href = "/dashboard/features"}
              >
                <p className="font-medium text-sm">Konfigurasi Penerusan</p>
                <p className="text-xs text-muted-foreground">Atur aturan penerusan email</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Drawer Domain */}
      <AddDomainDrawer
        open={drawerDomainOpen}
        onOpenChange={setDrawerDomainOpen}
        onAdd={(newDomain) => console.log("Domain ditambahkan:", newDomain)}
      />

      {/* Drawer Mailbox */}
      <AddMailboxDrawer
        open={drawerMailboxOpen}
        onOpenChange={setDrawerMailboxOpen}
        onAdd={(newMailbox) => console.log("Mailbox ditambahkan:", newMailbox)}
        domains={mockDomains.map(d => d.name)}
      />
    </div>
  );
};

export default Dashboard;
