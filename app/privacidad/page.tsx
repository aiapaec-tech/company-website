import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidad | aiapaec tech",
  description:
    "Política de privacidad de aiapaec tech para servicios web y aplicaciones móviles.",
  robots: {
    index: true,
    follow: true,
  },
}

const updatedAt = "16 de febrero de 2026"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-lg p-6 md:p-10">
          <header className="mb-8">
            <p className="text-sm text-slate-500 mb-3">Última actualización: {updatedAt}</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Política de Privacidad</h1>
            <p className="mt-4 text-slate-700 leading-relaxed">
              En aiapaec tech respetamos y protegemos la privacidad de los usuarios de nuestros sitios web,
              aplicaciones móviles y demás servicios digitales.
            </p>
          </header>

          <section className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">1. Responsable del tratamiento</h2>
              <p>
                aiapaec tech es responsable del tratamiento de los datos personales que el usuario comparta a través
                de nuestros canales digitales y de soporte.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                2. Datos que tratamos y finalidad
              </h2>
              <p>
                Tratamos únicamente los datos necesarios para:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>gestión de incidencias, soporte técnico y seguimiento de tickets;</li>
                <li>garantizar el funcionamiento, seguridad y continuidad de nuestras aplicaciones y servicios;</li>
                <li>comunicación con el usuario sobre su solicitud o incidencia.</li>
              </ul>
              <p className="mt-2">
                No utilizamos datos personales para finalidades incompatibles con las anteriores.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">3. Base de legitimación</h2>
              <p>
                Todo dato personal será tratado bajo el consentimiento del usuario cuando este sea exigible,
                y/o cuando resulte necesario para prestar el servicio solicitado y atender incidencias operativas.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">4. Conservación de los datos</h2>
              <p>
                Conservamos los datos solo durante el tiempo necesario para cumplir las finalidades descritas o
                durante los plazos legales aplicables. Posteriormente, se eliminan o anonimizan de forma segura.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                5. Compartición y transferencias
              </h2>
              <p>
                No vendemos datos personales. Solo compartimos información con proveedores tecnológicos que actúan
                como encargados de tratamiento para operación de infraestructura, analítica técnica o soporte,
                bajo obligaciones de confidencialidad y seguridad.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">6. Seguridad</h2>
              <p>
                Aplicamos medidas técnicas y organizativas razonables para proteger la confidencialidad, integridad y
                disponibilidad de la información, incluyendo controles de acceso y buenas prácticas de seguridad.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">7. Derechos del usuario</h2>
              <p>
                El usuario puede solicitar en cualquier momento:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>acceso a los datos personales que tratamos;</li>
                <li>rectificación de datos inexactos;</li>
                <li>eliminación de su información personal;</li>
                <li>retiro del consentimiento cuando corresponda.</li>
              </ul>
              <p className="mt-2">
                Para ejercer estos derechos, puede contactarnos en{" "}
                <a className="underline hover:text-slate-900" href="mailto:hola@aiapaec.xyz">
                  hola@aiapaec.xyz
                </a>
                .
              </p>
              <p className="mt-3">
                También puede usar nuestro formulario de solicitud en{" "}
                <Link className="underline hover:text-slate-900" href="/eliminar-datos">
                  /eliminar-datos
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">8. Cambios en esta política</h2>
              <p>
                Podemos actualizar esta Política de Privacidad para reflejar cambios legales, técnicos u operativos.
                Publicaremos cualquier modificación en esta misma página indicando la fecha de actualización.
              </p>
            </div>
          </section>

          <footer className="mt-10 pt-6 border-t border-slate-200">
            <Link href="/" className="text-slate-700 hover:text-slate-900 underline">
              Volver al inicio
            </Link>
          </footer>
        </article>
      </div>
    </main>
  )
}
