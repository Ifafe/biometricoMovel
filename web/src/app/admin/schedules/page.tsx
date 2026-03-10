"use client";

import React from "react";

const SCHEDULES = [
      { id: 1, name: "Turno Geral", hours: "08:00 - 17:00", employees: 85, color: "#415a76" },
      { id: 2, name: "Turno Noite", hours: "22:00 - 06:00", employees: 12, color: "#1b263b" },
      { id: 3, name: "Part-time Manhã", hours: "08:00 - 12:00", employees: 27, color: "#778da9" },
];

export default function ScheduleManagement() {
      return (
            <div className="space-y-8">
                  <div className="flex justify-between items-center">
                        <div>
                              <h1 className="text-3xl font-bold">Gestão de Escalas</h1>
                              <p className="text-[#778da9] mt-2">Defina os horários de trabalho e turnos dos funcionários.</p>
                        </div>
                        <button className="bg-[#415a76] hover:bg-[#778da9] text-white px-6 py-2 rounded-lg font-bold">
                              + Criar Turno
                        </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {SCHEDULES.map(s => (
                              <div key={s.id} className="bg-[#1b263b] p-6 rounded-xl border border-[#415a76] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-2 h-full" style={{ backgroundColor: s.color }}></div>
                                    <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                                    <p className="text-[#415a76] text-lg font-mono mb-4">{s.hours}</p>
                                    <div className="flex justify-between items-center text-sm text-[#778da9]">
                                          <span>{s.employees} Funcionários</span>
                                          <button className="hover:text-white underline">Ajustar</button>
                                    </div>
                              </div>
                        ))}
                  </div>

                  {/* Calendar View Placeholder */}
                  <div className="bg-[#1b263b] rounded-xl border border-[#415a76] p-6">
                        <div className="flex justify-between items-center mb-6">
                              <h2 className="text-xl font-bold text-[#e0e1dd]">Planeamento Semanal</h2>
                              <div className="flex gap-2">
                                    <button className="p-2 border border-[#415a76] rounded">◀</button>
                                    <button className="px-4 py-2 border border-[#415a76] rounded font-bold">Março 2026</button>
                                    <button className="p-2 border border-[#415a76] rounded">▶</button>
                              </div>
                        </div>

                        <div className="grid grid-cols-8 gap-px bg-[#415a7622]">
                              <div className="bg-[#1b263b] p-4 text-xs font-bold text-[#778da9]">H / Dia</div>
                              {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map(d => (
                                    <div key={d} className="bg-[#1b263b] p-4 text-center text-xs font-bold text-[#e0e1dd]">{d}</div>
                              ))}

                              {[
                                    { h: "08:00", data: ["G", "G", "G", "G", "G", "--", "--"] },
                                    { h: "12:00", data: ["G/P", "G/P", "G/P", "G/P", "G/P", "--", "--"] },
                                    { h: "17:00", data: ["G", "G", "G", "G", "G", "--", "--"] },
                              ].map((row, i) => (
                                    <React.Fragment key={i}>
                                          <div className="bg-[#1b263b] p-4 text-xs text-[#778da9] font-mono">{row.h}</div>
                                          {row.data.map((cell, j) => (
                                                <div key={j} className="bg-[#1b263b] p-4 text-center text-sm">
                                                      {cell !== '--' ? <span className="bg-[#415a76] px-2 py-1 rounded text-[10px] font-bold text-white">{cell}</span> : <span className="text-[#415a7633]">-</span>}
                                                </div>
                                          ))}
                                    </React.Fragment>
                              ))}
                        </div>
                  </div>
            </div>
      );
}
