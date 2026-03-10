import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full -z-10"></div>

      <div className="glass max-w-2xl p-12 rounded-[40px] shadow-2xl animate-in fade-in zoom-in duration-1000">
        <div className="mb-8 inline-block p-5 rounded-3xl bg-primary/10 border border-primary/20 scale-110">
          <span className="text-5xl">🛡️</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black tracking-tighter gradient-text mb-6">
          Bio-Kwenda
        </h1>

        <p className="text-xl text-accent font-medium max-w-md mx-auto leading-relaxed mb-12">
          Sistema inteligente de gestão de presença com geofencing e autenticação biométrica avançada.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/admin/login"
            className="btn-premium px-10 py-5 text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 min-w-[240px]"
          >
            Painel Administrativo
          </Link>

          <Link
            href="/admin/register"
            className="glass px-10 py-5 text-sm font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all border border-white/10 min-w-[240px]"
          >
            Criar Nova Conta
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-[10px] text-accent font-black uppercase tracking-[0.3em]">Cloud Powered • Biometric Secured • v1.0</p>
        </div>
      </div>
    </div>
  );
}
