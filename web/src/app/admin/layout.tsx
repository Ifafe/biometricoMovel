"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      const pathname = usePathname();

      // Don't show sidebar on login/register pages
      const isAuthPage = pathname === "/admin/login" || pathname === "/admin/register";

      if (isAuthPage) {
            return <main className="min-h-screen bg-background">{children}</main>;
      }

      const menuItems = [
            { label: "Visão Geral", icon: "📊", href: "/admin/dashboard" },
            { label: "Funcionários", icon: "👥", href: "/admin/employees" },
            { label: "Perímetros", icon: "📍", href: "/admin/perimeters" },
            { label: "Escalas", icon: "📅", href: "/admin/schedules" },
            { label: "Férias", icon: "🏖️", href: "/admin/vacations" },
            { label: "Relatórios", icon: "📈", href: "/admin/reports" },
            { label: "Configurações", icon: "⚙️", href: "/admin/settings" },
            { label: "Roadmap", icon: "🗺️", href: "/admin/roadmap" },
      ];

      return (
            <div className="flex min-h-screen bg-background text-foreground selection:bg-primary/30">
                  {/* Sidebar - Glass Effect */}
                  <aside className="w-72 glass border-r-0 rounded-none h-screen sticky top-0 flex flex-col p-6 z-50">
                        <div className="flex items-center gap-4 mb-12 ml-2">
                              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-xl shadow-lg shadow-primary/20">🛡️</div>
                              <div>
                                    <h1 className="text-xl font-black tracking-tighter gradient-text uppercase">Bio-Kwenda</h1>
                                    <p className="text-[10px] font-bold text-accent tracking-widest uppercase opacity-80">Admin Center</p>
                              </div>
                        </div>

                        <nav className="flex-1 space-y-1.5 overflow-y-auto pr-2 custom-scrollbar">
                              {menuItems.map((item) => (
                                    <Link
                                          key={item.href}
                                          href={item.href}
                                          className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-medium text-sm group ${pathname === item.href
                                                ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
                                                : "text-accent hover:bg-primary/10 hover:text-foreground"
                                                }`}
                                    >
                                          <span className={`text-xl transition-transform group-hover:scale-110 ${pathname === item.href ? 'scale-110' : ''}`}>{item.icon}</span>
                                          <span className="tracking-tight">{item.label}</span>
                                    </Link>
                              ))}
                        </nav>

                        <div className="mt-auto pt-6 border-t border-border/10">
                              <div className="flex items-center gap-4 p-2 mb-4 bg-primary/5 rounded-2xl border border-primary/10">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold border-2 border-background shadow-inner">A</div>
                                    <div>
                                          <p className="text-sm font-bold">Admin Portal</p>
                                          <p className="text-[10px] text-accent font-medium">Sessão Ativa</p>
                                    </div>
                              </div>
                              <Link
                                    href="/admin/login"
                                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors font-bold text-xs uppercase tracking-widest"
                              >
                                    <span>🚪</span>
                                    <span>Terminar Sessão</span>
                              </Link>
                        </div>
                  </aside>

                  {/* Main Content */}
                  <main className="flex-1 p-10 overflow-y-auto bg-transparent relative">
                        {/* Decorative Glow */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse duration-5000"></div>
                        <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                              {children}
                        </div>
                  </main>
            </div>
      );
}
