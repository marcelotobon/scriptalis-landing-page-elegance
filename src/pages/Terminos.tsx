
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terminos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-scriptalis-accent mb-2">Términos de Servicio - Scriptalis</h1>
          <p className="text-gray-500 mb-8">Fecha de última actualización: 16 de mayo de 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-scriptalis-dark mb-4">1. Introducción</h2>
            <p className="text-gray-700 mb-4">
              Bienvenido a Scriptalis ("nosotros", "nuestro", "nos" o "Scriptalis"), con domicilio fiscal en Av. Virtud 1451, Culiacán, Sinaloa, RFC GUTM950622FA5. Al acceder o utilizar nuestro servicio, aplicación web, APIs, o cualquier otro componente de Scriptalis (colectivamente, el "Servicio"), usted ("Usuario", "usted" o "su") acepta cumplir y quedar vinculado por estos Términos de Servicio ("Términos"). Lea estos Términos detenidamente antes de utilizar el Servicio.
            </p>
            <p className="text-gray-700 mb-4">
              Scriptalis es un asistente de redacción potenciado por inteligencia artificial diseñado para ayudar a periodistas, redactores y profesionales de la comunicación a generar, editar y verificar contenido.
            </p>
            <p className="text-gray-700 mb-4">
              Estos Términos están sujetos a las disposiciones de la Ley Federal de Protección al Consumidor, Ley Federal de Protección de Datos Personales en Posesión de los Particulares, Ley Federal del Derecho de Autor, Código Civil Federal, y demás legislación aplicable en los Estados Unidos Mexicanos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-scriptalis-dark mb-4">2. Elegibilidad y Cuentas</h2>
            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">2.1 Elegibilidad</h3>
            <p className="text-gray-700 mb-4">Para utilizar Scriptalis, usted debe:</p>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Tener al menos 18 años de edad o la mayoría de edad legal en su jurisdicción.</li>
              <li className="mb-2">Tener capacidad legal para celebrar un contrato vinculante.</li>
              <li className="mb-2">No estar legalmente prohibido de utilizar el Servicio según las leyes aplicables.</li>
            </ul>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">2.2 Cuentas de Usuario</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Usted debe registrarse y mantener una cuenta activa para ciertos aspectos del Servicio.</li>
              <li className="mb-2">Usted es responsable de mantener la confidencialidad de sus credenciales de cuenta.</li>
              <li className="mb-2">Usted es responsable de todas las actividades que ocurran bajo su cuenta.</li>
              <li className="mb-2">Debe proporcionar información precisa y completa durante el proceso de registro.</li>
              <li className="mb-2">Debe notificarnos inmediatamente si detecta cualquier uso no autorizado de su cuenta.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-scriptalis-dark mb-4">3. Modelo de Suscripción y Pagos</h2>
            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">3.1 Créditos y Planes</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">El Servicio funciona mediante un sistema de créditos.</li>
              <li className="mb-2">Los créditos se proporcionan mensualmente según el plan contratado.</li>
              <li className="mb-2">Los planes disponibles incluyen: Básico (99 créditos), Premium (299 créditos) y Profesional (999 créditos).</li>
              <li className="mb-2">Los créditos no utilizados pueden expirar según lo establecido en las condiciones del plan específico.</li>
            </ul>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">3.2 Pagos y Facturación</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Todos los pagos son procesados a través de proveedores de pagos seguros.</li>
              <li className="mb-2">Las tarifas y cargos se facturarán según el ciclo de facturación aplicable a su plan.</li>
              <li className="mb-2">Los precios pueden ser modificados con previo aviso.</li>
              <li className="mb-2">No se emitirán reembolsos por período parciales de servicio.</li>
            </ul>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">3.3 Cancelación</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Puede cancelar su suscripción en cualquier momento.</li>
              <li className="mb-2">La cancelación se hará efectiva al final del período de facturación actual.</li>
              <li className="mb-2">Algunos datos pueden ser retenidos según la Política de Privacidad incluso después de la cancelación.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-scriptalis-dark mb-4">4. Licencia y Uso del Servicio</h2>
            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">4.1 Licencia Limitada</h3>
            <p className="text-gray-700 mb-4">Sujeto a su cumplimiento de estos Términos, Scriptalis le otorga una licencia limitada, no exclusiva, no transferible, revocable para:</p>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Acceder y utilizar el Servicio para sus propios fines profesionales o personales.</li>
              <li className="mb-2">Generar, editar, descargar y utilizar el contenido creado mediante el Servicio ("Contenido Generado").</li>
            </ul>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">4.2 Restricciones</h3>
            <p className="text-gray-700 mb-4">Usted se compromete a no:</p>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Copiar, modificar, distribuir, vender, alquilar, prestar, compartir o explotar comercialmente cualquier parte del Servicio.</li>
              <li className="mb-2">Realizar ingeniería inversa, descompilar, desensamblar o de otro modo intentar descubrir el código fuente del Servicio.</li>
              <li className="mb-2">Eludir cualquier medida tecnológica implementada para limitar el uso del Servicio.</li>
              <li className="mb-2">Utilizar el Servicio de manera que pueda dañar, deshabilitar, sobrecargar o deteriorar el Servicio.</li>
              <li className="mb-2">Usar robots, arañas, raspadores o mecanismos similares de recolección de datos sin nuestro consentimiento previo por escrito.</li>
              <li className="mb-2">Utilizar el Servicio para crear contenido que sea ilegal, difamatorio, obsceno, ofensivo, fraudulento o que infrinja derechos de propiedad intelectual.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-scriptalis-dark mb-4">5. Contenido y Propiedad Intelectual</h2>
            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">5.1 Contenido del Usuario</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Usted mantiene los derechos sobre el contenido que cargue, transmita o introduzca en el Servicio ("Contenido del Usuario").</li>
              <li className="mb-2">Al utilizar el Servicio, usted otorga a Scriptalis una licencia mundial, no exclusiva, libre de regalías para usar, almacenar, mostrar, reproducir y modificar el Contenido del Usuario únicamente con el fin de operar y mejorar el Servicio, de conformidad con la Ley Federal del Derecho de Autor.</li>
            </ul>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">5.2 Contenido Generado</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Usted posee todos los derechos sobre el Contenido Generado que cree usando Scriptalis, sujeto a los derechos preexistentes de terceros en cualquier contenido utilizado para generar el Contenido Generado, de acuerdo con la legislación mexicana en materia de propiedad intelectual.</li>
              <li className="mb-2">Scriptalis no se atribuye ninguna propiedad sobre el Contenido Generado por el Usuario.</li>
              <li className="mb-2">Usted es responsable de garantizar que su uso del Contenido Generado no infringe derechos de terceros.</li>
            </ul>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">5.3 Propiedad de Scriptalis</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">El Servicio, incluyendo todo el software, diseños, texto, gráficos, interfaces, y demás contenido relacionado con el Servicio (excepto el Contenido del Usuario) son propiedad de Scriptalis y están protegidos por la Ley Federal del Derecho de Autor, la Ley de la Propiedad Industrial y demás legislación aplicable en México.</li>
              <li className="mb-2">Todas las marcas comerciales, marcas de servicio, y logotipos utilizados en relación con el Servicio son propiedad de Scriptalis o sus licenciantes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-scriptalis-dark mb-4">6. Limitaciones de Responsabilidad y Garantías</h2>
            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">6.1 Disponibilidad del Servicio</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Scriptalis hace esfuerzos comercialmente razonables para mantener el Servicio operativo, pero no garantiza que el Servicio sea ininterrumpido o libre de errores.</li>
              <li className="mb-2">Nos reservamos el derecho de modificar, suspender o discontinuar el Servicio, o cualquier parte del mismo, con previo aviso conforme a lo dispuesto por la Ley Federal de Protección al Consumidor.</li>
            </ul>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">6.2 Precisión del Contenido</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Scriptalis utiliza tecnología de inteligencia artificial avanzada, pero no puede garantizar la precisión, integridad o calidad del Contenido Generado.</li>
              <li className="mb-2">La herramienta de verificación de datos proporciona resultados basados en fuentes disponibles, pero no reemplaza la verificación profesional independiente.</li>
              <li className="mb-2">Usted es responsable de revisar, editar y verificar todo el Contenido Generado antes de su uso o publicación.</li>
            </ul>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">6.3 Limitación de Responsabilidad</h3>
            <p className="text-gray-700 mb-4">EN LA MEDIDA PERMITIDA POR LA LEY FEDERAL DE PROTECCIÓN AL CONSUMIDOR Y DEMÁS LEYES APLICABLES EN MÉXICO, SCRIPTALIS Y SUS DIRECTORES, EMPLEADOS, AGENTES, AFILIADOS Y SOCIOS LIMITAN SU RESPONSABILIDAD POR:</p>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENTES O PUNITIVOS.</li>
              <li className="mb-2">PÉRDIDA DE BENEFICIOS, INGRESOS, DATOS, USO, BUENA VOLUNTAD U OTRAS PÉRDIDAS INTANGIBLES.</li>
              <li className="mb-2">CUALQUIER ACCESO NO AUTORIZADO, ALTERACIÓN, ROBO O DESTRUCCIÓN DE SU CUENTA O DATOS.</li>
              <li className="mb-2">CUALQUIER RECLAMACIÓN RELACIONADA CON EL CONTENIDO GENERADO O SU USO DEL SERVICIO.</li>
            </ul>
            <p className="text-gray-700 mb-4">ESTA LIMITACIÓN NO EXCLUYE LA RESPONSABILIDAD QUE NO PUEDA EXCLUIRSE SEGÚN LA LEGISLACIÓN MEXICANA.</p>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">6.4 Renuncia de Garantías</h3>
            <p className="text-gray-700 mb-4">EL SERVICIO SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD", CON LAS GARANTÍAS MÍNIMAS ESTABLECIDAS POR LA LEY FEDERAL DE PROTECCIÓN AL CONSUMIDOR. CUALQUIER GARANTÍA IMPLÍCITA QUE NO PUEDA SER LEGALMENTE EXCLUIDA BAJO LA LEGISLACIÓN MEXICANA SE LIMITA A LA DURACIÓN MÍNIMA PERMITIDA POR LEY.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-scriptalis-dark mb-4">7. Indemnización</h2>
            <p className="text-gray-700 mb-4">
              Usted acepta defender, indemnizar y mantener indemne a Scriptalis y sus afiliados, directores, empleados y agentes de cualquier reclamación, responsabilidad, daño, pérdida y gasto (incluyendo honorarios y costos legales razonables) que surjan de o estén relacionados con:
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Su uso del Servicio.</li>
              <li className="mb-2">Su incumplimiento de estos Términos.</li>
              <li className="mb-2">Su violación de cualquier derecho de terceros, incluyendo derechos de propiedad intelectual.</li>
              <li className="mb-2">Cualquier Contenido del Usuario o Contenido Generado que usted cree, publique, comparta o almacene en o a través del Servicio.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-scriptalis-dark mb-4">8. Privacidad y Datos</h2>
            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">8.1 Política de Privacidad y Aviso de Privacidad</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Nuestro tratamiento de los datos personales está regulado por nuestra Política de Privacidad y el Aviso de Privacidad dispuesto de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, que forman parte integral de estos Términos.</li>
              <li className="mb-2">Al utilizar nuestro Servicio, usted reconoce que ha leído y comprende nuestra Política de Privacidad y Aviso de Privacidad.</li>
            </ul>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">8.2 Derechos ARCO</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">De conformidad con la legislación mexicana, usted cuenta con los derechos de Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO) respecto a sus datos personales.</li>
              <li className="mb-2">Para ejercer cualquiera de estos derechos, deberá enviar una solicitud por escrito a [correo de contacto] o a través de los medios establecidos en nuestro Aviso de Privacidad.</li>
              <li className="mb-2">Daremos respuesta a su solicitud dentro de los plazos establecidos por la ley mexicana.</li>
            </ul>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">8.3 Seguridad de Datos</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Implementamos medidas de seguridad diseñadas para proteger sus datos, de conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento.</li>
              <li className="mb-2">No podemos garantizar la seguridad absoluta de la información transmitida a través de Internet o almacenada en nuestros sistemas.</li>
            </ul>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">8.4 Uso de Datos para Mejora del Servicio</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Scriptalis puede utilizar datos agregados y anonimizados para mejorar sus algoritmos y servicios.</li>
              <li className="mb-2">No utilizaremos su Contenido del Usuario para entrenar modelos de IA sin su consentimiento explícito, conforme a la legislación mexicana aplicable.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-scriptalis-dark mb-4">9. Rescisión</h2>
            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">9.1 Rescisión por su Parte</h3>
            <p className="text-gray-700 mb-4">
              Puede rescindir estos Términos en cualquier momento dejando de usar el Servicio y cancelando su cuenta.
            </p>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">9.2 Rescisión por Nuestra Parte</h3>
            <p className="text-gray-700 mb-4">
              Podemos rescindir o suspender su acceso al Servicio, en cualquier momento y sin previo aviso, por cualquier motivo, incluyendo, sin limitación, si consideramos que ha violado estos Términos.
            </p>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">9.3 Efectos de la Rescisión</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Tras la rescisión, su derecho a utilizar el Servicio cesará inmediatamente.</li>
              <li className="mb-2">Todas las disposiciones de estos Términos que, por su naturaleza, deberían sobrevivir a la rescisión, sobrevivirán a la rescisión.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-scriptalis-dark mb-4">10. Cambios en los Términos</h2>
            <p className="text-gray-700 mb-4">
              Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Los cambios sustanciales se notificarán con al menos 30 días de anticipación. El uso continuado del Servicio después de que dichos cambios entren en vigor constituye su aceptación de los nuevos Términos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-scriptalis-dark mb-4">11. Disposiciones Generales</h2>
            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">11.1 Ley Aplicable</h3>
            <p className="text-gray-700 mb-4">
              Estos Términos se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos Mexicanos, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Para la interpretación, cumplimiento y ejecución de los presentes Términos, las partes se someten expresamente a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles en razón de sus domicilios presentes o futuros.
            </p>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">11.2 Resolución de Disputas y PROFECO</h3>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Cualquier disputa que surja de o en relación con estos Términos será resuelta en primera instancia mediante negociación de buena fe entre las partes.</li>
              <li className="mb-2">En caso de no llegar a un acuerdo satisfactorio, el Usuario podrá acudir a la Procuraduría Federal del Consumidor (PROFECO) para presentar su reclamación conforme a los procedimientos establecidos en la Ley Federal de Protección al Consumidor.</li>
              <li className="mb-2">Si la controversia persiste, las partes acuerdan someterla a arbitraje de conformidad con el Reglamento de la Cámara de Comercio de la Ciudad de México.</li>
            </ul>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">11.3 Divisibilidad</h3>
            <p className="text-gray-700 mb-4">
              Si alguna disposición de estos Términos se considera inválida, ilegal o inaplicable, dicha disposición se limitará o eliminará en la medida mínima necesaria, y las disposiciones restantes continuarán en pleno vigor y efecto, de conformidad con el Código Civil Federal y demás leyes aplicables en México.
            </p>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">11.4 Acuerdo Completo</h3>
            <p className="text-gray-700 mb-4">
              Estos Términos constituyen el acuerdo completo entre usted y Scriptalis con respecto al Servicio y reemplazan todas las comunicaciones, propuestas y representaciones anteriores o contemporáneas, orales o escritas, con respecto al Servicio o el asunto de estos Términos.
            </p>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">11.5 Sin Renuncia</h3>
            <p className="text-gray-700 mb-4">
              Ninguna renuncia por parte de Scriptalis a cualquier término o condición establecidos en estos Términos se considerará una renuncia adicional o continua a dicho término o condición o una renuncia a cualquier otro término o condición.
            </p>

            <h3 className="text-xl font-semibold text-scriptalis-dark mb-3">11.6 Cesión</h3>
            <p className="text-gray-700 mb-4">
              No puede ceder o transferir estos Términos, por operación de ley o de otro modo, sin el consentimiento previo por escrito de Scriptalis. Cualquier intento de cesión o transferencia que infrinja esta sección será nulo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-scriptalis-dark mb-4">12. Contacto</h2>
            <p className="text-gray-700 mb-4">
              Si tiene alguna pregunta sobre estos Términos, reclamo o cualquier otro asunto relacionado con el Servicio, contáctenos en: <a href="mailto:ventas@scriptalis.com" className="text-scriptalis-accent hover:underline">ventas@scriptalis.com</a>.
            </p>

            <p className="text-gray-700 mb-4">
              Para asuntos relacionados con protección al consumidor, puede acudir a la Procuraduría Federal del Consumidor (PROFECO):
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700">
              <li className="mb-2">Teléfono: 800 468 8722</li>
              <li className="mb-2">Sitio web: <a href="https://www.gob.mx/profeco" target="_blank" rel="noopener noreferrer" className="text-scriptalis-accent hover:underline">www.gob.mx/profeco</a></li>
            </ul>
          </section>

          <div className="p-4 bg-gray-100 border border-gray-300 rounded-md mb-8">
            <p className="font-semibold text-gray-700 mb-2">NOTA IMPORTANTE:</p>
            <p className="text-gray-700">
              Estos Términos de Servicio se ponen a disposición del Usuario en idioma español. En caso de cualquier discrepancia entre versiones en diferentes idiomas, la versión en español prevalecerá.
            </p>
            <p className="text-gray-700 mt-4">
              Al utilizar nuestro servicio, usted reconoce haber leído, entendido y aceptado estar sujeto a estos Términos de Servicio en su totalidad.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terminos;
