"use client";

import React from "react";

export default function AdminDashboard() {
      const stats = [
            { label: "Funcionários Ativos", value: "124", change: "+12%", icon: "👥", trend: "up" },
            { label: "Ponto Batido Hoje", value: "89", change: "72%", icon: "⏱️", trend: "neutral" },
            { label: "Fora do Perímetro", value: "3", change: "Alertas", icon: "📍", trend: "down" },
            { label: "Solicitações Pendentes", value: "12", change: "RH", icon: "📩", trend: "neutral" },
      ];

      return (
            <div className="space-y-12">
                  <div className="animate-in fade-in slide-in-from-left duration-700">
                        <h1 className="text-4xl font-extrabold tracking-tight gradient-text">Visão Geral</h1>
                        <p className="text-muted-foreground mt-2 text-lg font-medium">Bem-vindo de volta ao centro de comando biométrico.</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                              <div key={stat.label}
                                    className="glass p-7 rounded-3xl group hover:scale-[1.03] transition-all duration-300 animate-in fade-in zoom-in"
                                    style={{ animationDelay: `${i * 100}ms` }}>
                                    <div className="flex justify-between items-start mb-6">
                                          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">{stat.icon}</div>
                                          <span className={`text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest ${stat.trend === 'up' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'
                                                }`}>
                                                {stat.change}
                                          </span>
                                    </div>
                                    <h3 className="text-accent text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</h3>
                                    <p className="text-3xl font-black text-foreground">{stat.value}</p>
                              </div>
                        ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Recent Activity */}
                        <div className="lg:col-span-2 glass rounded-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-1000">
                              <div className="p-8 border-b border-border/10 flex justify-between items-center bg-primary/5">
                                    <h2 className="text-xl font-black tracking-tight">Atividade Recente</h2>
                                    <button className="text-xs font-bold uppercase tracking-widest text-accent hover:text-foreground hover:underline transition-all">Ver Histórico Completo</button>
                              </div>
                              <div className="divide-y divide-border/5">
                                    {[
                                          { user: "Ana Silva", action: "Entrada (Escritório)", time: "08:05", status: "OK" },
                                          { user: "Carlos M.", action: "Saída (Home Office)", time: "12:30", status: "OK" },
                                          { user: "Bento J.", action: "Tentativa Bloqueada", time: "09:12", status: "BLOCK" },
                                          { user: "Zélia D.", action: "Entrada (Offline)", time: "07:55", status: "SYNC" },
                                    ].map((activity, i) => (
                                          <div key={i} className="p-6 flex items-center justify-between hover:bg-primary/5 transition-all cursor-default">
                                                <div className="flex items-center gap-5">
                                                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-black text-white shadow-lg">
                                                            {activity.user[0]}
                                                      </div>
                                                      <div>
                                                            <p className="font-bold text-lg">{activity.user}</p>
                                                            <p className="text-xs text-accent font-medium">{activity.action}</p>
                                                      </div>
                                                </div>
                                                <div className="text-right">
                                                      <p className="text-sm font-black font-mono tracking-tighter">{activity.time}</p>
                                                      <span className={`text-[9px] font-black px-2.5 py-1 rounded-full mt-2 inline-block uppercase tracking-wider ${activity.status === 'OK' ? 'bg-green-500/10 text-green-400' :
                                                                  activity.status === 'BLOCK' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-400'
                                                            }`}>
                                                            {activity.status}
                                                      </span>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>

                        {/* Alerts/Pending */}
                        <div className="space-y-6 animate-in fade-in slide-in-from-right duration-1000">
                              <div className="glass p-8 rounded-3xl">
                                    <h2 className="text-xl font-black mb-8 tracking-tight flex items-center gap-3">
                                          <span className="w-1.5 h-6 bg-red-500 rounded-full"></span>
                                          Alertas Críticos
                                    </h2>
                                    <div className="space-y-5">
                                          <div className="p-5 bg-red-500/5 border border-red-500/20 rounded-2xl group hover:bg-red-500/10 transition-all">
                                                <p className="text-sm font-black text-red-400 uppercase tracking-widest mb-2 flex items-center justify-between">
                                                      Perímetro Violado
                                                      <span>🚩</span>
                                                </p>
                                                <p className="text-xs text-accent leading-relaxed">3 funcionários tentaram bater ponto fora da área de trabalho hoje.</p>
                                          </div>
                                          <div className="p-5 bg-orange-500/5 border border-orange-500/20 rounded-2xl group hover:bg-orange-500/10 transition-all">
                                                <p className="text-sm font-black text-orange-400 uppercase tracking-widest mb-2 flex items-center justify-between">
                                                      Sincronicidade
                                                      <span>☁️</span>
                                                </p>
                                                <p className="text-xs text-accent leading-relaxed">Existem 5 registos offline aguardando validação de rede.</p>
                                          </div>
                                    </div>
                              </div>

                              <div className="glass p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent">
                                    <p className="text-xs font-black text-accent uppercase tracking-[0.2em] mb-2">Suporte Bio</p>
                                    <p className="text-sm font-bold leading-relaxed mb-6">Precisa de ajuda com as configurações de geofencing?</p>
                                    <button className="btn-premium w-full text-xs py-3 uppercase tracking-widest">Abrir Ticket</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
