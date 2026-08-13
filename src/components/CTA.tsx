export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-surface px-6 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--gold)_0%,_transparent_60%)] opacity-[0.08]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          Ready to Verify Your Professional Identity?
        </h2>
        <p className="mb-8 text-lg text-muted">
          Join the network of verified automotive professionals. Mint your
          Soulbound Token and take your reputation on-chain.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-gold-light"
          >
            Mint Your Credential
          </a>
          <a
            href="#"
            className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold/50 hover:text-gold"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
