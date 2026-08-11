import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { publications, writing } from "@/lib/portfolio-data";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publication Library — Meg Yates" },
      {
        name: "description",
        content:
          "Research, policy papers, evaluations and commentary by economist Meg Yates — spanning public health, cost-benefit analysis, First Nations economic policy and housing.",
      },
      { property: "og:title", content: "Publication Library — Meg Yates" },
      {
        property: "og:description",
        content:
          "Research, policy papers, evaluations and commentary by economist Meg Yates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/publications" }],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  const types = useMemo(
    () => ["All", ...Array.from(new Set(publications.map((p) => p.type)))],
    []
  );
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All"
    ? publications
    : publications.filter((p) => p.type === filter);

  return (
    <div>
      <section className="border-b border-border">
        <div className="container-editorial py-16 md:py-24">
          <p className="eyebrow">Publications</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">
            Reports, papers &{" "}
            <span className="italic text-accent">briefs</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Economic research and policy analysis I've authored or contributed
            to. Publications span EU programme evaluation, cost-benefit
            methodology, public health economics, First Nations economic policy
            and housing. Click any item to open the full document.
          </p>

          {/* Filter chips */}
          <div className="mt-10 flex flex-wrap gap-2">
            {types.map((t) => {
              const active = t === filter;
              return (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={
                    "rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition-all " +
                    (active
                      ? "border-transparent bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground")
                  }
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-editorial py-16">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const isForthcoming = p.href === "#";
              return (
                <a
                  key={p.title}
                  href={p.href}
                  target={isForthcoming ? undefined : "_blank"}
                  rel={isForthcoming ? undefined : "noopener noreferrer"}
                  aria-disabled={isForthcoming || undefined}
                  onClick={(e) => isForthcoming && e.preventDefault()}
                  className="group block"
                >
                  <div className="relative overflow-hidden border border-border bg-card shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_28px_60px_-20px_rgba(0,0,0,0.35)]">
                    <img
                      src={p.cover}
                      alt={`Cover of ${p.title}`}
                      width={800}
                      height={1040}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    {isForthcoming ? (
                      <span className="absolute left-3 top-3 bg-accent-soft px-2 py-1 text-[10px] uppercase tracking-widest text-accent">
                        In review
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                    <span>{p.type}</span>
                    <span className="h-px w-4 bg-border" />
                    <span>{p.year}</span>
                  </div>
                  <h2 className="mt-2 font-serif text-2xl leading-snug line-clamp-3 group-hover:text-accent transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {p.publisher}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent">
                    {isForthcoming ? "Forthcoming" : "Read"}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Writing & commentary */}
      <section>
        <div className="container-editorial py-16">
          <p className="eyebrow">Commentary</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Writing & press
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Shorter pieces and public commentary on gender equity, indigenous
            rights and economic inclusion.
          </p>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {writing.map((w) => (
              <li key={w.title}>
                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-3 py-6 md:grid-cols-[120px_1fr_auto] md:items-baseline"
                >
                  <span className="font-serif text-xl text-muted-foreground">
                    {w.year}
                  </span>
                  <div>
                    <div className="font-serif text-xl transition-colors group-hover:text-accent">
                      {w.title}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {w.publisher}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {w.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
