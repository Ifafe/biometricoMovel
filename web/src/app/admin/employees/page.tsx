"use client";

import React, { useState } from "react";

const INITIAL_EMPLOYEES = [
      { id: 1, name: "Ana Silva", role: "Developer", dept: "Engenharia", status: "Active", email: "ana@empresa.com" },
      { id: 2, name: "Carlos M.", role: "Designer", dept: "Design", status: "Active", email: "carlos@empresa.com" },
      { id: 3, name: "Bento J.", role: "Manager", dept: "RH", status: "Away", email: "bento@empresa.com" },
      { id: 4, name: "Zélia D.", role: "Analyst", dept: "Financeiro", status: "Inactive", email: "zelia@empresa.com" },
];

export default function EmployeeManagement() {
      const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
      const [search, setSearch] = useState("");

      const filtered = employees.filter(e =>
            e.name.toLowerCase().includes(search.toLowerCase()) ||
            e.dept.toLowerCase().includes(search.toLowerCase())
      );

      return (
            <div className="space-y-12">
                  <div className="flex justify-between items-center animate-in fade-in slide-in-from-left duration-700">
                        <div>
                              <h1 className="text-4xl font-extrabold tracking-tight gradient-text">Gestão de Equipa</h1>
                              <p className="text-muted-foreground mt-2 text-lg font-medium">Controlo centralizado de identidades e acessos.</p>
                        </div>
                        <button className="btn-premium px-8 py-4 text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                              + Admitir Funcionário
                        </button>
                  </div>

                  <div className="glass rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="p-8 border-b border-border/10 flex items-center bg-primary/5">
                              <div className="relative w-full max-w-xl group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl opacity-50 group-focus-within:opacity-100 transition-opacity">🔍</span>
                                    <input
                                          type="text"
                                          placeholder="Pesquisar por nome, cargo ou departamento..."
                                          className="input-premium block pl-12 focus:scale-[1.01] transition-all bg-background/30"
                                          value={search}
                                          onChange={(e) => setSearch(e.target.value)}
                                    />
                              </div>
                        </div>
                        <div className="overflow-x-auto">
                              <table className="w-full text-left">
                                    <thead>
                                          <tr className="bg-primary/10 text-accent text-[10px] uppercase font-black tracking-[0.2em]">
                                                <th className="px-8 py-5">Perfil</th>
                                                <th className="px-8 py-5">Identificação</th>
                                                <th className="px-8 py-5">Estado Atual</th>
                                                <th className="px-8 py-5 text-right">Acções</th>
                                          </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/5">
                                          {filtered.map((emp) => (
                                                <tr key={emp.id} className="hover:bg-primary/5 transition-all group cursor-default">
                                                      <td className="px-8 py-7">
                                                            <div className="flex items-center gap-5">
                                                                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-black text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                                                                        {emp.name[0]}
                                                                  </div>
                                                                  <div>
                                                                        <p className="font-bold text-lg leading-tight">{emp.name}</p>
                                                                        <p className="text-xs text-accent font-medium mt-1 uppercase tracking-wider">{emp.email}</p>
                                                                  </div>
                                                            </div>
                                                      </td>
                                                      <td className="px-8 py-7">
                                                            <p className="text-base font-bold text-foreground">{emp.role}</p>
                                                            <p className="text-xs text-accent font-black uppercase tracking-widest mt-1 opacity-70">{emp.dept}</p>
                                                      </td>
                                                      <td className="px-8 py-7">
                                                            <span className={`text-[9px] font-black px-3 py-1.5 rounded-full inline-block uppercase tracking-widest ${emp.status === 'Active' ? 'bg-green-500/10 text-green-400' :
                                                                        emp.status === 'Away' ? 'bg-orange-500/10 text-orange-400' : 'bg-red-500/10 text-red-400'
                                                                  }`}>
                                                                  {emp.status}
                                                            </span>
                                                      </td>
                                                      <td className="px-8 py-7 text-right">
                                                            <div className="flex gap-4 justify-end opacity-40 group-hover:opacity-100 transition-opacity">
                                                                  <button className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-primary/20 hover:text-white transition-all text-xl">✏️</button>
                                                                  <button className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-red-500/20 hover:text-red-500 transition-all text-xl">🗑️</button>
                                                            </div>
                                                      </td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                              {filtered.length === 0 && (
                                    <div className="p-20 text-center animate-in fade-in duration-500">
                                          <Text style={{ fontSize: 50, marginBottom: 20 }}>👤</Text>
                                          <p className="text-accent font-bold text-lg italic">Nenhum colaborador encontrado com estes termos.</p>
                                    </div>
                              )}
                        </div>
                  </div>
            </div>
      );
}

function Text({ children, style }: any) {
      return <div style={{ ...style }}>{children}</div>
}
