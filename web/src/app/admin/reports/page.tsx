"use client";

import React from "react";

export default function AttendanceReport() {
      return (
            <div className="space-y-12 animate-in fade-in duration-1000">
                  <div className="flex justify-between items-end">
                        <div>
                              <h1 className="text-4xl font-extrabold tracking-tight gradient-text">Relatórios de Dados</h1>
                              <p className="text-muted-foreground mt-2 text-lg font-medium">Extração de métricas de assiduidade e performance.</p>
                        </div>
                        <div className="flex gap-4">
                              <button className="glass px-6 py-3 text-xs font-black uppercase tracking-widest text-accent hover:text-foreground transition-all">
                                    📥 Exportar PDF
                              </button>
                              <button className="btn-premium px-8 py-4 text-xs font-black uppercase tracking-widest bg-green-600/20 text-green-400 border-green-500/30">
                                    📊 Exportar Excel
                              </button>
                        </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                              { label: "Total de Horas (Março)", value: "14,230 h", sub: "Global da Equipa", color: "primary" },
                              { label: "Média de Atrasos", value: "4.2 min", sub: "Métrica por Turno", color: "orange" },
                              { label: "Faltas Injustificadas", value: "12", sub: "Ação de RH Necessária", color: "red" },
                        ].map((stat, i) => (
                              <div key={i} className="glass p-8 rounded-3xl relative overflow-hidden group">
                                    <div className={`absolute top-0 right-0 w-1 h-full bg-${stat.color}-500 opacity-30`}></div>
                                    <h3 className="text-accent text-xs font-black uppercase tracking-[0.2em] mb-2">{stat.label}</h3>
                                    <p className="text-3xl font-black mb-1">{stat.value}</p>
                                    <p className="text-[10px] text-accent font-bold uppercase">{stat.sub}</p>
                              </div>
                        ))}
                  </div>

                  <div className="glass rounded-3xl overflow-hidden border border-border/10 p-1 bg-background/20 shadow-2xl">
                        <div className="h-96 flex flex-col items-center justify-center relative">
                              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
                              <p className="text-5xl mb-6">📉</p>
                              <h3 className="text-xl font-black tracking-tight">Análise de Horas por Departamento</h3>
                              <p className="text-sm text-accent max-w-sm text-center mt-3 font-medium">Os gráficos interactivos serão renderizados aqui usando bibliotecas como Recharts ou Chart.js.</p>

                              <div className="mt-12 flex gap-4">
                                    {[40, 70, 50, 90, 60, 85].map((h, i) => (
                                          <div key={i} className="w-12 bg-primary/20 rounded-t-xl relative group cursor-pointer" style={{ height: `${h}%` }}>
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 glass px-2 py-1 text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">DEP {i + 1}</div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      );
}
