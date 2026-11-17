import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Shell } from "@/components/shell";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <Link to="/" className="inline-flex h-11 items-center gap-2 text-sm font-semibold">
          <ArrowLeft className="size-4" aria-hidden />
          Volver
        </Link>
        <p className="mt-8 text-xs font-semibold tracking-widest text-mute uppercase">Legal</p>
        <h1 className="mt-3 font-display text-5xl leading-none font-extrabold tracking-tight">{title}</h1>
        <div className="legal-copy mt-10 space-y-10">{children}</div>
      </article>
    </Shell>
  );
}
