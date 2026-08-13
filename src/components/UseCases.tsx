import { USE_CASES } from "@/lib/constants";

const PERSONA_ICONS: Record<string, string> = {
  car: "M7 17m-2 0a2 2 0 104 0 2 2 0 10-4 0M17 17m-2 0a2 2 0 104 0 2 2 0 10-4 0M5 17H3v-4l2-5h9l4 5h1a2 2 0 012 2v3h-2M5 17h12M9 11h6",
  parking: "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm5 4v10m0-10H7a2 2 0 00-2 2v2a2 2 0 002 2h3",
  building: "M3 21h18M3 7v14M21 7v14M6 11h.01M6 15h.01M10 11h.01M10 15h.01M14 11h.01M14 15h.01M18 11h.01M18 15h.01M9 21V3h6v18",
};

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Who It&apos;s For
          </h2>
          <p className="mx-auto max-w-xl text-muted">
            Built for every professional in the automotive service chain.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.persona}
              className="rounded-2xl border border-border bg-surface-light p-8 transition-colors hover:border-gold/30"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                <svg
                  className="h-6 w-6 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={PERSONA_ICONS[useCase.icon]}
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {useCase.persona}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {useCase.description}
              </p>
              <p className="text-sm font-medium text-gold">{useCase.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
