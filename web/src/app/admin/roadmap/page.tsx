"use client";

import React from "react";

export default function ProjectRoadmap() {
      const milestones = [
            { title: "Design & Arquitetura", status: "Completed", date: "Mar 10", icon: "💎" },
            { title: "Base de Dados & Supabase", status: "Completed", date: "Mar 10", icon: "🗄️" },
            { title: "Dashboard Mobile (Employee)", status: "Completed", date: "Mar 10", icon: "📱" },
            { title: "Painel Admin Web (Management)", status: "Completed", date: "Mar 10", icon: "💻" },
            { title: "Integração Biométrica Real", status: "Pending", date: "Próximo Passo", desc: "Testar em dispositivos físicos Android/iOS.", icon: "🔐" },
            { title: "Lançamento Produção", status: "Pending", date: "Abril 2026", desc: "Deployment em Vercel e App Stores.", icon: "🚀" },
      ];

      return (
            <div className="space-y-16 max-w-5xl mx-auto py-12">
                  <div className="text-center animate-in fade-in slide-in-from-top duration-1000">
                        <h1 className="text-5xl font-black text-foreground tracking-tighter gradient-text">Jornada do Projecto</h1>
                        <p className="text-accent mt-3 text-lg font-bold opacity-80 uppercase tracking-widest">Evolução do Sistema de Ponto Biométrico</p>
                  </div>

                  <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-primary/10 -translate-x-1/2 hidden md:block rounded-full"></div>

                        <div className="space-y-16">
                              {milestones.map((m, i) => (
                                    <div key={i} className={`flex flex-col md:flex-row items-center gap-12 group ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-10`} style={{ animationDelay: `${i * 150}ms` }}>
                                          <div className="flex-1 w-full glass p-8 rounded-3xl group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl relative overflow-hidden">
                                                <div className="flex justify-between items-center mb-6">
                                                      <span className={`text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest ${m.status === 'Completed' ? 'bg-green-500/10 text-green-400' : 'bg-orange-500/10 text-orange-400'
                                                            }`}>
                                                            {m.status === 'Completed' ? 'FINALIZADO' : 'EM CURSO'}
                                                      </span>
                                                      <span className="text-xs text-accent font-black font-mono uppercase tracking-[0.2em]">{m.date}</span>
                                                </div>
                                                <div className="flex items-center gap-4 mb-3">
                                                      <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-500">{m.icon}</span>
                                                      <h3 className="text-2xl font-black tracking-tight">{m.title}</h3>
                                                </div>
                                                {m.desc && <p className="text-sm text-accent leading-relaxed font-medium mt-4 border-t border-border/5 pt-4">{m.desc}</p>}
                                          </div>

                                          <div className="w-14 h-14 bg-background border-4 border-primary/20 rounded-2xl z-10 hidden md:flex items-center justify-center font-black text-xl shadow-xl shadow-primary/10 group-hover:border-primary group-hover:rotate-45 transition-all duration-500">
                                                <span className="group-hover:-rotate-45 transition-all text-sm font-black">{i + 1}</span>
                                          </div>

                                          <div className="flex-1 hidden md:block"></div>
                                    </div>
                              ))}
                        </div>
                  </div>

                  <div className="glass p-12 rounded-[40px] text-center bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/10 relative overflow-hidden group">
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10">
                              <h2 className="text-4xl font-black mb-4 tracking-tighter">Estado do Desenvolvimento: 90%</h2>
                              <p className="text-accent max-w-2xl mx-auto mb-10 text-lg font-bold leading-relaxed">A estrutura, lógica de geofencing e modo offline estão operacionais. O sistema está pronto para os testes finais de integração com os seus dispositivos móveis.</p>
                              <button className="btn-premium px-12 py-5 text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 active:scale-95 transition-all">
                                    Baixar Documentação Técnica
                              </button>
                        </div>
                  </div>
            </div>
      );
}
