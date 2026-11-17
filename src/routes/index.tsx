import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { OpenPill } from "@/components/open-pill";
import { Shell } from "@/components/shell";
import { FACTS, PERMITS, SCHOOL, SLOTS, STEPS, WEEK, madridNow } from "@/lib/school";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Shell>
      <Hero />
      <Marquee />
      <Permits />
      <Method />
      <Visit />
      <TestBand />
      <Faq />
    </Shell>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 lg:grid-cols-12 lg:pt-20">
      <div className="lg:col-span-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-mute uppercase">
          Eivissa · desde {SCHOOL.founded}
        </p>
        <h1 className="mt-4 font-display text-7xl leading-[0.86] font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
          Sácatelo.
          <span className="block">En la isla.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
          Autoescuela en {SCHOOL.street}. Teórica, prácticas en la calle y el examen.
          {` ${SCHOOL.tagline}.`} Sin packs de catálogo ni precios inventados.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/reserva"
            className="inline-flex h-12 items-center justify-center rounded-md bg-acid px-6 font-semibold text-ink"
          >
            Pedir plaza
          </Link>
          <Link
            to="/test"
            className="inline-flex h-12 items-center justify-center rounded-md border border-ink/20 px-6 font-semibold"
          >
            Test de 8 preguntas
          </Link>
        </div>
      </div>
      <aside className="flex flex-col justify-end gap-6 lg:col-span-4">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10">
          <Stat k="Fundación" v="1987" />
          <Stat k="En la isla" v="+35" u="años" />
          <Stat k="Google" v={String(SCHOOL.reviews)} u="reseñas" />
          <Stat k="Clases" v="In situ" />
        </dl>
        <OpenPill />
      </aside>
    </section>
  );
}

function Stat({ k, v, u }: { k: string; v: string; u?: string }) {
  return (
    <div className="bg-paper px-4 py-5">
      <dt className="text-xs tracking-wide text-mute uppercase">{k}</dt>
      <dd className="mt-1 font-display text-4xl leading-none font-extrabold tracking-tight">
        {v}
        {u ? <span className="ml-1 font-sans text-sm font-medium text-mute">{u}</span> : null}
      </dd>
    </div>
  );
}

