import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import podium from "@/assets/meg-podium.jpg.asset.json";
import portrait2 from "@/assets/meg-2.jpg.asset.json";
import { publications, speaking } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meg Yates — Economist & Policy Analyst, Berlin" },
      {
        name: "description",
        content:
          "Meg Yates — public sector economist working across health economics, employment, social policy and evaluation. Australia · Germany · EU.",
      },
      { property: "og:title", content: "Meg Yates — Economist & Policy Analyst, Berlin" },
      {
        property: "og:description",
        content:
          "Economist and policy analyst across Australian government, German federal institutions and EU multilateral programmes.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: podium.url },
      { name: "twitter:image", content: podium.url },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = publications.slice(0, 3);
  const recentSpeaking = speaking.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-editorial grid gap-10 py-16 md:grid-cols-[1.2fr_1fr] md:items-end md:py-24">
          <div className="fade-up">
            <p className="eyebrow">
              Health Economics · Labour Market Policy · Evaluation · Berlin
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl">
              Rigorous economics,{" "}
              <span className="italic text-accent">
                translated into policy
              </span>
              .
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              I'm Meg, an economist and policy analyst based in Berlin. I
              work across public health, employment, social inclusion and
              evaluation, currently leading evaluation of a €95M EU Joint
              Action across 27 countries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-accent"
              >
                View my work <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-foreground px-5 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div className="relative fade-up">
            <img
              src={podium.url}
              alt="Meg Yates presenting at the EU Joint Action Prevent NCD General Assembly"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="mt-3 flex justify-between text-xs text-muted-foreground">
              <span>EU Joint Action Prevent NCD — General Assembly</span>
              <span>2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section className="border-b border-border">
        <div className="container-editorial grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {[
            ["1B+", "Public investment assessed"],
            ["€95M", "EU programme evaluated"],
            ["100+", "Cost-benefit analyses quality-assured"],
            ["3", "Regions · Australia · Europe · Asia-Pacific"],
          ].map(([n, l]) => (
            <div key={l} className="px-2 py-8 md:px-8">
              <div className="font-serif text-4xl text-accent md:text-5xl">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-b border-border">
        <div className="container-editorial grid gap-12 py-20 md:grid-cols-[1fr_1.4fr]">
          <div>
            <img
              src={portrait2.url}
              alt="Portrait of Meg Yates"
              width={1000}
              height={1200}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Economics that listens.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                I came to believe early in my career that numbers alone are not
                enough. Understanding what drives outcomes for communities,
                workers and people navigating complex systems requires
                listening as much as analysing. That conviction has shaped
                everything I have worked on, from public health economics in
                Australia and Germany to Indigenous economic participation and
                EU-wide programme evaluation.
              </p>
              <p>
                I currently lead evaluation of the €95M EU Joint Action Prevent
                NCD at the Robert Koch Institute in Berlin, working across 27
                countries and 100 institutions including WHO, the EU Commission
                and national health ministries. I also represent Germany in the
                OECD Expert Group on Public Health Economics. Previously at NSW
                Treasury, I led policy work across health, housing,
                productivity and First Nations economic participation, and
                developed a cost-benefit methodology now used as the NSW
                Government's evidence standard.
              </p>
              <p>
                I hold a Master of Economics with Distinction from the
                University of Sydney and a Bachelor of Commerce and
                International Studies with Distinction from UNSW. Native
                English speaker with professional German fluency, developing
                French.
              </p>
            </div>
            <Link
              to="/work"
              className="mt-8 inline-flex items-center gap-2 text-sm text-accent underline underline-offset-4"
            >
              View experience <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section className="border-b border-border">
        <div className="container-editorial py-20">
          <div className="border border-border bg-card p-8 md:p-12">
            <p className="eyebrow text-accent">Consulting</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Working with me
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              I take on a small number of consulting engagements each year in
              three areas:
            </p>
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li>— Economic evaluation design and implementation</li>
              <li>— Cost-benefit analysis and investment appraisal</li>
              <li>
                — Policy guideline development to economic evidence standards
              </li>
            </ul>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              If you're working on a programme that needs rigorous economic
              assessment, get in touch.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-accent"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Featured publications */}
      <section className="border-b border-border">
        <div className="container-editorial py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Publication library
              </h2>
            </div>
            <Link to="/publications" className="whitespace-nowrap text-sm text-accent underline underline-offset-4">
              All publications →
            </Link>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target={p.href === "#" ? undefined : "_blank"}
                rel={p.href === "#" ? undefined : "noopener noreferrer"}
                className="group block"
              >
                <div className="overflow-hidden border border-border bg-card transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.35)]">
                  <img
                    src={p.cover}
                    alt={`Cover of ${p.title}`}
                    width={800}
                    height={1040}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                  <span>{p.type}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="mt-2 font-serif text-xl leading-snug group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.publisher}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking preview */}
      <section>
        <div className="container-editorial py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">On stage</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Selected engagements
              </h2>
            </div>
            <Link to="/speaking" className="whitespace-nowrap text-sm text-accent underline underline-offset-4">
              All talks →
            </Link>
          </div>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {recentSpeaking.map((s) => (
              <li key={s.event + s.year} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-5">
                <span className="font-serif text-xl text-muted-foreground">
                  {s.yearLabel ?? s.year}
                </span>
                <div>
                  <div className="font-serif text-lg">{s.event}</div>
                  <div className="text-sm text-muted-foreground">{s.role}</div>
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{s.location}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
