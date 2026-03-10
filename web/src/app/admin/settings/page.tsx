"use client";

import React from "react";

export default function SystemSettings() {
      return (
            <div className="space-y-8 max-w-4xl">
                  <div>
                        <h1 className="text-3xl font-bold">Configurações do Sistema</h1>
                        <p className="text-[#778da9] mt-2">Ajuste os parâmetros globais da plataforma biométrica.</p>
                  </div>

                  <div className="space-y-6">
                        {/* Security Section */}
                        <section className="bg-[#1b263b] p-6 rounded-xl border border-[#415a76]">
                              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span>🛡️</span> Segurança e Autenticação
                              </h2>
                              <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-[#0d1b2a] rounded-lg">
                                          <div>
                                                <p className="font-semibold text-[#e0e1dd]">Exigir Biometria em todos os acessos</p>
                                                <p className="text-xs text-[#778da9]">Força o uso de FaceID/TouchID para qualquer operação.</p>
                                          </div>
                                          <div className="w-12 h-6 bg-[#415a76] rounded-full relative">
                                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                          </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-[#0d1b2a] rounded-lg">
                                          <div>
                                                <p className="font-semibold text-[#e0e1dd]">Validação de GPS em Segundo Plano</p>
                                                <p className="text-xs text-[#778da9]">Monitoriza a localização mesmo com a app fechada.</p>
                                          </div>
                                          <div className="w-12 h-6 bg-[#415a76] rounded-full relative">
                                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* Global Rules Section */}
                        <section className="bg-[#1b263b] p-6 rounded-xl border border-[#415a76]">
                              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span>⚙️</span> Regras de Negócio
                              </h2>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                          <label className="text-sm font-medium text-[#778da9]">Tolerância de Atraso (min)</label>
                                          <input type="number" defaultValue="15" className="w-full bg-[#0d1b2a] border border-[#415a76] rounded-lg px-4 py-2" />
                                    </div>
                                    <div className="space-y-2">
                                          <label className="text-sm font-medium text-[#778da9]">Tempo Máximo de Sessão (h)</label>
                                          <input type="number" defaultValue="24" className="w-full bg-[#0d1b2a] border border-[#415a76] rounded-lg px-4 py-2" />
                                    </div>
                              </div>
                        </section>

                        <div className="flex justify-end gap-3">
                              <button className="px-6 py-2 rounded-lg border border-[#415a76] text-[#778da9] font-bold">Cancelar</button>
                              <button className="px-6 py-2 rounded-lg bg-[#415a76] text-white font-bold">Guardar Alterações</button>
                        </div>
                  </div>
            </div>
      );
}
