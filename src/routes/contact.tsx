import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Meg Yates" },
      { name: "description", content: "Get in touch with Meg Yates — economist and policy analyst based in Berlin." },
      { property: "og:title", content: "Contact — Meg Yates" },
      { property: "og:description", content: "Get in touch with Meg Yates — economist and policy analyst based in Berlin." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="container-editorial py-16 md:py-24">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">
            Let's talk.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            I'm open to conversations about research collaborations, consulting
            engagements, speaking invitations and roles in economic policy and
            evaluation. The best way to reach me is by email.
          </p>
        </div>
      </section>

      <section>
        <div className="container-editorial grid gap-12 py-16 md:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <a
              href="mailto:megyates03@outlook.com"
              className="group flex items-center justify-between border-b border-border py-6"
            >
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="mt-1 font-serif text-2xl group-hover:underline">
                    megyates03@outlook.com
                  </div>
                </div>
              </div>
              <span className="text-xl">→</span>
            </a>
            <a
              href="https://linkedin.com/in/megyates"
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center justify-between border-b border-border py-6"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="h-5 w-5" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</div>
                  <div className="mt-1 font-serif text-2xl group-hover:underline">
                    linkedin.com/in/megyates
                  </div>
                </div>
              </div>
              <span className="text-xl">→</span>
            </a>
          </div>

          <aside className="border border-border bg-card p-8">
            <p className="eyebrow">Based in</p>
            <p className="mt-3 font-serif text-3xl">Berlin, Germany</p>
            <p className="mt-2 text-sm text-muted-foreground">
              English (native) · German (professional fluency) · French
              (developing). Available for engagements across the EU and Australia.
            </p>

            <div className="mt-8 hairline pt-6">
              <p className="eyebrow">Currently</p>
              <p className="mt-3 text-muted-foreground">
                Leading evaluation of the €95M EU Joint Action Prevent NCD at
                the Robert Koch Institute, Berlin. Open to
                consulting engagements in economic evaluation, cost-benefit
                analysis and policy advisory.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
