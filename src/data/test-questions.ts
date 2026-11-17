export type TestQuestion = {
  id: number;
  question: string;
  options: [string, string, string, string];
  correct: number;
  why?: string;
};

export const questions: TestQuestion[] = [
  { id: 1, question: "En poblado, sin otra señal, ¿velocidad máxima para un turismo?", options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"], correct: 2 },
  { id: 2, question: "En autopista, sin otra señal, ¿velocidad máxima para turismo?", options: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"], correct: 2 },
  { id: 3, question: "En carretera convencional con arcén pavimentado de ≥1,50 m, ¿máxima para turismo?", options: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"], correct: 1 },
  { id: 4, question: "Velocidad máxima en vía urbana de plataforma única (zona residencial)?", options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"], correct: 0 },
  { id: 5, question: "Con lluvia intensa, ¿qué debes hacer con la velocidad?", options: ["Mantenerla", "Reducirla", "Aumentarla", "Parar siempre"], correct: 1 },
  { id: 6, question: "Velocidad máxima en travesía?", options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"], correct: 1 },
  { id: 7, question: "En autovía, velocidad mínima para turismo?", options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"], correct: 2 },
  { id: 8, question: "¿Se puede circular a velocidad anormalmente reducida sin causa justificada?", options: ["Sí", "No", "Solo de noche", "Solo en poblado"], correct: 1 },
  { id: 9, question: "Velocidad máxima para motocicleta en autopista?", options: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"], correct: 2 },
  { id: 10, question: "En vía interurbana con visibilidad reducida por niebla, ¿qué se recomienda?", options: ["Acelerar", "Reducir velocidad y aumentar distancia", "Encender largas", "Parar en el arcén"], correct: 1 },
  { id: 11, question: "Velocidad máxima en zona escolar señalizada?", options: ["La de la señal", "Siempre 30", "Siempre 20", "40"], correct: 0 },
  { id: 12, question: "¿Puede un turismo superar los 120 km/h en autopista si no hay tráfico?", options: ["Sí", "No", "Solo de día", "Solo con permiso especial"], correct: 1 },
  { id: 13, question: "Velocidad máxima en carretera convencional sin arcén pavimentado ≥1,50 m?", options: ["70 km/h", "80 km/h", "90 km/h", "100 km/h"], correct: 2 },
  { id: 14, question: "Con hielo en la calzada, ¿qué velocidad es la adecuada?", options: ["La máxima permitida", "La que permita detenerse a tiempo", "Mínima posible", "30 km/h fija"], correct: 1 },
  { id: 15, question: "En poblado, ¿se puede circular a más de 50 km/h si la vía lo permite y está señalizado?", options: ["No", "Sí", "Solo turismos", "Solo de noche"], correct: 1 },
  { id: 16, question: "Velocidad máxima en vía de servicio de autopista?", options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"], correct: 2 },
  { id: 17, question: "En intersección sin señalización, ¿quién tiene prioridad?", options: ["El que viene por la derecha", "El que viene por la izquierda", "El más grande", "El que llega primero"], correct: 0 },
  { id: 18, question: "Al adelantar, ¿cuándo se debe volver al carril derecho?", options: ["Inmediatamente", "Cuando se vea el vehículo adelantado por el retrovisor", "Después de 100 m", "Nunca"], correct: 1 },
  { id: 19, question: "¿Se puede adelantar en un paso de peatones sin semáforo?", options: ["Sí", "No", "Solo si no hay peatones", "Solo de noche"], correct: 1 },
  { id: 20, question: "Prioridad en una glorieta:", options: ["Los que entran", "Los que ya circulan por ella", "El más rápido", "Los de la derecha"], correct: 1 },
  { id: 21, question: "¿Se puede adelantar en curva con visibilidad reducida?", options: ["Sí", "No", "Solo motos", "Solo si es de día"], correct: 1 },
  { id: 22, question: "Un vehículo de emergencia con señales acústicas y luminosas:", options: ["Tiene prioridad absoluta", "Solo si es policía", "No tiene prioridad", "Solo en poblado"], correct: 0 },
  { id: 23, question: "Al aproximarse a un paso a nivel con barreras bajadas:", options: ["Se puede adelantar", "Hay que detenerse", "Se puede pasar si no viene tren", "Se reduce velocidad"], correct: 1 },
  { id: 24, question: "¿Quién tiene prioridad en un estrechamiento sin señal?", options: ["El que sube", "El que baja", "El más grande", "El que llega primero"], correct: 0 },
  { id: 25, question: "Adelantamiento por la derecha:", options: ["Está siempre prohibido", "Permitido en algunas circunstancias (colas, etc.)", "Solo en autopista", "Solo motos"], correct: 1 },
  { id: 26, question: "En un cruce con semáforo en ámbar intermitente:", options: ["Pasar sin detenerse", "Detenerse y ceder el paso", "Acelerar", "Girar obligatoriamente"], correct: 1 },
  { id: 27, question: "Prioridad de un peatón en paso de peatones:", options: ["Absoluta", "Solo si el semáforo está en verde", "Ninguna", "Solo niños"], correct: 0 },
  { id: 28, question: "¿Se puede adelantar a un ciclista en poblado dejando menos de 1,5 m?", options: ["Sí", "No", "Solo si va despacio", "Solo de día"], correct: 1 },
  { id: 29, question: "En intersección con señal de STOP:", options: ["Reducir y pasar", "Detenerse completamente y ceder", "Pitar", "Acelerar"], correct: 1 },
  { id: 30, question: "Un vehículo que sale de una gasolinera:", options: ["Tiene prioridad", "Debe ceder el paso", "Puede forzar", "Tiene prioridad si es de noche"], correct: 1 },
  { id: 31, question: "Adelantamiento en puente:", options: ["Permitido", "Prohibido", "Solo si es ancho", "Solo turismos"], correct: 1 },
  { id: 32, question: "Prioridad en un carril de aceleración:", options: ["El que entra", "El que circula por la vía principal", "El más rápido", "Igualdad"], correct: 1 },
  { id: 33, question: "Señal circular con borde rojo y fondo blanco:", options: ["Obligación", "Prohibición", "Peligro", "Información"], correct: 1 },
  { id: 34, question: "Tasa máxima de alcohol en sangre para conductor novel:", options: ["0,5 g/l", "0,3 g/l", "0,25 g/l", "0,0 g/l"], correct: 2 },
  { id: 35, question: "¿Es obligatorio llevar el permiso de conducir?", options: ["No", "Sí", "Solo en viajes largos", "Solo de noche"], correct: 1 },
  { id: 36, question: "Señal triangular con borde rojo:", options: ["Prohibición", "Peligro", "Obligación", "Fin de prohibición"], correct: 1 },
  { id: 37, question: "Uso del cinturón de seguridad:", options: ["Opcional en ciudad", "Obligatorio en todos los asientos", "Solo conductor", "Solo en carretera"], correct: 1 },
  { id: 38, question: "¿Qué indica una línea continua?", options: ["Se puede adelantar", "No se puede cruzar", "Carril bus", "Aparcamiento"], correct: 1 },
  { id: 39, question: "Documentos obligatorios en el vehículo:", options: ["Solo permiso", "Permiso, permiso de circulación e ITV", "Solo seguro", "Ninguno"], correct: 1 },
  { id: 40, question: "Señal de STOP:", options: ["Ceder el paso", "Detención obligatoria", "Reducir velocidad", "Prohibido girar"], correct: 1 },
  { id: 41, question: "Alcohol y conducción:", options: ["Afecta solo a altas dosis", "Reduce reflejos desde bajas tasas", "No afecta", "Mejora la concentración"], correct: 1 },
  { id: 42, question: "¿Se puede usar el móvil mientras se conduce?", options: ["Sí, con manos libres siempre", "No, salvo manos libres homologado y en condiciones seguras", "Sí", "Solo parado"], correct: 1 },
  { id: 43, question: "Luces de cruce:", options: ["Solo de noche", "Obligatorias de noche y en condiciones de baja visibilidad", "Opcionales", "Solo en autopista"], correct: 1 },
  { id: 44, question: "Distancia de seguridad:", options: ["10 metros fijos", "La que permita detenerse sin colisionar", "50 metros", "No es necesaria"], correct: 1 },
  { id: 45, question: "Señal de ceda el paso:", options: ["Detención obligatoria", "Ceder el paso sin detenerse necesariamente", "Prohibido entrar", "Velocidad máxima"], correct: 1 },
  { id: 46, question: "ITV:", options: ["Opcional", "Obligatoria según antigüedad del vehículo", "Solo para taxis", "Cada 10 años"], correct: 1 },
  { id: 47, question: "Chaleco reflectante:", options: ["Opcional", "Obligatorio al salir del vehículo en vía interurbana", "Solo de noche", "Solo en autopista"], correct: 1 },
  { id: 48, question: "Neumáticos:", options: ["Se pueden usar lisos", "Deben tener dibujo mínimo reglamentario", "Solo importa la marca", "Se cambian cada año"], correct: 1 },
  { id: 49, question: "Al cambiar de carril:", options: ["Señalizar y comprobar espejos y ángulo muerto", "Solo mirar", "No hace falta señalizar", "Acelerar"], correct: 0 },
  { id: 50, question: "Conducción con niebla:", options: ["Luces largas", "Luces de cruce o antiniebla y reducir velocidad", "Apagar luces", "Acelerar"], correct: 1 },
  { id: 51, question: "Estacionamiento en doble fila:", options: ["Permitido 5 minutos", "Prohibido", "Permitido de noche", "Permitido si se deja contacto"], correct: 1 },
  { id: 52, question: "Peatón que cruza fuera de paso:", options: ["Tiene siempre prioridad", "Debe extremar precaución, el conductor también", "No tiene derechos", "Solo niños tienen prioridad"], correct: 1 },
  { id: 53, question: "Uso de intermitentes:", options: ["Opcional", "Obligatorio en cambios de dirección y de carril", "Solo en ciudad", "Solo de noche"], correct: 1 },
  { id: 54, question: "Circulación por el arcén:", options: ["Permitida para adelantar", "Prohibida salvo excepciones (emergencia, etc.)", "Permitida siempre", "Solo motos"], correct: 1 },
  { id: 55, question: "Conducción nocturna:", options: ["Igual que de día", "Mayor atención y uso correcto de luces", "Se puede ir más rápido", "No hace falta cinturón"], correct: 1 },
  { id: 56, question: "Vehículo averiado en autopista:", options: ["Dejarlo en el carril", "Señalizar, chaleco y colocar en lugar seguro", "Empujarlo", "Dejarlo sin señalizar"], correct: 1 },
  { id: 57, question: "Prioridad en paso de peatones con semáforo en rojo para vehículos:", options: ["Los vehículos", "Los peatones", "Nadie", "El que llegue primero"], correct: 1 },
  { id: 58, question: "¿Se puede conducir con el brazo enyesado?", options: ["Sí siempre", "Solo si no impide el control del vehículo", "No", "Solo en ciudad"], correct: 1 },
  { id: 59, question: "Línea discontinua:", options: ["Prohibido adelantar", "Se puede adelantar si es seguro", "Carril bus", "Prohibido circular"], correct: 1 },
  { id: 60, question: "Conducción bajo efectos de medicamentos:", options: ["Siempre segura", "Hay que comprobar si afectan a la conducción", "Mejora reflejos", "Prohibida siempre"], correct: 1 },
  { id: 61, question: "Entrada en autopista:", options: ["Prioridad el que entra", "Ceder el paso a los que circulan", "Parar siempre", "Acelerar sin mirar"], correct: 1 },
  { id: 62, question: "Uso del claxon:", options: ["Libre", "Solo para evitar un accidente o advertir de presencia", "Para saludar", "En ciudad siempre"], correct: 1 },
  { id: 63, question: "Distancia lateral al adelantar a un ciclista fuera de poblado:", options: ["1 metro", "1,5 metros", "0,5 metros", "No hay mínimo"], correct: 1 },
  { id: 64, question: "Responsabilidad del conductor:", options: ["Solo del vehículo", "De su conducta y del estado del vehículo", "Ninguna", "Solo de la velocidad"], correct: 1 },
];

/** Fisher-Yates sobre una copia. No muta el banco. */
export function drawTest(count = 8): TestQuestion[] {
  const copy = questions.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = copy[i]!;
    copy[i] = copy[j]!;
    copy[j] = swap;
  }
  return copy.slice(0, count);
}
