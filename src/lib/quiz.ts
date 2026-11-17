export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  answer: number;
  why: string;
};

export const QUIZ: QuizQuestion[] = [
  {
    id: "poblado",
    prompt: "En poblado, sin otra señal, ¿a qué velocidad máxima puede ir un turismo?",
    options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
    answer: 2,
    why: "La genérica en poblado es 50 km/h. En muchas calles de Eivissa una señal marca menos, y esa manda.",
  },
  {
    id: "peaton",
    prompt: "Un peatón va a cruzar por el paso. Tú llegas en coche. ¿Qué toca?",
    options: [
      "Tocar el claxon para que se dé prisa",
      "Seguir si ya has invadido el paso",
      "Ceder el paso y parar si hace falta",
      "Parar solo si hay semáforo en rojo",
    ],
    answer: 2,
    why: "En un paso de peatones manda quien cruza o va a cruzar. No es una negociación.",
  },
  {
    id: "cinturon",
    prompt: "El cinturón en un turismo, en ciudad y en carretera…",
    options: [
      "Solo obliga al conductor",
      "Solo obliga fuera de poblado",
      "Obliga a conductor y a todos los pasajeros",
      "Es opcional si el trayecto es corto",
    ],
    answer: 2,
    why: "Delante y detrás. El «voy aquí al lado» no existe en el reglamento.",
  },
  {
    id: "alcohol",
    prompt: "Acabas de sacarte el carnet. Tu tasa máxima de alcohol en aire es…",
    options: ["0,25 mg/l", "0,15 mg/l", "0,50 mg/l", "0,00 mg/l, sin matices"],
    answer: 1,
    why: "Noveles y profesionales: 0,15 mg/l. El resto de conductores: 0,25 mg/l. Cero copas sigue siendo el plan.",
  },
  {
    id: "ambar",
    prompt: "El semáforo se pone ámbar fijo. ¿Qué significa?",
    options: [
      "Acelerar para no quedarte a medias",
      "Igual que el verde, con precaución",
      "Parar, como en rojo, si puedes hacerlo con seguridad",
      "Solo avisa: puedes seguir siempre",
    ],
    answer: 2,
    why: "Ámbar fijo obliga a detenerse como el rojo, salvo que estés tan cerca que frenar sea más peligroso.",
  },
  {
    id: "rotonda",
    prompt: "Entras en una glorieta. ¿Quién tiene preferencia?",
    options: [
      "Quien entra, porque viene por la derecha",
      "Quien ya circula dentro",
      "El vehículo más grande",
      "Quien pone el intermitente antes",
    ],
    answer: 1,
    why: "Dentro manda quien ya está circulando. Tú esperas un hueco. El intermitente no compra prioridad.",
  },
  {
    id: "adelantar",
    prompt: "Te están adelantando. ¿Qué haces?",
    options: [
      "Aceleras un poco para que no te cierren",
      "Te ciñes a la derecha y no subes la velocidad",
      "Frenas en seco para facilitar",
      "Te vas al carril izquierdo si está libre",
    ],
    answer: 1,
    why: "Derecha y sin aumentar la velocidad. Nada de duelos.",
  },
  {
    id: "stop",
    prompt: "Llegas a un STOP. ¿Qué es innegociable?",
    options: [
      "Reducir y seguir si no viene nadie",
      "Parar solo si se ve mal",
      "Detener el coche del todo y ceder el paso",
      "Basta con ir por debajo de 10 km/h",
    ],
    answer: 2,
    why: "STOP es detención total. «Casi paré» es falta. Después, cedes el paso.",
  },
];

export function verdict(score: number, total: number) {
  const ratio = score / total;
  if (ratio >= 0.75) {
    return {
      title: "Vas fino.",
      text: "La teórica se te da. Igual el examen no es un muro. Aun así, las prácticas son otra película.",
    };
  }
  if (ratio >= 0.5) {
    return {
      title: "Hay huecos. Normal.",
      text: "Para eso existe la teórica: para cerrarlos antes del día del examen, no durante.",
    };
  }
  return {
    title: "Esto es justo el trabajo.",
    text: "No hace falta talento. Hace falta sentarte, repetir tests y que alguien te explique el porqué.",
  };
}
