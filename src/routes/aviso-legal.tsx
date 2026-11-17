import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { SCHOOL } from "@/lib/school";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal · Autoescuela Pitiusas" },
      { name: "description", content: "Aviso legal de Autoescuela Pitiusas, S.L., Eivissa." },
    ],
  }),
  component: AvisoLegalPage,
});

function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal">
      <section>
        <h2>1. Datos identificativos</h2>
        <p>
          En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de
          julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), se facilitan
          los siguientes datos del titular de este sitio web:
        </p>
        <ul>
          <li>
            <strong>Titular:</strong> {SCHOOL.legal}
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
          <li>
            <strong>Actividad:</strong> autoescuela. Enseñanza de la conducción de vehículos.
          </li>
        </ul>
      </section>
      <section>
        <h2>2. Objeto</h2>
        <p>
          El presente aviso legal regula el uso y acceso al sitio web puesto a disposición de los usuarios de
          Internet. La navegación por este sitio web atribuye la condición de usuario e implica la aceptación
          plena y sin reservas de todas las disposiciones incluidas en este aviso legal.
        </p>
      </section>
      <section>
        <h2>3. Propiedad intelectual e industrial</h2>
        <p>
          Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y códigos
          son titularidad de {SCHOOL.legal}, salvo que se indique una titularidad diferente. Queda prohibida su
          reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se
          pueda realizar con los contenidos sin autorización previa y por escrito.
        </p>
      </section>
      <section>
        <h2>4. Condiciones de uso</h2>
        <p>
          El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través
          de este sitio web y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y
          al ordenamiento legal vigente.
        </p>
      </section>
      <section>
        <h2>5. Política de privacidad y protección de datos</h2>
        <p>
          De conformidad con lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo
          (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los
          derechos digitales (LOPDGDD), le informamos de que este sitio web no dispone de registro de usuarios.
          No se envían datos personales a un servidor del titular por el mero hecho de navegar por las páginas
          informativas.
        </p>
        <p>
          El formulario de reserva guarda nombre, teléfono, permiso, franja y nota solo en el navegador de quien
          lo usa. Esos datos no llegan a {SCHOOL.legal} hasta que la persona llama. El contacto con la
          autoescuela se realiza por teléfono, en el {SCHOOL.phoneDisplay}. En cualquier caso, los datos que se
          faciliten por teléfono no serán cedidos a terceros salvo obligación legal. El usuario podrá ejercer
          sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad llamando a ese
          número. El detalle está en la <Link to="/politica-privacidad">política de privacidad</Link>.
        </p>
      </section>
      <section>
        <h2>6. Exclusión de responsabilidad</h2>
        <p>
          El titular no se hace responsable de los daños y perjuicios que pudieran derivarse del uso de la
          información publicada en este sitio web ni de la información facilitada a través de los enlaces a
          páginas externas.
        </p>
      </section>
      <section>
        <h2>7. Legislación aplicable y jurisdicción</h2>
        <p>
          Para la resolución de cualquier controversia que pudiera derivarse del acceso a este sitio web serán de
          aplicación las leyes españolas, siendo competentes los juzgados y tribunales de Eivissa, domicilio del
          titular.
        </p>
      </section>
    </LegalPage>
  );
}
