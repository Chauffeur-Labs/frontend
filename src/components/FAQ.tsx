"use client";

import { useState } from "react";
import { FAQ as FAQ_DATA } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-xl text-muted">
            Everything you need to know about on-chain credentials.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_DATA.map((item, i) => (
            <div
              key={item.question}
              className="rounded-xl border border-border bg-surface"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 text-sm font-medium text-foreground">
                  {item.question}
                </span>
                <svg
                  className={`h-4 w-4 shrink-0 text-muted transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
