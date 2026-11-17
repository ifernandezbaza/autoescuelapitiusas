import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/shell";
import { SCHOOL } from "@/lib/school";
import { PERMIT_OPTIONS, loadReservas, saveReservas, type Reserva } from "@/lib/reservas";

export const Route = createFileRoute("/reserva")({ component: ReservaPage });

type Draft = {
  name: string;
  phone: string;
  permit: string;
  slot: "Mañana" | "Tarde";
  note: string;
};

const EMPTY: Draft = {
  name: "",
  phone: "",
  permit: PERMIT_OPTIONS[0],
  slot: "Tarde",
  note: "",
};

function ReservaPage() {
  const [draft, setDraft] = useState<Draft>(EMPTY);
  const [items, setItems] = useState<Reserva[]>([]);
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    setItems(loadReservas());
    setReady(true);
  }, []);

  function update<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((prev) => ({ ...prev, [key]: value }));
    setJustSaved(false);
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const name = draft.name.trim();
    const phone = draft.phone.replace(/[^\d+]/g, "");
    const digits = phone.replace(/\D/g, "");
    if (name.length < 2) {
      setError("El nombre, aunque sea corto.");
      return;
    }
    if (digits.length < 9) {
      setError("El teléfono necesita 9 dígitos. Si no, no podemos devolverte la llamada.");
      return;
    }
    const next: Reserva = {
      id: crypto.randomUUID(),
      name,
      phone: digits,
      permit: draft.permit,
      slot: draft.slot,
      note: draft.note.trim(),
      createdAt: new Date().toISOString(),
    };
    const all = [next, ...loadReservas()];
    saveReservas(all);
    setItems(all);
    setDraft(EMPTY);
    setError("");
    setJustSaved(true);
  }

  function remove(id: string) {
    const all = loadReservas().filter((item) => item.id !== id);
    saveReservas(all);
    setItems(all);
  }

  return (
    <Shell>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.22em] text-mute uppercase">Reserva</p>
          <h1 className="mt-3 font-display text-5xl leading-[0.9] font-extrabold tracking-tight sm:text-6xl">
            Deja el teléfono. Te llaman del local.
          </h1>
          <p className="mt-4 text-ink/75">
            Esto se guarda solo en tu navegador: es un aviso para que no se te olvide lo que pediste, no un
            alta oficial. Para plaza de verdad, llama al {SCHOOL.phoneDisplay}.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-mute">Dirección</dt>
              <dd className="font-medium">
                {SCHOOL.street}, {SCHOOL.city}
              </dd>
            </div>
            <div>
              <dt className="text-mute">Mostrador</dt>
              <dd className="font-medium">L–V 9:30–13:30 y 16:00–21:30</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="rounded-lg border border-ink/10 bg-paper p-5 sm:p-7 lg:col-span-7" noValidate>
          <div className="grid gap-4">
            <Field label="Nombre" htmlFor="nombre">
              <input
                id="nombre"
                name="nombre"
                autoComplete="name"
                value={draft.name}
                onChange={(e) => update("name", e.target.value)}
                className="h-12 w-full rounded-md border border-ink/15 bg-bone px-3 outline-none focus:border-ink"
                placeholder="Cómo te llamamos"
              />
            </Field>
            <Field label="Teléfono" htmlFor="telefono">
              <input
                id="telefono"
                name="telefono"
                inputMode="tel"
                autoComplete="tel"
                value={draft.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="h-12 w-full rounded-md border border-ink/15 bg-bone px-3 outline-none focus:border-ink"
                placeholder="600 000 000"
              />
            </Field>
            <Field label="Permiso" htmlFor="permiso">
              <select
                id="permiso"
                name="permiso"
                value={draft.permit}
                onChange={(e) => update("permit", e.target.value)}
                className="h-12 w-full rounded-md border border-ink/15 bg-bone px-3 outline-none focus:border-ink"
              >
                {PERMIT_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </Field>
            <fieldset>
              <legend className="mb-2 text-sm font-medium">Franja que te va mejor</legend>
              <div className="grid grid-cols-2 gap-2">
                {(["Mañana", "Tarde"] as const).map((slot) => {
                  const on = draft.slot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => update("slot", slot)}
                      className={`flex min-h-14 flex-col items-center justify-center rounded-md border px-3 py-2 font-semibold ${
                        on ? "border-ink bg-ink text-bone" : "border-ink/15 bg-bone"
                      }`}
                      aria-pressed={on}
                    >
                      {slot}
                      <span className="mt-0 block text-xs font-medium opacity-70">
                        {slot === "Mañana" ? "9:30–13:30" : "16:00–21:30"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
            <Field label="Nota, si quieres" htmlFor="nota">
              <textarea
                id="nota"
                name="nota"
                rows={3}
                value={draft.note}
                onChange={(e) => update("note", e.target.value)}
                className="w-full rounded-md border border-ink/15 bg-bone px-3 py-3 outline-none focus:border-ink"
                placeholder="Horario de curro, si ya tienes teórica, si vienes de otra autoescuela…"
              />
            </Field>
          </div>
          {error ? (
            <p className="mt-4 text-sm font-medium" role="alert">
              {error}
            </p>
          ) : null}
          {justSaved ? (
            <p className="mt-4 rounded-md bg-acid px-3 py-3 text-sm font-medium" role="status">
              Apuntado en este dispositivo. Llama al {SCHOOL.phoneDisplay} si quieres cerrarlo hoy.
            </p>
          ) : null}
          <button type="submit" className="mt-6 h-12 w-full rounded-md bg-acid font-semibold text-ink sm:w-auto sm:px-8">
            Guardar solicitud
          </button>
        </form>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="font-display text-3xl font-extrabold tracking-tight">En este dispositivo</h2>
        {!ready ? (
          <p className="mt-3 text-sm text-mute">Cargando…</p>
        ) : items.length === 0 ? (
          <p className="mt-3 max-w-md text-sm text-mute">Todavía no hay ninguna solicitud guardada aquí.</p>
        ) : (
          <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-semibold">
                    {item.name} · {item.phone}
                  </p>
                  <p className="text-sm text-ink/75">
                    {item.permit} · {item.slot}
                    {item.note ? ` · ${item.note}` : ""}
                  </p>
                  <p className="mt-1 text-xs text-mute tabular-nums">
                    {new Date(item.createdAt).toLocaleString("es-ES", { dateStyle: "medium", timeStyle: "short" })}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => remove(item.id)}
                  className="h-11 self-start rounded-md border border-ink/15 px-4 text-sm font-semibold"
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Shell>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="grid gap-2 text-sm font-medium">
      {label}
      {children}
    </label>
  );
}
