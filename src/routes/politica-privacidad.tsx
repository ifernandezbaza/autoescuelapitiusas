import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { SCHOOL } from "@/lib/school";

export const Route = createFileRoute("/politica-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad · Autoescuela Pitiusas" },
      { name: "description", content: "Política de privacidad de Autoescuela Pitiusas, S.L." },
    ],
  }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad">
      <p>
        La presente Política de Privacidad tiene como objetivo informar a los usuarios sobre las prácticas de
        privacidad de este sitio web, aclarando desde el primer momento que tiene una finalidad estrictamente
        informativa y de consulta, además de permitir anotar una solicitud de plaza en el propio navegador.
      </p>
      <section>
        <h2>1. Responsable del tratamiento</h2>
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
        <h2>2. Inexistencia de recogida de datos en servidor</h2>
        <p>
          Este sitio web no dispone de registro de usuarios, suscripción ni comentarios. Por consiguiente, no se
          recoge, solicita ni almacena en un servidor de {SCHOOL.legal} ningún correo electrónico, nombre ni
          ningún otro dato de carácter personal a través de la navegación por las páginas informativas.
        </p>
        <p>
          El formulario de reserva pide nombre, teléfono, permiso, franja horaria y una nota opcional. Esos datos
          se guardan únicamente en el navegador del usuario, en ese dispositivo, para que pueda consultarlos o
          borrarlos. No se transmiten a la autoescuela. La plaza de verdad se cierra por teléfono.
        </p>
      </section>
      <section>
        <h2>3. Recogida y tratamiento de la información (escenario hipotético)</h2>
        <p>
          En el supuesto hipotético de que en un futuro este sitio web enviara los formularios a un servidor del
          titular, dicha información:
        </p>
        <ul>
          <li>Sería recabada con el consentimiento expreso del usuario.</li>
          <li>
            Se utilizaría única y exclusivamente para la finalidad indicada en el momento de su recogida (por
            ejemplo, responder a una solicitud de plaza o de información).
          </li>
          <li>
            Se almacenaría aplicando las medidas de seguridad técnicas y organizativas necesarias para garantizar
            su confidencialidad.
          </li>
        </ul>
        <p>
          Dado que actualmente esta recogida de datos en servidor no se produce, ninguna de estas acciones se está
          llevando a cabo.
        </p>
      </section>
      <section>
        <h2>4. Cookies y datos de navegación</h2>
        <p>
          Este sitio web no utiliza cookies analíticas, publicitarias ni de terceros. Solo pueden utilizarse
          cookies técnicas o necesarias para la navegación. El detalle está en la{" "}
          <Link to="/politica-cookies">política de cookies</Link>.
        </p>
      </section>
      <section>
        <h2>5. Cesión de datos a terceros (escenario hipotético)</h2>
        <p>
          Al no existir actualmente un registro ni una base de datos de usuarios en poder del titular, no se
          realiza ninguna comunicación o cesión de datos a terceros. En el caso hipotético de que se llegara a
          recabar información personal en un futuro, esta jamás sería vendida, alquilada ni cedida a terceros sin
          el consentimiento previo y expreso del usuario, salvo obligación legal.
        </p>
      </section>
      <section>
        <h2>6. Ejercicio de los derechos de los usuarios</h2>
        <p>
          De acuerdo con la normativa vigente en materia de protección de datos, los usuarios tienen derecho a
          solicitar el acceso, rectificación, limitación, oposición o eliminación de sus datos, y también a
          presentar una reclamación ante la Agencia Española de Protección de Datos.
        </p>
        <p>
          La solicitud guardada en el navegador se borra desde la propia página de reserva, en ese dispositivo.
          Puesto que el titular no recibe esos datos, no existe una base de datos suya sobre la cual ejercer esos
          derechos respecto del formulario. Si una persona facilita datos por teléfono, puede ejercer sus derechos
          llamando al <a href={`tel:${SCHOOL.phoneTel}`}>{SCHOOL.phoneDisplay}</a>.
        </p>
      </section>
      <section>
        <h2>7. Modificaciones de esta política</h2>
        <p>
          El titular se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a
          novedades legislativas o a futuros cambios en la estructura de la web (como el envío real de
          formularios a un servidor). Cualquier cambio será publicado en esta misma página.
        </p>
      </section>
    </LegalPage>
  );
}
