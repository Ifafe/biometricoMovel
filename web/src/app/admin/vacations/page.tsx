"use client";

import React, { useState } from "react";

const VACATIONS = [
      { id: 1, name: "Ana Silva", period: "15 Mai - 30 Mai", days: 15, status: "Approved" },
      { id: 2, name: "Carlos M.", period: "01 Jun - 15 Jun", days: 14, status: "Pending" },
      { id: 3, name: "Bento J.", period: "10 Jul - 20 Jul", days: 10, status: "Pending" },
      { id: 4, name: "Zélia D.", period: "05 Ago - 25 Ago", days: 20, status: "Rejected" },
];

export default function VacationManagement() {
      return (
            <div className="space-y-12 animate-in fade-in duration-1000">
                  <div className="flex justify-between items-end">
                        <div>
                              <h1 className="text-4xl font-extrabold tracking-tight gradient-text">Gestão de Ausências</h1>
                              <p className="text-muted-foreground mt-2 text-lg font-medium">Aprove ou planeie as férias e licenças da sua equipa.</p>
                        </div>
                        <button className="btn-premium px-8 py-4 text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                              + Novo Pedido
                        </button>
                  </div>

                  <div className="glass rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <table className="w-full text-left">
                              <thead>
                                    <tr className="bg-primary/10 text-accent text-[10px] uppercase font-black tracking-[0.2em]">
                                          <th className="px-8 py-5">Colaborador</th>
                                          <th className="px-8 py-5">Datas Agendadas</th>
                                          <th className="px-8 py-5">Total Dias</th>
                                          <th className="px-8 py-5">Estado Atual</th>
                                          <th className="px-8 py-5 text-right">Decisões</th>
                                    </tr>
                              </thead>
                              <tbody className="divide-y divide-border/5">
                                    {VACATIONS.map((v, i) => (
                                          <tr key={v.id}
                                                className="hover:bg-primary/5 transition-all group cursor-default animate-in slide-in-from-left"
                                                style={{ animationDelay: `${i * 100}ms` }}
                                          >
                                                <td className="px-8 py-7 font-black text-lg">{v.name}</td>
                                                <td className="px-8 py-7 text-sm font-medium font-mono text-accent">{v.period}</td>
                                                <td className="px-8 py-7 text-sm font-black text-foreground">{v.days} dias</td>
                                                <td className="px-8 py-7">
                                                      <span className={`text-[9px] font-black px-3 py-1.5 rounded-full inline-block uppercase tracking-widest ${v.status === 'Approved' ? 'bg-green-500/10 text-green-400' :
                                                                  v.status === 'Pending' ? 'bg-orange-500/10 text-orange-400' : 'bg-red-500/10 text-red-500'
                                                            }`}>
                                                            {v.status === 'Approved' ? 'APROVADO' : v.status === 'Pending' ? 'PENDENTE' : 'REJEITADO'}
                                                      </span>
                                                </td>
                                                <td className="px-8 py-7 text-right">
                                                      <div className="flex gap-4 justify-end">
                                                            <button className="px-4 py-2 border border-green-500/20 text-green-400 hover:bg-green-500/10 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all">Aprovar</button>
                                                            <button className="px-4 py-2 border border-red-500/20 text-red-400 hover:bg-red-500/10 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all">Recusar</button>
                                                      </div>
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </div>
      );
}
