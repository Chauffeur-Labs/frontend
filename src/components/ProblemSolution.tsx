import { PROBLEM, SOLUTION } from "@/lib/constants";

export default function ProblemSolution() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <div>
          <h2 className="mb-8 text-3xl font-bold text-foreground">
            {PROBLEM.title}
          </h2>
          <div className="flex flex-col gap-6">
            {PROBLEM.points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-3xl font-bold text-gold">
            {SOLUTION.title}
          </h2>
          <div className="flex flex-col gap-6">
            {SOLUTION.points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
