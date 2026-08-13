import { PROTOCOL_LAYERS } from "@/lib/constants";

export default function ProtocolArchitecture() {
  return (
    <section className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Protocol Architecture
          </h2>
          <p className="mx-auto max-w-xl text-muted">
            Three layers that separate identity, verification, and data storage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PROTOCOL_LAYERS.map((layer, i) => (
            <div
              key={layer.layer}
              className="relative rounded-2xl border border-border bg-surface-light p-8"
            >
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-wider text-gold">
                Layer {i + 1}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {layer.layer}
              </h3>
              <p className="mb-6 text-sm text-muted">{layer.description}</p>
              <ul className="flex flex-col gap-2">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
