export default function TrustBar() {
  const partners = [
    "Luxury Fleet Co.",
    "Grand Hotel Group",
    "CityValet Services",
    "Executive Motors",
    "Premier Rides",
    "AutoTrust Alliance",
  ];

  return (
    <section className="border-y border-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-wider text-muted">
          Built for the automotive service industry
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((name) => (
            <span
              key={name}
              className="text-sm font-medium text-muted/50 transition-colors hover:text-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
