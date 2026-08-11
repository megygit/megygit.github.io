import { createFileRoute, Link } from "@tanstack/react-router";
import podium from "@/assets/meg-podium.jpg.asset.json";
import panelPhoto from "@/assets/meg-panel.jpg.asset.json";
import gallery1 from "@/assets/meg-1.jpg.asset.json";
import gallery2 from "@/assets/meg-2.jpg.asset.json";
import { speaking } from "@/lib/portfolio-data";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Speaking — Meg Yates" },
      {
        name: "description",
        content:
          "Conference presentations, delegations and invited talks by economist Meg Yates — in English and German.",
      },
      { property: "og:title", content: "Speaking — Meg Yates" },
      {
        property: "og:description",
        content:
          "Conference presentations, delegations and invited talks — in English and German.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: podium.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: podium.url },
    ],
    links: [{ rel: "canonical", href: "/speaking" }],
  }),
  component: SpeakingPage,
});

function SpeakingPage() {
  const byYear = speaking.reduce<Record<number, typeof speaking>>((acc, s) => {
    (acc[s.year] ??= []).push(s);
    return acc;
  }, {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  return (
    <div>
      <section className="border-b border-border">
        <div className="container-editorial py-16 md:py-24">
          <p className="eyebrow">Speaking</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">
            Delegations, panels &{" "}
            <span className="italic text-accent">presentations</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            I present on public health economics, cost-benefit analysis, First
            Nations economic policy and EU programme evaluation — in English
            and German. Available for conference presentations, expert panels
            and policy briefings.
          </p>
        </div>
      </section>

      {/* UN CSW68 — featured */}
      <section className="border-b border-border bg-card">
        <div className="container-editorial grid gap-10 py-16 md:grid-cols-[1fr_1fr] md:items-center">
          <img
            src={panelPhoto.url}
            alt="Meg Yates at an international policy conference"
            width={1600}
            height={1200}
            className="aspect-[4/5] w-full object-cover"
          />
          <div>
            <p className="eyebrow text-accent">Featured — 2024</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Australian Youth Delegate & Policy Fellow
            </h2>
            <p className="mt-4 font-serif text-xl text-muted-foreground">
              UN Commission on the Status of Women (CSW68) · New York · 2024
            </p>
            <p className="mt-6 text-muted-foreground">
              Selected to represent Australia at the UN's principal global
              intergovernmental body on gender equality — in recognition of
              work on First Nations women's economic development, including a
              six-month national review engaging 200+ women with
              recommendations now reflected in state policy.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-b border-border">
        <div className="container-editorial py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <figure>
              <img
                src={gallery1.url}
                alt="Meg Yates at a professional engagement"
                width={1600}
                height={1200}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="mt-3 flex justify-between text-xs text-muted-foreground">
                <span>Professional engagement</span>
                <span>2025</span>
              </figcaption>
            </figure>
            <figure>
              <img
                src={gallery2.url}
                alt="Meg Yates at a professional engagement"
                width={1600}
                height={1200}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="mt-3 flex justify-between text-xs text-muted-foreground">
                <span>Professional engagement</span>
                <span>2025</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-border">
        <div className="container-editorial py-16">
          <p className="eyebrow">Selected engagements</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Where I've presented
          </h2>

          <div className="mt-10 space-y-14">
            {years.map((year) => (
              <div key={year} className="grid gap-6 md:grid-cols-[120px_1fr]">
                <div className="font-serif text-4xl text-accent">{year}</div>
                <ul className="divide-y divide-border border-y border-border">
                  {byYear[year].map((s) => (
                    <li key={s.event + s.role} className="grid grid-cols-[1fr_auto] items-baseline gap-4 py-5">
                      <div>
                        <div className="font-serif text-xl">{s.event}</div>
                        <div className="text-sm text-muted-foreground">{s.role}</div>
                        <div className="mt-1 text-sm text-muted-foreground">{s.topic}</div>
                      </div>
                      <div className="text-right text-xs uppercase tracking-widest text-muted-foreground">
                        <div>{s.location}</div>
                        {s.yearLabel ? <div className="mt-1">{s.yearLabel}</div> : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available for */}
      <section>
        <div className="container-editorial py-16">
          <p className="eyebrow">Available for</p>
          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li>— Conference presentations (English or German)</li>
            <li>— Expert panel participation</li>
            <li>— Policy briefings for ministerial or executive audiences</li>
            <li>
              — Workshop facilitation on evaluation and cost-benefit methodology
            </li>
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-accent"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
