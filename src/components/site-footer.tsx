import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-editorial grid gap-8 py-12 md:grid-cols-[1fr_auto]">
        <div className="max-w-md">
          <p className="font-serif text-2xl">Meg Yates</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Economist and policy analyst based in Berlin. Working across public
            health economics, labour market policy, social inclusion and
            evaluation.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <Link to="/work" className="hover:underline">Work</Link>
          <Link to="/publications" className="hover:underline">Publications</Link>
          <Link to="/speaking" className="hover:underline">Speaking</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-editorial flex flex-col justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Meg Yates. All rights reserved.</span>
          <span>Berlin · 2026</span>
        </div>
      </div>
    </footer>
  );
}
