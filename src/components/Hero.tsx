import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold)_0%,_transparent_50%)] opacity-[0.07]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="mb-6 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold">
          {HERO.badge}
        </span>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {HERO.headline}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {HERO.subheadline}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
      </div>
    </section>
  );
}
