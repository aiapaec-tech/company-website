import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidad | AIAPAEC",
  description: "Política de privacidad de AIAPAEC para sus servicios digitales y canales de soporte.",
  robots: {
    index: true,
    follow: true,
  },
}

const updatedAt = "16 de febrero de 2026"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-12 text-foreground md:py-16">
      <div className="container mx-auto px-4">
        <article className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(19,25,39,0.92),rgba(16,22,36,0.78))] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.42)] md:p-10">
          <header className="mb-8">
            <p className="font-mono-accent mb-3 text-sm uppercase tracking-[0.24em] text-sky-200/80">
              Última actualización: {updatedAt}
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">Política de Privacidad</h1>
            <p className="mt-4 leading-relaxed text-slate-300">
              En AIAPAEC tratamos datos personales solo cuando existe una necesidad operativa, contractual o legal
              vinculada a nuestros servicios digitales y canales de soporte.
            </p>
          </header>

          <section className="space-y-6 leading-relaxed text-slate-300">
            <div>
              <h2 className="font-display mb-2 text-xl text-white md:text-2xl">1. Responsable del tratamiento</h2>
              <p>
                AIAPAEC es responsable del tratamiento de los datos personales compartidos a través de formularios,
                canales de soporte, correo electrónico u otros puntos de contacto oficiales.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-2 text-xl text-white md:text-2xl">
                2. Datos que tratamos y finalidad
              </h2>
              <p>
                Tratamos únicamente los datos necesarios para:
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>gestión de incidencias, soporte técnico y seguimiento de tickets;</li>
                <li>garantizar el funcionamiento, seguridad y continuidad de nuestras aplicaciones y servicios;</li>
                <li>comunicación con el usuario sobre su solicitud o incidencia.</li>
              </ul>
              <p className="mt-2">
                No utilizamos datos personales para finalidades incompatibles con las anteriores.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-2 text-xl text-white md:text-2xl">3. Base de legitimación</h2>
              <p>
                Tratamos datos personales bajo la base legal aplicable en cada caso. Cuando corresponde, solicitamos
                consentimiento previo. En otros escenarios, el tratamiento se realiza para ejecutar el servicio
                solicitado o atender necesidades operativas y de seguridad.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-2 text-xl text-white md:text-2xl">4. Conservación de los datos</h2>
              <p>
                Conservamos la información solo durante el plazo necesario para cumplir las finalidades descritas o
                atender obligaciones legales. Al cierre de ese periodo, los datos se eliminan o anonimizan de forma
                segura.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-2 text-xl text-white md:text-2xl">5. Compartición y transferencias</h2>
              <p>
                No vendemos datos personales. Compartimos información solo con proveedores tecnológicos que participan
                en infraestructura, analítica técnica o soporte, siempre bajo obligaciones de confidencialidad y
                seguridad adecuadas.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-2 text-xl text-white md:text-2xl">6. Seguridad</h2>
              <p>
                Aplicamos medidas técnicas y organizativas razonables para proteger la confidencialidad, integridad y
                disponibilidad de la información, incluyendo control de accesos y buenas prácticas operativas.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-2 text-xl text-white md:text-2xl">7. Derechos del usuario</h2>
              <p>
                El usuario puede solicitar en cualquier momento:
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>acceso a los datos personales que tratamos;</li>
                <li>rectificación de datos inexactos;</li>
                <li>eliminación de su información personal;</li>
                <li>retiro del consentimiento cuando corresponda.</li>
              </ul>
              <p className="mt-2">
                Para ejercer estos derechos, puede contactarnos en{" "}
                <a className="underline transition-colors hover:text-white" href="mailto:hola@aiapaec.xyz">
                  hola@aiapaec.xyz
                </a>
                .
              </p>
              <p className="mt-3">
                También puede usar nuestro formulario de solicitud en{" "}
                <Link className="underline transition-colors hover:text-white" href="/eliminar-datos">
                  /eliminar-datos
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display mb-2 text-xl text-white md:text-2xl">8. Cambios en esta política</h2>
              <p>
                Podemos actualizar esta política para reflejar cambios legales, técnicos u operativos. Publicaremos
                cualquier modificación en esta misma página indicando la fecha de actualización correspondiente.
              </p>
            </div>
          </section>

          <footer className="mt-10 border-t border-white/10 pt-6">
            <Link href="/" className="underline transition-colors hover:text-white">
              Volver al inicio
            </Link>
          </footer>
        </article>
      </div>
    </main>
  )
}
