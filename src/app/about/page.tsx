import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Chauffeur Labs",
  description:
    "Building trust infrastructure for the automotive service industry through on-chain credentials.",
};

const VALUES = [
  {
    title: "Trust Without Borders",
    description:
      "A driver's reputation should follow them everywhere. We're building portable, verifiable credentials that work across cities, employers, and venues — no friction, no paperwork.",
  },
  {
    title: "Privacy by Default",
    description:
      "On-chain doesn't mean public. Only cryptographic proofs go on the ledger. Personal data stays encrypted, off-chain, and under the credential holder's control.",
  },
  {
    title: "Instant Verification",
    description:
      "Days of phone calls and faxed documents should be a thing of the past. On-chain verification takes seconds, not days. Speed is a feature, not a luxury.",
  },
  {
    title: "Regulatory Ready",
    description:
      "We build for compliance from day one. License expiry tracking, automatic revocation, audit trails — everything regulators need, nothing they don't.",
  },
];

const TIMELINE = [
  {
    date: "Q1 2026",
    title: "Protocol Design",
    description:
      "Soulbound Token standard for automotive credentials. Smart contract architecture on Soroban. Attestation partner framework.",
  },
  {
    date: "Q2 2026",
    title: "Testnet Launch",
    description:
      "First credential minted on Stellar testnet. Fleet manager dashboard MVP. Venue verification portal.",
  },
  {
    date: "Q3 2026",
    title: "Pilot Program",
    description:
      "Partnerships with luxury fleet operators and hotel chains. 100+ drivers credentialed. Real-world verification flows.",
  },
  {
    date: "Q4 2026",
    title: "Mainnet & Scale",
    description:
      "Production deployment on Stellar mainnet. Cross-venue credential network. API access for third-party integrators.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold">
            About Chauffeur Labs
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Building Trust Infrastructure for Automotive Professionals
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
            We believe the people who drive, park, and maintain vehicles deserve
            a portable, tamper-proof professional identity. Chauffeur Labs is
            the protocol that makes it possible.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="mb-4 text-muted">
              Every day, millions of professional drivers and valet attendants
              handle vehicles worth tens of thousands of dollars. They pass
              background checks, maintain licenses, and build years of
              incident-free experience. But none of that is portable.
            </p>
            <p className="mb-4 text-muted">
              When a chauffeur switches employers, their reputation resets to
              zero. When a valet applies to a new hotel, the background check
              starts from scratch. The professional history they&apos;ve built
              over years exists only in filing cabinets and phone call
              references.
            </p>
            <p className="text-muted">
              Chauffeur Labs changes that. We put professional credentials
              on-chain as Soulbound Tokens — non-transferable, verifiable, and
              permanent. A driver&apos;s reputation follows them everywhere, and
              venues can verify it in seconds.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface-light p-8">
            <div className="flex flex-col gap-6">
              <div>
                <p className="mb-1 text-4xl font-bold text-gold">4M+</p>
                <p className="text-sm text-muted">
                  Professional drivers in the US alone
                </p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <p className="mb-1 text-4xl font-bold text-gold">72hrs</p>
                <p className="text-sm text-muted">
                  Average time to verify a new driver hire
                </p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <p className="mb-1 text-4xl font-bold text-gold">$2.1B</p>
                <p className="text-sm text-muted">
                  Annual cost of credential fraud in the industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-3xl font-bold text-foreground">
            What We Believe
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-surface p-8"
              >
                <h3 className="mb-3 text-lg font-semibold text-gold">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-surface px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-16 text-center text-3xl font-bold text-foreground">
            Roadmap
          </h2>
          <div className="flex flex-col gap-8">
            {TIMELINE.map((item, i) => (
              <div key={item.date} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-sm font-bold text-gold">
                    {i + 1}
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gold">
                    {item.date}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Join the Network
          </h2>
          <p className="mb-8 text-muted">
            Whether you&apos;re a driver looking to build your on-chain
            reputation, a venue wanting instant verification, or a fleet
            operator streamlining compliance — we&apos;re building this for you.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/#cta"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-gold-light"
            >
              Get Started
            </a>
            <a
              href="https://github.com/Chauffeur-Labs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
