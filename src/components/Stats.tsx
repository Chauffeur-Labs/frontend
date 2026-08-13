import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="border-y border-border bg-surface px-6 py-16">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="mb-1 text-3xl font-bold text-gold">{stat.value}</p>
            <p className="text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
