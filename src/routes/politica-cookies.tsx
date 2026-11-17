import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { SCHOOL } from "@/lib/school";

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies · Autoescuela Pitiusas" },
      { name: "description", content: "Política de cookies de Autoescuela Pitiusas, S.L." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalPage title="Política de cookies">
      <section>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web almacenan en el navegador del usuario al
          visitarlos. Sirven para recordar información sobre la visita, como preferencias de idioma, configuración
          de visualización y otros datos de navegación.
        </p>
      </section>
      <section>
        <h2>2. ¿Quién es el responsable del tratamiento?</h2>
        <ul>
          <li>
            <strong>Responsable:</strong> {SCHOOL.legal}
          </li>
          <li>
            <strong>CIF:</strong> {SCHOOL.cif}
          </li>
          <li>
            <strong>Domicilio:</strong> {SCHOOL.street}, {SCHOOL.city}, {SCHOOL.region}
          </li>
          <li>
            <strong>Teléfono:</strong> <a href={`tel:${SCHOOL.phoneTel}`}>{SCHOOL.phoneDisplay}</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>3. Tipos de cookies utilizadas</h2>
        <p>Este sitio web utiliza exclusivamente las siguientes cookies:</p>
        <ul>
          <li>
            <strong>Cookies técnicas o necesarias:</strong> permiten la navegación por el sitio web y la
            utilización de sus funcionalidades básicas.
          </li>
        </ul>
        <p>Este sitio web no utiliza cookies analíticas, publicitarias ni de terceros.</p>
        <p>
          La solicitud de plaza no se guarda en una cookie: queda en el almacenamiento local del navegador, en el
          dispositivo de quien la escribe, y se puede borrar desde la página de reserva.
        </p>
      </section>
      <section>
        <h2>4. ¿Cómo gestionar las cookies?</h2>
        <p>
          El usuario puede configurar su navegador para aceptar o rechazar todas las cookies, o bien seleccionar
          aquellas cuya instalación admite y cuáles no. A continuación se facilitan los enlaces de configuración
          de los principales navegadores:
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
              target="_blank"
              rel="noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Si el usuario bloquea o elimina las cookies técnicas, es posible que algunas funcionalidades del sitio
          web no estén disponibles o no funcionen correctamente.
        </p>
      </section>
      <section>
        <h2>5. Actualizaciones de esta política</h2>
        <p>
          Esta política de cookies puede actualizarse en función de cambios normativos o de la incorporación de
          nuevas funcionalidades en el sitio web. Se recomienda al usuario revisar esta página periódicamente.
        </p>
      </section>
      <section>
        <h2>6. Más información</h2>
        <p>
          Para cualquier consulta sobre esta política de cookies, el usuario puede ponerse en contacto llamando
          al <a href={`tel:${SCHOOL.phoneTel}`}>{SCHOOL.phoneDisplay}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
