import { FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xl font-bold text-gold">C</span>
            <span className="text-lg font-semibold text-foreground">
              Chauffeur Labs
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted">
            {FOOTER.tagline}
          </p>
        </div>

        {FOOTER.columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border pt-8 text-center">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Chauffeur Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
