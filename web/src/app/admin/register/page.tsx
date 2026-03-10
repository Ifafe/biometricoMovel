"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminRegister() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [fullName, setFullName] = useState("");
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);
      const router = useRouter();

      const handleRegister = async (e: React.FormEvent) => {
            e.preventDefault();
            setLoading(true);
            setError(null);

            const { data, error: signUpError } = await supabase.auth.signUp({
                  email,
                  password,
                  options: {
                        data: {
                              full_name: fullName,
                        },
                  },
            });

            if (signUpError) {
                  setError(signUpError.message);
                  setLoading(false);
            } else {
                  // O perfil será criado automaticamente pelo TRIGGER que adicionei ao banco de dados.
                  router.push("/admin/login?msg=Verifique o seu email para ativar a conta");
            }
      };

      return (
            <div className="min-h-screen flex items-center justify-center p-4">
                  <div className="glass w-full max-w-md p-8 shadow-2xl animate-in fade-in zoom-in duration-500">
                        <div className="text-center mb-10">
                              <h1 className="text-3xl font-extrabold gradient-text tracking-tight">Solicitar Acesso</h1>
                              <p className="text-muted-foreground mt-2 text-sm font-medium">Crie a sua conta de administrador</p>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-5">
                              <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-accent ml-1">Nome Completo</label>
                                    <input
                                          type="text"
                                          placeholder="Ex: João Bento"
                                          className="input-premium block"
                                          value={fullName}
                                          onChange={(e) => setFullName(e.target.value)}
                                          required
                                    />
                              </div>

                              <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-accent ml-1">Email Profissional</label>
                                    <input
                                          type="email"
                                          placeholder="exemplo@empresa.com"
                                          className="input-premium block"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          required
                                    />
                              </div>

                              <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-accent ml-1 font-sans">Palavra-passe</label>
                                    <input
                                          type="password"
                                          placeholder="••••••••"
                                          className="input-premium block"
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                          required
                                    />
                              </div>

                              {error && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                                          <p className="text-xs text-red-400 font-bold text-center italic">{error}</p>
                                    </div>
                              )}

                              <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-premium w-full text-sm py-3.5 mt-4"
                              >
                                    {loading ? "A processar..." : "Criar Conta Admin"}
                              </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-border/10 text-center">
                              <p className="text-xs text-muted-foreground">Já tem acesso? <Link href="/admin/login" className="text-accent hover:underline font-bold">Entrar Agora</Link></p>
                        </div>
                  </div>
            </div>
      );
}
