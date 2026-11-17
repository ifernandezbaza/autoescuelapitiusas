import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SCHOOL } from "@/lib/school";

const NAV = [
  { to: "/", label: "Escuela", hash: "" },
  { to: "/test", label: "Test", hash: "" },
  { to: "/reserva", label: "Reserva", hash: "" },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-bone text-ink">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-bone/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
            <span className="grid size-3 place-items-center bg-acid" aria-hidden />
            PITIUSAS
          </Link>
          <nav className="hidden items-center gap-1 sm:flex" aria-label="Principal">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink/80 hover:bg-ink/5 hover:text-ink"
                activeOptions={{ exact: true }}
                activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium bg-ink text-bone" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${SCHOOL.phoneTel}`}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-ink px-3 text-sm font-semibold text-bone sm:px-4"
            >
              <Phone className="size-4" aria-hidden />
              <span className="hidden sm:inline">{SCHOOL.phoneDisplay}</span>
              <span className="sm:hidden">Llamar</span>
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-md border border-ink/15 sm:hidden"
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-30 flex flex-col bg-bone px-6 pt-24 sm:hidden">
          <nav className="flex flex-col gap-2" aria-label="Móvil">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-ink/10 py-4 font-display text-5xl font-extrabold tracking-tight"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-auto pb-10 text-sm text-mute">
            {SCHOOL.street}
            <br />
            {SCHOOL.city}
          </p>
        </div>
      ) : null}

      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bone">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">Pitiusas</p>
          <p className="mt-2 max-w-xs text-sm text-mute">
            {SCHOOL.tagline}. {SCHOOL.legal}.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-medium">Local</p>
          <p className="mt-2 text-mute">
            {SCHOOL.street}
            <br />
            {SCHOOL.city}, {SCHOOL.region}
          </p>
          <a className="mt-3 inline-flex underline decoration-ink/30 underline-offset-4" href={`tel:${SCHOOL.phoneTel}`}>
            {SCHOOL.phoneDisplay}
          </a>
        </div>
        <div className="text-sm">
          <p className="font-medium">Fuera</p>
          <ul className="mt-2 space-y-2 text-mute">
            <li>
              <a className="underline decoration-ink/30 underline-offset-4" href={SCHOOL.maps}>
                Cómo llegar
              </a>
            </li>
            <li>
              <a className="underline decoration-ink/30 underline-offset-4" href={SCHOOL.facebook}>
                Facebook
              </a>
            </li>
            <li>CIF {SCHOOL.cif}</li>
          </ul>
        </div>
      </div>
      <nav aria-label="Legal" className="mx-auto flex max-w-6xl flex-wrap gap-x-5 gap-y-2 px-5 pb-4">
        <Link to="/aviso-legal" className="inline-flex h-11 items-center text-xs font-semibold tracking-widest text-mute uppercase">
          Aviso legal
        </Link>
        <Link to="/politica-cookies" className="inline-flex h-11 items-center text-xs font-semibold tracking-widest text-mute uppercase">
          Cookies
        </Link>
        <Link to="/politica-privacidad" className="inline-flex h-11 items-center text-xs font-semibold tracking-widest text-mute uppercase">
          Privacidad
        </Link>
      </nav>
      <p className="mx-auto max-w-6xl px-5 pb-8 text-xs leading-relaxed text-mute">
        Horario, teléfono y dirección salen de la ficha pública de la autoescuela (Páginas Amarillas y Google).
        La valoración citada es la publicada en esas fichas. El precio no está en la web: se confirma al reservar.
      </p>
    </footer>
  );
}
