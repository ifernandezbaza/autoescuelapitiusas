export const SCHOOL = {
  name: "Autoescuela Pitiusas",
  legal: "Autoescuela Pitiusas, S.L.",
  cif: "B07253446",
  founded: 1987,
  tagline: "Más de 35 años formando a conductores en Ibiza",
  street: "Carrer d'Aragó, 82, bajo",
  city: "07800 Eivissa",
  region: "Illes Balears",
  phoneDisplay: "971 30 01 69",
  phoneTel: "+34971300169",
  facebook: "https://www.facebook.com/Autoescuela-Pitiusas-547195418626291",
  maps: "https://www.google.com/maps/dir/?api=1&destination=Carrer+d%27Arag%C3%B3+82,+07800+Eivissa",
  reviews: 34,
  lat: 38.9089,
  lon: 1.4304,
} as const;

export const WEEK = [
  { id: 1, label: "Lunes", closed: false },
  { id: 2, label: "Martes", closed: false },
  { id: 3, label: "Miércoles", closed: false },
  { id: 4, label: "Jueves", closed: false },
  { id: 5, label: "Viernes", closed: false },
  { id: 6, label: "Sábado", closed: true },
  { id: 0, label: "Domingo", closed: true },
] as const;

export const SLOTS = [
  { label: "Mañana", hours: "9:30 – 13:30" },
  { label: "Tarde", hours: "16:00 – 21:30" },
] as const;

const OPEN: Array<[number, number]> = [
  [9 * 60 + 30, 13 * 60 + 30],
  [16 * 60, 21 * 60 + 30],
];

export type OpenState = {
  open: boolean;
  detail: string;
};

export function madridNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekday = get("weekday");
  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const hour = Number(get("hour"));
  const minute = Number(get("minute"));
  return { weekday: map[weekday] ?? 0, minutes: hour * 60 + minute };
}

export function openState(date = new Date()): OpenState {
  const { weekday, minutes } = madridNow(date);
  if (weekday === 0 || weekday === 6) {
    return { open: false, detail: "Cerrado hoy. Volvemos el lunes a las 9:30." };
  }
  for (const [start, end] of OPEN) {
    if (minutes >= start && minutes < end) {
      const endH = String(Math.floor(end / 60)).padStart(2, "0");
      const endM = String(end % 60).padStart(2, "0");
      return { open: true, detail: `Abierto ahora. Hasta las ${endH}:${endM}.` };
    }
  }
  if (minutes < OPEN[0][0]) {
    return { open: false, detail: "Aún cerrado. Abrimos a las 9:30." };
  }
  if (minutes < OPEN[1][0]) {
    return { open: false, detail: "Pausa de mediodía. Volvemos a las 16:00." };
  }
  return { open: false, detail: "Cerrado por hoy. Mañana a las 9:30." };
}

export const PERMITS = [
  {
    code: "B",
    title: "Coche",
    text: "El permiso que casi todo el mundo viene a buscar. Teórica, prácticas en la calle y el día del examen.",
  },
  {
    code: "A",
    title: "Moto",
    text: "AM, A1 o A2. Circuito y calle. Dinos cuál te toca y armamos las prácticas a tu ritmo.",
  },
  {
    code: "P",
    title: "Puntos",
    text: "Curso de recuperación parcial. Charla seria, grupo pequeño, sin teatro.",
  },
  {
    code: "?",
    title: "Otro",
    text: "Remolque, duda rara, cambio de autoescuela. Lo hablamos por teléfono. Sin pack inventado.",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Reservas",
    text: "Llamas o dejas tus datos. Te decimos horario real y precio real. Aquí no hay tarifas de anuncio.",
  },
  {
    n: "02",
    title: "Teórica",
    text: "Clase en el local, tests y las trampas de siempre del examen. Puedes calentar con el test de esta web.",
  },
  {
    n: "03",
    title: "Calle",
    text: "Prácticas in situ, en el tráfico de Eivissa. No en un vídeo. En el coche, con alguien al lado.",
  },
  {
    n: "04",
    title: "Examen",
    text: "Cuando estás, vas. Si no estás, no te mandamos a quemar una convocatoria por quedar bien.",
  },
] as const;

export const FACTS = [
  "Carrer d'Aragó, 82",
  "07800 Eivissa",
  "971 30 01 69",
  "Lunes a viernes",
  "9:30–13:30",
  "16:00–21:30",
  "Acceso en silla de ruedas",
  "Clases in situ",
  "Desde 1987",
  "34 reseñas en Google",
] as const;
