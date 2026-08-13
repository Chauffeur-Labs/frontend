import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-xl text-muted">
            Three steps from verified professional to on-chain credential.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {HOW_IT_WORKS.map((item) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-border bg-surface-light p-8"
            >
              <span className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-lg font-bold text-gold">
                {item.step}
              </span>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              {item.step < 3 && (
                <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-border md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
