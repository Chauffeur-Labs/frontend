import { HERO } from "@/lib/constants";

function CredentialCard() {
  return (
    <div className="relative mx-auto mt-12 w-full max-w-sm">
      <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-surface-light to-surface p-6 shadow-2xl shadow-gold/5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">
            Chauffeur SBT
          </span>
          <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-medium text-green-400">
            Active
          </span>
        </div>
        <div className="mb-4 h-px bg-border" />
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-xs text-muted">Holder</span>
            <span className="font-mono text-xs text-foreground">
              GDXK...7Q3M
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-muted">Credential</span>
            <span className="text-xs text-foreground">
              Class B Chauffeur
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-muted">Issued</span>
            <span className="text-xs text-foreground">Jan 15, 2026</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-muted">Trips Recorded</span>
            <span className="text-xs text-gold">1,247</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-muted">Endorsements</span>
            <span className="text-xs text-gold">3</span>
          </div>
        </div>
        <div className="mt-4 h-px bg-border" />
        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-gold" />
          <span className="text-[10px] text-muted">
            Verified on Stellar Soroban
          </span>
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4 -right-4 -top-4 rounded-3xl border border-gold/10" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold)_0%,_transparent_50%)] opacity-[0.07]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(212,168,83,0.04)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <span className="mb-6 inline-block animate-fade-in rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold">
          {HERO.badge}
        </span>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground animate-fade-in-up sm:text-5xl lg:text-6xl">
          {HERO.headline}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted animate-fade-in-up sm:text-xl" style={{ animationDelay: "0.15s" }}>
          {HERO.subheadline}
        </p>

        <div className="flex flex-col items-center gap-4 animate-fade-in-up sm:flex-row sm:justify-center" style={{ animationDelay: "0.3s" }}>
          <a
            href="#cta"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-gold-light"
          >
            {HERO.ctaPrimary}
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold/50 hover:text-gold"
          >
            {HERO.ctaSecondary}
          </a>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <CredentialCard />
        </div>
      </div>
    </section>
  );
}