function Marquee() {
  const loop = [...FACTS, ...FACTS];
  return (
    <div className="border-y border-ink/10 bg-ink text-bone">
      <div className="overflow-hidden py-3">
        <div className="marquee-track flex w-max gap-8 pr-8">
          {loop.map((fact, i) => (
            <span key={`${fact}-${i}`} className="text-sm font-medium tracking-wide whitespace-nowrap">
              {fact}
              <span className="ml-8 text-acid" aria-hidden>
                /
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="hazard h-3" aria-hidden />
    </div>
  );
}

function Permits() {
  return (
    <section id="permisos" className="bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="max-w-xl font-display text-5xl leading-[0.9] font-extrabold tracking-tight sm:text-6xl">
            Dinos el permiso. No el pack.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-bone/70">
            La ficha pública no publica tarifas. Mejor: eliges, llamamos y te decimos qué incluye de verdad.
          </p>
        </div>
        <ul className="mt-12 grid gap-px bg-bone/15 sm:grid-cols-2">
          {PERMITS.map((item) => (
            <li key={item.code} className="bg-ink p-6 sm:p-8">
              <p className="font-display text-6xl leading-none font-extrabold text-acid">{item.code}</p>
              <h3 className="mt-4 text-2xl font-extrabold">{item.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-bone/70">{item.text}</p>
            </li>
          ))}
        </ul>
        <Link
          to="/reserva"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-acid px-5 font-semibold text-ink"
        >
          Reservar este permiso
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="text-xs font-semibold tracking-[0.22em] text-mute uppercase">Cómo va</p>
      <h2 className="mt-3 max-w-lg font-display text-5xl leading-[0.9] font-extrabold tracking-tight">
        Cuatro pasos. Cero milonga.
      </h2>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <li key={step.n} className="rounded-lg border border-ink/10 bg-paper p-5">
            <p className="font-display text-sm font-extrabold text-mute">{step.n}</p>
            <h3 className="mt-6 text-3xl font-extrabold tracking-tight">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Visit() {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => {
    setToday(madridNow().weekday);
  }, []);

  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${SCHOOL.lon - 0.012}%2C${SCHOOL.lat - 0.008}%2C${SCHOOL.lon + 0.012}%2C${SCHOOL.lat + 0.008}&layer=mapnik&marker=${SCHOOL.lat}%2C${SCHOOL.lon}`;

  return (
    <section id="horario" className="border-t border-ink/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-mute uppercase">Horario</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.9] font-extrabold tracking-tight">
            De lunes a viernes. El finde, playa.
          </h2>
          <div className="mt-4">
            <OpenPill />
          </div>
          <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {WEEK.map((day) => {
              const active = today === day.id;
              return (
                <li
                  key={day.label}
                  className={`flex items-center justify-between gap-4 py-3 text-sm ${active ? "font-semibold" : "text-ink/80"}`}
                >
                  <span className="flex items-center gap-2">
                    {active ? <span className="size-1.5 rounded-full bg-acid outline outline-ink" /> : null}
                    {day.label}
                  </span>
                  <span className="text-right tabular-nums">
                    {day.closed ? "Cerrado" : SLOTS.map((s) => s.hours).join("  ·  ")}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-xs text-mute">
            Horario publicado en Páginas Amarillas. Si vienes de fuera, llama antes: a veces el mostrador se
            mueve con los exámenes.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-mute uppercase">Cómo llegar</p>
          <h2 className="mt-3 font-display text-4xl leading-none font-extrabold tracking-tight">
            {SCHOOL.street}
          </h2>
          <p className="mt-2 text-ink/75">
            {SCHOOL.city}, {SCHOOL.region}. Entrada accesible en silla de ruedas.
          </p>
          <div className="mt-5 overflow-hidden rounded-lg border border-ink/10 bg-paper">
            <iframe
              title="Mapa de Autoescuela Pitiusas en Carrer d'Aragó, Eivissa"
              src={src}
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
          <a
            href={SCHOOL.maps}
            className="mt-4 inline-flex h-12 items-center gap-2 rounded-md bg-ink px-5 font-semibold text-bone"
          >
            Abrir ruta
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

function TestBand() {
  return (
    <section className="bg-acid text-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase">Calentamiento</p>
          <h2 className="mt-3 max-w-xl font-display text-5xl leading-[0.9] font-extrabold tracking-tight">
            Ocho preguntas. Si fallas, no pasa nada. Si las clavas, tampoco te hagas el listo.
          </h2>
        </div>
        <Link
          to="/test"
          className="inline-flex h-12 shrink-0 items-center rounded-md bg-ink px-6 font-semibold text-bone"
        >
          Empezar el test
        </Link>
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "¿Dónde estáis exactamente?",
    a: "Carrer d'Aragó, 82, bajo, 07800 Eivissa. En el centro de la ciudad, no en un polígono.",
  },
  {
    q: "¿A qué hora puedo pasar?",
    a: "Lunes a viernes de 9:30 a 13:30 y de 16:00 a 21:30. Sábado y domingo cerrado.",
  },
  {
    q: "¿Cuánto cuesta el carnet?",
    a: "No lo publicamos aquí a propósito. El precio depende de las prácticas que necesites. Lo damos por teléfono o en el local, cerrado, sin asteriscos.",
  },
  {
    q: "¿Se puede entrar con silla de ruedas?",
    a: "Sí. La ficha pública indica entrada accesible en silla de ruedas.",
  },
  {
    q: "¿Desde cuándo existís?",
    a: "La sociedad se constituyó en 1987. En Google lo resumen así: más de 35 años formando a conductores en Ibiza.",
  },
];

function Faq() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <h2 className="font-display text-5xl leading-[0.9] font-extrabold tracking-tight">Preguntas secas.</h2>
      <div className="mt-8 border-t border-ink/10">
        {FAQ.map((item) => (
          <details key={item.q} className="group border-b border-ink/10">
            <summary className="flex items-center justify-between gap-4 py-5 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              {item.q}
              <Plus className="size-5 shrink-0 group-open:hidden" aria-hidden />
              <Minus className="hidden size-5 shrink-0 group-open:block" aria-hidden />
            </summary>
            <p className="max-w-2xl pb-6 text-ink/75">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
