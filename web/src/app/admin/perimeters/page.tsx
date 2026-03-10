"use client";

import React, { useState } from "react";

const INITIAL_PERIMETERS = [
      { id: 1, name: "Escritório Luanda", lat: -8.8368, lng: 13.2344, radius: 200, status: "Active" },
      { id: 2, name: "Armazém Viana", lat: -8.9168, lng: 13.3544, radius: 500, status: "Active" },
      { id: 3, name: "Filial Talatona", lat: -8.9268, lng: 13.1844, radius: 150, status: "Inactive" },
];

export default function PerimeterManagement() {
      const [perimeters, setPerimeters] = useState(INITIAL_PERIMETERS);

      return (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                  <div className="flex justify-between items-center">
                        <div>
                              <h1 className="text-4xl font-extrabold tracking-tight gradient-text">Zonas Geofencing</h1>
                              <p className="text-muted-foreground mt-2 text-lg font-medium">Configure perímetros virtuais para validação de presença.</p>
                        </div>
                        <button className="btn-premium px-8 py-4 text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                              + Novo Local
                        </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Map Placeholder */}
                        <div className="lg:col-span-2 glass rounded-3xl aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
                              <div className="absolute inset-0 bg-background/50 flex items-center justify-center backdrop-blur-sm group-hover:backdrop-blur-none transition-all">
                                    <div className="text-center p-8 glass bg-primary/20 rounded-2xl border border-primary/30 max-w-xs animate-pulse">
                                          <p className="text-3xl mb-4">🌍</p>
                                          <p className="text-sm font-black text-foreground uppercase tracking-widest">A Carregar Mapas...</p>
                                          <p className="text-[10px] text-accent mt-2 font-bold leading-relaxed">Pode ativar aqui APIs de Google Maps ou Mapbox nas Definições do Sistema.</p>
                                    </div>
                              </div>
                              {/* Mock Marker Circles */}
                              <div className="relative w-64 h-64 border-4 border-primary/30 border-dashed rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                    <div className="w-6 h-6 bg-primary rounded-full shadow-lg shadow-primary/30 border-4 border-background animate-bounce"></div>
                                    <p className="absolute -top-12 glass px-3 py-1 text-[10px] font-black uppercase tracking-widest text-foreground">Sede Luanda (200m)</p>
                              </div>
                        </div>

                        {/* List of Perimeters */}
                        <div className="space-y-6">
                              <h2 className="text-xl font-black tracking-tight flex items-center gap-3">
                                    <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                                    Locais Ativos
                              </h2>
                              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                    {perimeters.map((p, i) => (
                                          <div key={p.id}
                                                className={`glass p-6 rounded-3xl transition-all hover:scale-[1.02] border animate-in fade-in slide-in-from-right duration-700 ${p.status === 'Active' ? 'border-primary/20 bg-primary/5' : 'border-border/5 bg-background/10 grayscale'
                                                      }`}
                                                style={{ animationDelay: `${i * 150}ms` }}
                                          >
                                                <div className="flex justify-between items-start mb-4">
                                                      <div>
                                                            <p className="font-black text-lg tracking-tight">{p.name}</p>
                                                            <p className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-2 mt-1">
                                                                  <span>📍</span> {p.lat}, {p.lng}
                                                            </p>
                                                      </div>
                                                      <span className={`text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-wider ${p.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-500'
                                                            }`}>
                                                            {p.status}
                                                      </span>
                                                </div>

                                                <div className="mt-8 flex justify-between items-center border-t border-border/5 pt-4">
                                                      <div className="flex flex-col">
                                                            <span className="text-[10px] text-accent font-black uppercase tracking-[0.2em] mb-1">Raio de Validação</span>
                                                            <span className="text-sm font-black text-foreground">{p.radius} metros</span>
                                                      </div>
                                                      <div className="flex gap-2">
                                                            <button className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all text-sm">✏️</button>
                                                            <button className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-red-500/20 text-red-400 transition-all text-sm">🗑️</button>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </div>

                              <div className="p-8 glass rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/10">
                                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-3">Dica de Configuração</p>
                                    <p className="text-xs font-bold leading-relaxed text-foreground opacity-90">Aumentar o raio de 100m para 200m ajuda a evitar falhas de GPS em edifícios com muitas interferências metálicas.</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
