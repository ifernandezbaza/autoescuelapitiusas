import { useEffect, useState } from "react";
import { openState, type OpenState } from "@/lib/school";

export function OpenPill() {
  const [state, setState] = useState<OpenState | null>(null);

  useEffect(() => {
    const tick = () => setState(openState(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="inline-flex items-center gap-2 text-sm font-medium">
      <span
        className={`size-2.5 rounded-full ${state?.open ? "bg-ink" : "bg-ink/25"}`}
        aria-hidden
      />
      <span>{state ? state.detail : "Consultando horario de Eivissa…"}</span>
    </p>
  );
}
