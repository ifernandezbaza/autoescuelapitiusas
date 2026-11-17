export const RESERVA_KEY = "pitiusas.reservas.v1";

export const PERMIT_OPTIONS = [
  "Permiso B · coche",
  "Moto · AM, A1 o A2",
  "Recuperación de puntos",
  "Otro / aún no lo sé",
] as const;

export type Reserva = {
  id: string;
  name: string;
  phone: string;
  permit: string;
  slot: "Mañana" | "Tarde";
  note: string;
  createdAt: string;
};

export function loadReservas(): Reserva[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RESERVA_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isReserva);
  } catch {
    return [];
  }
}

export function saveReservas(items: Reserva[]) {
  localStorage.setItem(RESERVA_KEY, JSON.stringify(items));
}

function isReserva(value: unknown): value is Reserva {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    typeof v.name === "string" &&
    typeof v.phone === "string" &&
    typeof v.permit === "string" &&
    (v.slot === "Mañana" || v.slot === "Tarde") &&
    typeof v.note === "string" &&
    typeof v.createdAt === "string"
  );
}
