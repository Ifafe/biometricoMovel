"use client";

import React from "react";
import { tokens } from "../../../../design_tokens";

export default function IconLibrary() {
      const categories = [
            { name: "Principais", icons: ["👥", "📊", "📍", "⏱️", "⚙️", "📅"] },
            { name: "Ações", icons: ["📥", "📤", "✏️", "🗑️", "🚪", "🔄", "💾"] },
            { name: "Estados", icons: ["✅", "⚠️", "❌", "⏳", "☁️", "🛡️"] },
      ];

      return (
            <div className="space-y-8">
                  <div>
                        <h1 className="text-3xl font-bold">Biblioteca de Ícones & Design</h1>
                        <p className="text-[#778da9] mt-2">Documentação dos ativos visuais e tokens de design do projeto.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Colors Palette */}
                        <div className="bg-[#1b263b] p-6 rounded-xl border border-[#415a76]">
                              <h2 className="text-xl font-bold mb-4">Paleta de Cores</h2>
                              <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(tokens.colors).map(([name, hex]) => (
                                          <div key={name} className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg shadow-inner" style={{ backgroundColor: hex }}></div>
                                                <div>
                                                      <p className="text-xs font-bold uppercase text-[#778da9]">{name}</p>
                                                      <p className="text-sm font-mono">{hex}</p>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>

                        {/* Icons Grid */}
                        <div className="bg-[#1b263b] p-6 rounded-xl border border-[#415a76]">
                              <h2 className="text-xl font-bold mb-4">Ícones de Interface (Unicode/SVG)</h2>
                              <div className="space-y-6">
                                    {categories.map(cat => (
                                          <div key={cat.name}>
                                                <p className="text-xs font-bold text-[#415a76] uppercase mb-2">{cat.name}</p>
                                                <div className="flex flex-wrap gap-4">
                                                      {cat.icons.map(icon => (
                                                            <div key={icon} className="w-12 h-12 bg-[#0d1b2a] rounded-lg flex items-center justify-center text-xl hover:bg-[#415a7622] transition-colors cursor-pointer">
                                                                  {icon}
                                                            </div>
                                                      ))}
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      );
}
