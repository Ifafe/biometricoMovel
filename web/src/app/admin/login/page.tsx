"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);
      const router = useRouter();

      const handleLogin = async (e: React.FormEvent) => {
            e.preventDefault();
            setLoading(true);
            setError(null);

            const { error } = await supabase.auth.signInWithPassword({
                  email,
                  password,
            });

            if (error) {
                  setError(error.message);
                  setLoading(false);
            } else {
                  router.push("/admin/dashboard");
            }
      };

      return (
            <div className="min-h-screen flex items-center justify-center p-4">
                  <div className="glass w-full max-w-md p-8 shadow-2xl animate-in fade-in zoom-in duration-500">
                        <div className="text-center mb-10">
                              <div className="inline-block p-3 rounded-2xl bg-primary/10 mb-4 border border-primary/20">
                                    <span className="text-3xl">🛡️</span>
                              </div>
                              <h1 className="text-3xl font-extrabold gradient-text tracking-tight">Bio-Kwenda</h1>
                              <p className="text-muted-foreground mt-2 text-sm font-medium">Gestão Administrativa & HR</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
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
                                    <div className="flex justify-between items-center ml-1">
                                          <label className="text-xs font-bold uppercase tracking-wider text-accent font-sans">Palavra-passe</label>
                                          <button type="button" className="text-[10px] text-accent hover:text-foreground transition-colors font-bold uppercase">Esqueceu-se?</button>
                                    </div>
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
                                    <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg animate-in slide-in-from-top-2">
                                          <p className="text-xs text-destructive font-bold text-center italic">{error}</p>
                                    </div>
                              )}

                              <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-premium w-full text-sm py-3.5"
                              >
                                    {loading ? "A Autenticar..." : "Entrar no Painel"}
                              </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-border/10 text-center">
                              <p className="text-xs text-muted-foreground">Não tem acesso? <Link href="/admin/register" className="text-accent hover:underline font-bold">Solicitar Registo</Link></p>
                        </div>
                  </div>
            </div>
      );
}
