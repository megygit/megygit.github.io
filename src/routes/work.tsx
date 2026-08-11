import { createFileRoute, Link } from "@tanstack/react-router";
import {
  currentEngagements,
  formerRoles,
  education,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Meg Yates" },
      {
        name: "description",
        content:
          "Current and former engagements, experience and recognition for economist and policy analyst Meg Yates.",
      },
      { property: "og:title", content: "Work — Meg Yates" },
      {
        property: "og:description",
        content:
          "Current and former engagements, experience and recognition for economist and policy analyst Meg Yates.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="container-editorial py-16 md:py-24">
          <p className="eyebrow">Work</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">
            Current &{" "}
            <span className="italic text-accent">former engagements</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            From leading EU-wide public health evaluation to ministerial policy
            advisory in Australian government — a record of economic analysis
            that has shaped decisions at state, national and international
            level.
          </p>
        </div>
      </section>

      {/* Current engagements */}
      <section className="border-b border-border">
        <div className="container-editorial py-16">
          <p className="eyebrow">Current</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {currentEngagements.map((p) => (
              <article
                key={p.title}
                className="flex flex-col border border-border bg-card p-8 transition-colors hover:bg-accent/10"
              >
                <div className="flex items-baseline justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                  <span>{p.client}</span>
                  <span className="whitespace-nowrap">{p.year}</span>
                </div>
                <h2 className="mt-4 font-serif text-3xl leading-tight">
                  {p.title}
                </h2>
                <p className="mt-4 text-muted-foreground">{p.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-border px-2 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Former engagements */}
      <section className="border-b border-border">
        <div className="container-editorial py-16">
          <p className="eyebrow">Former</p>
          <ol className="mt-8">
            {formerRoles.map((e, i) => (
              <li
                key={e.role + e.org}
                className="grid gap-4 border-t border-border py-10 md:grid-cols-[220px_1fr]"
                style={
                  i === formerRoles.length - 1
                    ? { borderBottom: "1px solid var(--rule)" }
                    : {}
                }
              >
                <div>
                  <div className="text-sm text-muted-foreground">{e.period}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {e.location}
                  </div>
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl">{e.role}</h2>
                  <p className="mt-1 text-muted-foreground">{e.org}</p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Education */}
      <section className="border-b border-border">
        <div className="container-editorial py-16">
          <p className="eyebrow">Education</p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {education.map((ed) => (
              <li
                key={ed.degree}
                className="grid gap-2 py-6 md:grid-cols-[220px_1fr]"
              >
                <div className="text-sm text-muted-foreground">{ed.year}</div>
                <div>
                  <div className="font-serif text-xl">{ed.degree}</div>
                  <div className="mt-1 text-muted-foreground">
                    {ed.institution}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{ed.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container-editorial py-16">
          <div className="mt-16 border border-border bg-card p-10 text-center">
            <p className="eyebrow text-accent">Consulting</p>
            <h3 className="mt-3 font-serif text-3xl">Working with me</h3>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-accent"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
